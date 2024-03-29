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
  useToast,
} from "@chakra-ui/react";
import "./question.css";
export default function FileSubmit({ currentQuest, isLoading, setIsLoading }) {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const navigate = useNavigate();

  const nextQuestion = async () => {
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
      toast({
        title: "No files attached",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
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
      toast({
        title: "Succesful Submission",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
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
      <div className="questionCover">
        <p>
          Upload the files used to complete the question--any classes and
          applications--and then press submit to move on to next question!
        </p>
        <div className="submitUpload">
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
          <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <PopoverTrigger>
              <Button
                marginBottom={"5"}
                onClick={() => setIsOpen(true)}
                isLoading={isLoading}
                colorScheme="blue"
                width={"150px"}
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
      </div>
    </>
  );
}
