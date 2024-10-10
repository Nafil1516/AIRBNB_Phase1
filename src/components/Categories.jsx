import React, { Component } from "react";
import Slider from "react-slick";
import "../css/HorizontalNav.css";
import item1 from "../assets/images/horizontalNav/item1.webp";
import item2 from "../assets/images/horizontalNav/item2.jpg";
import item3 from "../assets/images/horizontalNav/item3.jpg";
import item4 from "../assets/images/horizontalNav/item4.jpg";
import item5 from "../assets/images/horizontalNav/item5.jpg";
import item6 from "../assets/images/horizontalNav/item6.jpg";
import item7 from "../assets/images/horizontalNav/item7.jpg";
import item8 from "../assets/images/horizontalNav/item8.jpg";
import item9 from "../assets/images/horizontalNav/item9.jpg";

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 10, // Default for large screens
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 5, // Show 5 slides on large screens
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // Medium screens (tablets)
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480, // Small screens (mobile)
        settings: {
          slidesToShow: 2, // Show 2 slides on small screens
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...settings}>
          <a href="/" className="slide-item">
            <img src={item1} alt="" width={24} height={24} />
            <h3>Icons</h3>
          </a>
          <a className="slide-item">
            <img src={item2} alt="" width={24} height={24} />
            <h3>Skiing</h3>
          </a>
          <a className="slide-item">
            <img src={item3} alt="" width={24} height={24} />
            <h3>Rooms</h3>
          </a>
          <a className="slide-item">
            <img src={item4} alt="" width={24} height={24} />
            <h3>Top Cities</h3>
          </a>
          <a className="slide-item">
            <img src={item5} alt="" width={24} height={24} />
            <h3>Lake</h3>
          </a>
          <a className="slide-item">
            <img src={item6} alt="" width={24} height={24} />
            <h3>Amazing Pools</h3>
          </a>
          <a className="slide-item">
            <img src={item7} alt="" width={24} height={24} />
            <h3>Bed & Breakfast</h3>
          </a>
          <a className="slide-item">
            <img src={item8} alt="" width={24} height={24} />
            <h3>Mansions</h3>
          </a>
          <a className="slide-item">
            <img src={item9} alt="" width={24} height={24} />
            <h3>Castles</h3>
          </a>
          <a className="slide-item">
            <img src={item5} alt="" width={24} height={24} />
            <h3>Lake</h3>
          </a>
          <a className="slide-item">
            <img src={item6} alt="" width={24} height={24} />
            <h3>Amazing Pools</h3>
          </a>
          <a className="slide-item">
            <img src={item7} alt="" width={24} height={24} />
            <h3>Bed & Breakfast</h3>
          </a>
          <a className="slide-item">
            <img src={item8} alt="" width={24} height={24} />
            <h3>Mansions</h3>
          </a>
          <a className="slide-item">
            <img src={item9} alt="" width={24} height={24} />
            <h3>Castles</h3>
          </a>
        </Slider>
      </div>
    </div>
  );
}

export default SwipeToSlide;