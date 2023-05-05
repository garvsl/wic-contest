import "./App.css";
import Auth from "./components/auth";
import Homepage from "./components/homepage/homepage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

/*
we need criteria for the type of question and its difficulty and the time that it would take to complete.

The flow will be a landing page that shows information, rules ,and the prizes
then user can log in where they will be directed to a screen that says start
once they press start they will be directed to a question and a timer will start once they start
--what will happen to the timer/question if they back out, close the tab etc
so if theyre signed in and have pressed start already then direct them straight to the question
have the time keep going regardless of if theyre in the tab/if its a closed or not
on the question screen there will be the question then a big file upload thing 
instructions and info such as tooltips, then a submit button and a confirmation
and a skip button where it doesnt upload anything and they can skip
after they press submit it uploads it to db where we can see, if they press skip doesnt upload
then get directed to new question and process repeats

make sure if they back-tab it doesnt let them chagne any info and or access any info, hopefully just dont let them back tab, if u cant then just 
redirect them back.


*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />}>
      {/* <Route index element={<Homepage />}></Route>   */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
