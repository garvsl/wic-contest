import razer from "../../images/razerKraken.webp";
import logitech from "../../images/logitech.png";
import monitor from "../../images/monitor.png";
export default function Prizes() {
  return (
    <section id="project section">
      <div className="container-sm">
        <div className="project-inner section-inner">
          <div className="project-header text-center">
            <h2 className="section-title mt-0">Our Prizes</h2>
          </div>
          <div className="projects">
            {/*  */}
            <div className="project mt-56">
              <ul className="project-stack">
                <h1 className="bluestack">
                  Samsung Essential 27" HD LED Monitor
                </h1>
              </ul>
              <img src={monitor} alt="" />
            </div>

            <div className="project mt-56">
              <ul className="project-stack">
                <h1 className="bluestack">
                  Logitech Wired Mechanical Tactile Switch Gaming Keyboard With
                  Backlit Keys
                </h1>
              </ul>
              <img src={logitech} alt="" />
            </div>

            <div className="project mt-56">
              <ul className="project-stack">
                <h1 className="bluestack">
                  Razer Kraken Gaming Headset With Retractable Noise Isolating
                  Microphone
                </h1>
              </ul>
              <img src={razer} alt="" />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}
