import "./Portfolio.scss";

import PortfolioList from "./PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  contentPortfolio,
} from "./Data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const List = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "mobileapp",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webapp":
        setData(webPortfolio);
        break;
      case "mobileapp":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="Portfolio">
      <h1>Portfolio</h1>
      <ul>
        {List.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
