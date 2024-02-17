import "./Hero.scss";
import React, { useState } from "react";
import gramms from "../Img/gramms.png";
import img3 from "../Img/div1.png";
import img4 from "../Img/div2.png";
import img5 from "../Img/div3.png";
import icon from '../Img/icon.png'

const todolist = [
  {
    id: 1,
    img: img3,
    text: "Comfort Lounge Chair",
  },
  {
    id: 2,
    img: img4,
    text: "Comfort Launge Chairs",
  },
  {
    id: 3,
    img: img5,
    text: "Comfort Launge Chairs",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(img4);

  const handleImageChange = (img) => {
    setCurrentImage(img);
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__flex">
          <img
            className="hero__grm"
            src={gramms}
            alt="img"
            width={19}
            height={143}
          />

          <div className="hero__info">
            <p className="hero__text1">100% Quality Guranty</p>
            <h1 className="hero__heading">
              Find Classy Furnitures For Your Comfort
            </h1>
            <p className="hero__p">
              All the Lorem Ipsum generators on the Internet tend to predefined
              chunks this the first true generator on the Internet.
            </p>
            <p className="hero__text1">Start From</p>
            <h3 className="hero__title">102.99 USD</h3>
            <button className="hero__button">Buy Now</button>
            <div className="popular">
              <p className="popular__text">Popular shades</p>
              <p className="popular__color"></p>
              <p className="popular__color"></p>
              <p className="popular__color"></p>
              <p className="popular__color"></p>
            </div>
          </div>

          <img
            className="hero__bg"
            src={currentImage}
            alt=""
            width={562}
            height={562}
          />

          <div className="div4">
            {todolist.map((item) => (
              <li key={item.id} className="div_li">
                <button className="divv_btn" onClick={() => handleImageChange(item.img)}>
                  <img className="div_img" src={item.img} alt="img" width={81} height={81}/>
                </button>
                <p className="div_p">{item.text}</p>
              </li>
            ))}
            <img className="hero__icon" src={icon} alt="icon" width={34} height={34}/>
          </div>
        </div>
      </div>
    </section>
  );
}
