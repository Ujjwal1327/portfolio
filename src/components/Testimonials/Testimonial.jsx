import "./Testimonial.scss";

export default function Testimonial() {
  const data = [
    {
      topImage1: require("../../assets/images/right-arrow.png"),
      topImage2: require("../../assets/images/man2.jpg"),
      topImage3: require("../../assets/images/youtube.png"),
      centerDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut, nobis placeat doloribus officia earum, aspernatur laborum dolores sit dolore, voluptas a in ducimus? Omnis asperiores amet sit minus exercitationem.",
      bottomName: "JOE",
      bottomPost: "CEO of LAMA",
      featured: false,
    },
    {
      topImage1: require("../../assets/images/right-arrow.png"),
      topImage2: require("../../assets/images/man.png"),
      topImage3: require("../../assets/images/linkedin.png"),
      centerDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut, nobis placeat doloribus officia earum, aspernatur laborum dolores sit dolore, voluptas a in ducimus? Omnis asperiores amet sit minus exercitationem.",
      bottomName: "ALEX",
      bottomPost: "HOD of MAVEN",
      featured: true,
    },
    {
      topImage1: require("../../assets/images/right-arrow.png"),
      topImage2: require("../../assets/images/man1.png"),
      topImage3: require("../../assets/images/twitter.png"),
      centerDes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut, nobis placeat doloribus officia earum, aspernatur laborum dolores sit dolore, voluptas a in ducimus? Omnis asperiores amet sit minus exercitationem.",
      bottomName: "SMITH",
      bottomPost: "CAI of BOSTON",
      featured: false,
    },
  ];
  return (
    <div className="testimonial" id="Testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((item) => (
          <div className={item.featured ? "card featured " : "card"}>
            <div className="top">
              <img className="left" src={item.topImage1} alt="" />
              <img className="user" src={item.topImage2} alt="" />
              <img className="right" src={item.topImage3} alt="" />
            </div>
            <div className="center">{item.centerDes}</div>
            <div className="bottom">
              <h3>{item.bottomName}</h3>
              <h4>{item.bottomPost}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
