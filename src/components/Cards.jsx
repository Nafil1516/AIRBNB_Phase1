import React, { useState } from "react";
import Slider from "react-slick";
import "../css/HorizontalNav.css";

// Import images
import card1 from "../assets/images/cards/card1.webp";
import card2 from "../assets/images/cards/card2.webp";
import card3 from "../assets/images/cards/card3.webp";
import card4 from "../assets/images/cards/card4.webp";
import card5 from "../assets/images/cards/card5.webp";
import card6 from "../assets/images/cards/card6.webp";
import card7 from "../assets/images/cards/card7.jpeg";
import card8 from "../assets/images/cards/card8.webp";
import card9 from "../assets/images/cards/card9.webp";
import card10 from "../assets/images/cards/card10.jpeg";
import card11 from "../assets/images/cards/card11.webp";
import card12 from "../assets/images/cards/card12.webp";
import card13 from "../assets/images/cards/card13.webp";
import card14 from "../assets/images/cards/card14.webp";
import card15 from "../assets/images/cards/card15.webp";
import card16 from "../assets/images/cards/card16.webp";
import card17 from "../assets/images/cards/card17.webp";
import card18 from "../assets/images/cards/card18.webp";
import card19 from "../assets/images/cards/card19.webp";
import card20 from "../assets/images/cards/card20.webp";
import card21 from "../assets/images/cards/card21.webp";
import card22 from "../assets/images/cards/card22.webp";
import card23 from "../assets/images/cards/card23.webp";
import card24 from "../assets/images/cards/card24.webp";
import card25 from "../assets/images/cards/card25.webp";
import card26 from "../assets/images/cards/card26.webp";
import card27 from "../assets/images/cards/card27.webp";
import card28 from "../assets/images/cards/card28.webp";
import card29 from "../assets/images/cards/card29.webp";

import item1 from "../assets/images/horizontalNav/item1.webp";
import item2 from "../assets/images/horizontalNav/item2.jpg";
import item3 from "../assets/images/horizontalNav/item3.jpg";
import item4 from "../assets/images/horizontalNav/item4.jpg";
import item5 from "../assets/images/horizontalNav/item5.jpg";
import item6 from "../assets/images/horizontalNav/item6.jpg";
import item7 from "../assets/images/horizontalNav/item7.jpg";
import item8 from "../assets/images/horizontalNav/item9.jpg";
import item9 from "../assets/images/horizontalNav/item9.jpg";
import item10 from "../assets/images/horizontalNav/item10.jpg";
import item11 from "../assets/images/horizontalNav/item11.jpg";
import item12 from "../assets/images/horizontalNav/item12.jpg";
import item13 from "../assets/images/horizontalNav/item13.jpg";
import item14 from "../assets/images/horizontalNav/item14.jpg";
import item15 from "../assets/images/horizontalNav/item15.jpg";
import item16 from "../assets/images/horizontalNav/item16.jpg";
import item17 from "../assets/images/horizontalNav/item17.jpg";
import item18 from "../assets/images/horizontalNav/item18.jpg";

import "../css/HorizontalNav.css";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Static categories for filtering
  const categories = [
    { id: "all", name: "All", icon: item1 },
    { id: "category1", name: "Icon", icon: item1 },
    { id: "category2", name: "Top Cities", icon: item2 },
    { id: "category3", name: "Rooms", icon: item3 },
    { id: "category4", name: "Amazing Views", icon: item4 },
    { id: "category5", name: "Tropical", icon: item5 },
    { id: "category6", name: "trending", icon: item6 },
    { id: "category7", name: "Mansions", icon: item7 },
    { id: "category8", name: "Tiny Homes", icon: item8 },
    { id: "category9", name: "OMG!", icon: item9 },
    { id: "category10", name: "Earth Homes", icon: item10 },
    { id: "category11", name: "Castles", icon: item11 },
    { id: "category12", name: "Bed and Breakfasts", icon: item12 },
    { id: "category13", name: "Camping", icon: item13 },
    { id: "category14", name: "Historical Homes", icon: item14 },
    { id: "category15", name: "Cabins", icon: item15 },
    { id: "category16", name: "A-frames", icon: item16 },
    { id: "category17", name: "lake", icon: item17 },
    { id: "category18", name: "Country Side", icon: item18 },

    // Add more categories as needed
  ];

  // Define cards with categories
  const cards = [
    {
      id: 1,
      image: card1,
      category: "category1",
      title: "Live Like Bollywood star Jhanvi Kapoor",
      host: "Hosted by Jhanvi kapoor",
      price: "$100",
    },
    {
      id: 2,
      image: card2,
      category: "category1",
      title: "Go Vip with Kevin Hart",
      host: "Hosted By Kevin Hart",
      price: "Sold out",
    },
    {
      id: 3,
      image: card3,
      category: "category1",
      title: "Wake up in the Musee d'Orsay",
      host: "Host by Mathiew ",
      price: "$200",
    },
    {
      id: 4,
      image: card4,
      category: "category1",
      title: "Fun with Khaby Lame",
      host: "Host by Khaby lame",
      price: "$250",
    },
    {
      id: 5,
      image: card5,
      category: "category1",
      title: "Go on tour with Feid",
      host: "Host by Feid",
      price: "Sold out",
    },
    {
      id: 6,
      image: card6,
      category: "category2",
      title: "Stay In Europe",
      host: "Host by Italian",
      price: "$350",
    },
    {
      id: 7,
      image: card7,
      category: "category3",
      title: "Design your Incredible Supersuit",
      host: "Host by Edna Mode",
      price: "Sold out",
    },
    {
      id: 8,
      image: card8,
      category: "category3",
      title: "Crash at the X-Mansion",
      host: "Host by Jubliee",
      price: "Sold out",
    },
    {
      id: 9,
      image: card9,
      category: "category4",
      title: "Shrek's Swamp",
      host: "Hosted by Donkey",
      price: "Sold out",
    },
    {
      id: 10,
      image: card10,
      category: "category3",
      title: "Home Alone Holiday",
      host: "Hosted by Buzz",
      price: "Sold out",
    },
    {
      id: 11,
      image: card11,
      category: "category3",
      title: "Houseplant Retreat",
      host: "Hosted by Seth Rogen",
      price: "Sold out",
    },
    {
      id: 12,
      image: card12,
      category: "category6",
      title: "The Last BlockBuster",
      host: "Hosted By Sandi",
      price: "Sold out",
    },
    {
      id: 13,
      image: card13,
      category: "category13",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 14,
      image: card14,
      category: "category14",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 15,
      image: card15,
      category: "category14",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 16,
      image: card16,
      category: "category14",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 17,
      image: card17,
      category: "category14",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 18,
      image: card18,
      category: "category15",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 19,
      image: card19,
      category: "category15",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 20,
      image: card19,
      category: "category15",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 21,
      image: card21,
      category: "category17",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 22,
      image: card22,
      category: "category17",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 23,
      image: card23,
      category: "category18",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 24,
      image: card24,
      category: "category18",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 25,
      image: card25,
      category: "category18",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 26,
      image: card26,
      category: "category15",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 27,
      image: card27,
      category: "category16",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 28,
      image: card28,
      category: "category16",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
    {
      id: 29,
      image: card29,
      category: "category16",
      title: "Card 10",
      host: "Host 5",
      price: "$550",
    },
  ];

  // Slider settings for the card slider
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Slider settings for the horizontal navigation
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 7,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
    ],
  };

  // Filter cards based on selected category
  const filteredCards =
    selectedCategory === "all"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <div className="container">
      {/* Horizontal Navigation with Category Filter */}
      <div className="slider-container">
        <Slider {...settings}>
          {categories.map((category) => (
            <button
              key={category.id}
              className="slide-item"
              onClick={() => setSelectedCategory(category.id)}
              style={{
                margin: "0 10px",
                backgroundColor:
                  selectedCategory === category.id ? "lightblue" : "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img
                src={category.icon}
                alt={category.name}
                width={24}
                height={24}
              />
              <h3>{category.name}</h3>
            </button>
          ))}
        </Slider>
      </div>

      {/* Past Experiences Section */}
      <h1 style={{ margin: "50px 0 20px" }}>Past Experience</h1>
      <div className="row justify-content-left">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div className="col-md-3 mb-4" key={card.id}>
              <div
                className="card"
                style={{
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Slider {...settings1}>
                  <div>
                    <img
                      src={card.image}
                      style={{
                        height: "20rem",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt={`Card ${card.id}`}
                    />
                  </div>
                  <div>
                    <img
                      src={card.image}
                      style={{
                        height: "20rem",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt={`Card ${card.id}`}
                    />
                  </div>
                </Slider>
                <div
                  className="card-body"
                  style={{ lineHeight: "5px", marginTop: "1rem" }}
                >
                  <h5
                    className="card-title"
                    style={{ fontWeight: "bold", fontSize: "15px" }}
                  >
                    {card.title}
                  </h5>
                  <p className="card-text" style={{ color: "grey" }}>
                    Hosted by {card.host}
                  </p>
                  <h5
                    className="card-text"
                    style={{ fontWeight: "bold", fontSize: "15px" }}
                  >
                    {card.price} per guest
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cards available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
