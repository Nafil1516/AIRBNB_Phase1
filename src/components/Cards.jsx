import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "../css/HorizontalNav.css";

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
// ... other image imports

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Static categories for filtering (no changes here)
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
  
  

  // Consolidated fetching logic
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/listings");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []); // fetch on initial load

  // Filter cards based on category and search query
  const filteredCards = cards.filter((card) => {
    const matchesCategory = selectedCategory === "all" || card.category === selectedCategory;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (id) => {
    navigate(`/listing/${id}`);
  };

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 7,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, centerPadding: "40px" } },
      { breakpoint: 768, settings: { slidesToShow: 3, centerPadding: "30px" } },
      { breakpoint: 480, settings: { slidesToShow: 2, centerPadding: "20px" } },
    ],
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Horizontal Navigation */}
      <div className="slider-container">
        <Slider {...settings}>
          {categories.map((category) => (
            <button
              key={category.id}
              className="slide-item"
              onClick={() => setSelectedCategory(category.id)}
              style={{
                margin: "0 10px",
                backgroundColor: selectedCategory === category.id ? "lightblue" : "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img src={category.icon} alt={category.name} width={24} height={24} />
              <h3>{category.name}</h3>
            </button>
          ))}
        </Slider>
      </div>

      {/* Cards Section */}
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
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(card.id)}
              >
                <div>
                  <img
                    src={`http://localhost:5000/cardsimages/${card.image}`}
                    style={{
                      height: "20rem",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt={`Card ${card.id}`}
                  />
                </div>
                <div className="card-body" style={{ lineHeight: "5px", marginTop: "1rem" }}>
                  <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {card.title}
                  </h5>
                  <p className="card-text" style={{ color: "grey" }}>
                    Hosted by {card.host}
                  </p>
                  <h5 className="card-text text-dark" style={{ fontWeight: "bold", fontSize: "15px" }}>
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
