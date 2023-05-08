import { useEffect, useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDoc, collection, setDoc, doc } from "firebase/firestore";

export default function Auth({ setLoginStatus, loginStatus }) {
  const [current, setCurrent] = useState();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          if (!user.email.includes("n00")) {
            alert("not ncc");
            logout();
            return;
          }

          setLoginStatus(true);
          console.log("logged in");

          const { displayName, uid } = user;

          const userDoc = doc(db, "users", uid);
          const docSnap = await getDoc(userDoc);

          if (!docSnap.exists()) {
            await setDoc(doc(db, "users", uid), {
              name: displayName,
              currentQuestion: 1,
            });
          }

          setCurrent(docSnap.data().currentQuestion);
        } else {
          setLoginStatus(false);
          console.log("not logged in");
        }
      } catch (e) {
        console.error("auth", e);
      }
    });

    return unsubscribe;
  }, []);

  const navigateQuestion = async () => {
    navigate(`question/${current}`);
  };

  //not  working for some reason but simply jsut direct them to the question that they hav ein the db
  //make sure that they cant go back in tabs or forward and that they can only access the one that their currentq uestion is

  return (
    <>
      {!loginStatus && (
        <>
          <button className="button button-primary" onClick={signInWithGoogle}>
            Log in
          </button>
        </>
      )}
      {loginStatus && (
        <>
          <button className="button button-primary" onClick={navigateQuestion}>
            Begin
          </button>
          <button className="button button-secondary" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </>
  );
}
