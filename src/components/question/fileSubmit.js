import { useEffect, useState } from "react";
import { auth, db, storage } from "../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import "./question.css";
export default function FileSubmit({ currentQuest, isLoading, setIsLoading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const nextQuestion = async () => {
    console.log("next");
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: auth.currentUser.displayName,
      currentQuestion: Number(currentQuest) + 1,
    });
    navigate(`/login/question/${Number(currentQuest) + 1}`);
    setFileUpload(null);
  };

  const uploadFiles = async () => {
    if (!fileUpload) {
      setIsOpen(false);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 10000);
      return;
    }

    setIsOpen(false);
    setIsLoading(true);

    try {
      for (let i = 0; i < fileUpload.length; i++) {
        const filesFolderRef = ref(
          storage,
          `${auth.currentUser.uid}/${currentQuest}/${fileUpload[i].name}`
        );
        await uploadBytes(filesFolderRef, fileUpload[i]);
      }
      nextQuestion();
      setIsLoading(false);
      // setFileUpload(null);
      //   alert("done");
    } catch (e) {
      console.error(e);
    }
  };
  const styles = useMultiStyleConfig("Button", { variant: "outline" });

  return (
    <>
      <Skeleton height="40px" isLoaded={!isLoading} fadeDuration={1}>
        <Input
          style={{
            border: "none",
            width: "fit-content",
            color: "white",
            cursor: "pointer",
          }}
          type="file"
          multiple
          accept=".java"
          maxfilesize={1000000}
          onChange={(e) => setFileUpload(e.target.files)}
          sx={{
            "::file-selector-button": {
              border: "none",
              outline: "none",

              mr: 2,
              ...styles,
              color: "black",
            },
          }}
        />
      </Skeleton>

      <div className="questionCover">
        <p>
          Upload the files used to complete the question--any classes and
          applications--and then press submit to move on to next question!
        </p>
        <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <PopoverTrigger>
            <Button
              onClick={() => setIsOpen(true)}
              isLoading={isLoading}
              colorScheme="blue"
            >
              Submit
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you want to submit and continue on to the next question?
            </PopoverBody>
            <PopoverFooter display="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button
                  isLoading={isLoading}
                  onClick={uploadFiles}
                  colorScheme="green"
                >
                  Yes
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </div>
      {alert && (
        <Alert id="theAlert" status="error">
          <AlertIcon />
          <AlertTitle>You didnt select any files!</AlertTitle>
          <AlertDescription>
            If you want to skip this problem then submit your attempt, even if
            its bad.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
