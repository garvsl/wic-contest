import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Header from "../homepage/header";
import "./question.css";
import FileSubmit from "./fileSubmit";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

export default function Question() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState();
  // const [loading, setLoading] = useState(true);
  const { num } = useParams();
  const currentUser = auth.currentUser;

  useEffect(() => {
    (async () => {
      try {
        if (currentUser) {
          setIsLoading(true);
          const userDoc = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userDoc);
          const currentQuestion = docSnap.data().currentQuestion;

          if (parseInt(num) !== currentQuestion) {
            throw new Error("You do not have access to this question yet.");
          }

          const questionDoc = doc(db, "questions", num);
          const questionSnap = await getDoc(questionDoc);

          if (!questionSnap.exists()) {
            throw new Error("Question not found.");
          }

          const questionData = questionSnap.data();
          setQuestionData(questionData);
          setIsLoading(false);
        } else {
          navigate("/login/");
        }
      } catch (e) {
        console.error(e);
        navigate("/login/");
      }
    })();
  }, [num]);

  return (
    <div className="body-wrap">
      {currentUser ? <Header loginStatus={true} /> : <p>Please log in.</p>}

      <div className="question">
        <div className="textCover">
          <Skeleton height="40px" isLoaded={!isLoading} fadeDuration={1}>
            <p>
              <strong> Question {num}.</strong>
              <br />
            </p>
          </Skeleton>
          {/* <Skeleton height="auto" isLoaded={isLoading} fadeDuration={1}> */}
          <SkeletonText
            isLoaded={!isLoading}
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
          >
            {questionData && (
              <p>
                {questionData.question.split("Step").map((text, index) => (
                  <span key={index}>
                    {text}
                    {index !==
                      questionData.question.split("Step").length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </p>
            )}

            {/* </Skeleton> */}
          </SkeletonText>
        </div>
        <FileSubmit
          currentQuest={num}
          isLoading={isLoading}
          setIsLoading={(val) => setIsLoading(val)}
        />
      </div>
    </div>
  );
}
