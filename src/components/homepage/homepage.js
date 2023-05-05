import "./homepage.css";

import Header from "./header";
import Main from "./main";
import Features from "./features";
import Prizes from "./prizes";
import Footer from "./footer";

export default function Homepage() {
  return (
    <div className="body-wrap">
      <Header />
      <main>
        <Main />
        <Features />
        <Prizes />
        <Footer />
      </main>
    </div>
  );
}
