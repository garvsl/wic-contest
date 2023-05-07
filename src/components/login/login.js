import Header from "../homepage/header";
import { useState } from "react";
import Auth from "./auth";

export default function Login() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className="body-wrap">
      <Header loginStatus={loginStatus} />
      <section id="Main" className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0">Instructions</h1>
              <p className="hero-paragraph">
                Log in with your ncc account below, and you will be redirected
                to start!
                <br />
                <br />
                Each question will be timed, dont close the tab, and no using
                chatGPT/ any other AI! (You can google)
              </p>
              <div className="hero-cta">
                <Auth
                  setLoginStatus={(val) => setLoginStatus(val)}
                  loginStatus={loginStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
