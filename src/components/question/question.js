import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Header from "../homepage/header";
import "./question.css";

export default function Question() {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState();
  const [loading, setLoading] = useState(true);
  const { num } = useParams();
  const currentUser = auth.currentUser;

  useEffect(() => {
    (async () => {
      try {
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
        setLoading(false);
      } catch (e) {
        // alert(e.message);
        navigate("/login/");
      }
    })();
  }, [num]);

  return (
    <>
      {currentUser ? <Header loginStatus={true} /> : <p>Please log in.</p>}
      <div className="question">
        <p>
          <strong> Question {num}.</strong>
          <br />
        </p>
        {questionData && <p>{questionData.question}</p>}
        <input type="file" name="uploadFiles" id="uploadFiles" />
        <button className="button button-primary" type="submit">
          Submit
        </button>
      </div>
    </>
  );
}
