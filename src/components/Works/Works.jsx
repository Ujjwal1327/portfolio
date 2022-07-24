import { useState } from "react";
import "./Works.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useEffect } from "react";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [colorLeft, setColorLeft] = useState("white");
  const [colorRight, setColorRight] = useState("white");
  const data = [
    {
      id: 1,
      icons: require("../../assets/images/globe.png"),
      title: "Expense Handler",
      description:
        "This is an Expense Handler App can be use to store your expense data and show the graphical representation of your expense. Try this app and reply with  your User Experience ",
      projectLink: "https://expense-app-handler.herokuapp.com/",
      image: require("../../assets/images/project1.jpeg"),
    },
    {
      id: 2,
      icons: require("../../assets/images/mobile.png"),
      title: "Add fav. quotes",
      description:
        "This is Quote App. Where you can jott down some favourite lines and you can also commment on your quote. ",
      projectLink: "https://great-quote.herokuapp.com/quotes",
      image: require("../../assets/images/project2.jpeg"),
    },
    {
      id: 3,
      icons: require("../../assets/images/writing.png"),
      title: "Unique",
      description:
        "This is simple shocase of my html css javascript based website where i added some beutiful animation and design.",
      projectLink: "https://ujjwal1327.github.io/UNIQ/#ab/",
      image: require("../../assets/images/project3.jpeg"),
    },
  ];
  useEffect(() => {
    if (currentSlide === 0) {
      setColorLeft("rgb(191, 189, 189)");
    } else {
      setColorLeft("white");
    }

    if (currentSlide === 2) {
      setColorRight("rgb(191, 189, 189)");
    } else {
      setColorRight("white");
    }
  }, [currentSlide]);
  const handleClick = (way) => {
    if (way === "left") {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        return;
      }
    }

    if (way === "right") {
      if (currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
      } else {
        return;
      }
    }
  };
  return (
    <div className="works" id="Works">
      <div
        className="slider"
        style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="items">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icons} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.projectLink}
                  >
                    Project link.......
                  </a>
                </div>
              </div>

              <div className="right">
                <img src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowBackIos
        style={{ color: colorLeft }}
        className="arrow left"
        alt=""
        onClick={() => {
          handleClick("left");
        }}
      />
      <ArrowBackIos
        style={{ color: colorRight }}
        className="arrow right"
        alt=""
        onClick={() => {
          handleClick("right");
        }}
      />
    </div>
  );
}
