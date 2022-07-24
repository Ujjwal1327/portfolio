import "./Intro.scss";
import { init } from "ityped";
import img from "../../assets/images/man.png";
import down from "../../assets/images/down.png";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [" ReactJS Developer.", " Designer."],
    });
  }, []);
  return (
    <div className="intro" id="Intro">
      <div className="left">
        <div className="imgContainer">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey, I am </h2>
          <h1>Ujjwal Raj</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#Portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}
