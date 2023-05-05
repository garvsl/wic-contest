export default function Main() {
  return (
    <section id="Main" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">
              Coding
              <br />
              Competition
            </h1>
            <p className="hero-paragraph">
              Welcome to the coding contest hosted by the Women in Computing
              Club at NCC! Are you ready to put your coding skills to the test
              and compete against other talented programmers?
            </p>
            <div className="hero-cta">
              <a className="button button-primary" href="#">
                Start
              </a>
            </div>
          </div>
          <div className="hero-figure anime-element">
            <svg
              className="placeholder"
              width="528"
              height="396"
              viewBox="0 0 528 396"
            >
              <rect width="528" height="396" style={{ fill: "transparent" }} />
            </svg>
            <div
              className="hero-figure-box hero-figure-box-01"
              data-rotation="45deg"
            ></div>
            <div
              className="hero-figure-box hero-figure-box-02"
              data-rotation="-45deg"
            ></div>
            <div
              className="hero-figure-box hero-figure-box-04"
              data-rotation="-135deg"
            ></div>
            <div className="hero-figure-box hero-figure-box-05"></div>
            <div className="hero-figure-box hero-figure-box-06"></div>
            <div className="hero-figure-box hero-figure-box-07"></div>
            <div
              className="hero-figure-box hero-figure-box-08"
              data-rotation="-22deg"
            ></div>
            <div
              className="hero-figure-box hero-figure-box-09"
              data-rotation="-52deg"
            ></div>
            <div
              className="hero-figure-box hero-figure-box-10"
              data-rotation="-50deg"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
