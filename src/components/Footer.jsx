import React, { useState } from "react";
import "../css/FooterStyles.css";

const Footer = () => {
 
  const [selectedCategory, setSelectedCategory] = useState("All");


  const categories = [
    "All",
    "Popular",
    "Art & Culture",
    "Outdoors",
    "Categories",
    "Things to do",
    "Travel Inspirations",
    "AirBnb-friendly Apartments",
    "Mountains",
    "Beach",
    "Unique Stays",
    
  ];

  // Grid items
  const gridItems = [
    { id: 1, category: "Popular", title: "Canmore", subheading: "Condo Rentals" },
    { id: 2, category: "Beach", title: "Benalmadena", subheading: "Beach House Rental" },
    { id: 3, category: "Art & Culture", title: "Marbella", subheading: "Apartment Rentals" },
    { id: 4, category: "Popular", title: "Mijas", subheading: "Apartment Rentals" },
    { id: 5, category: "Outdoors", title: "Prescot", subheading: "Pet-friendly Rentals" },
    { id: 6, category: "Mountains", title: "Scottsdale", subheading: "Pet-friendly Rentals" },
    { id: 7, category: "Unique Stays", title: "Tucson", subheading: "Mansion Rentals" },
    { id: 8, category: "Outdoors", title: "Jasper", subheading: "Cabin Rentals" },
    { id: 9, category: "Mountains", title: "Mountain View", subheading: "Pet-friendly Rentals" },
    { id: 10, category: "Beach", title: "Devon Port", subheading: "Cottage Rentals" },
    { id: 11, category: "Beach", title: "Mallacoota", subheading: "Beach House Rentals" },
    { id: 12, category: "Popular", title: "Ibiza", subheading: "Vacation Rentals" },
    { id: 13, category: "Art & Culture", title: "Anaheim", subheading: "Apartment Rentals" },
    { id: 14, category: "Categories", title: "Monterey", subheading: "House Rentals" },
    { id: 15, category: "Things to do", title: "Paso Robles", subheading: "Cottage Rentals" },
    { id: 16, category: "Travel Inspirations", title: "Santa Barbara", subheading: "Apartment Rentals" },
    { id: 17, category: "AirBnb-friendly Apartments", title: "Sonoma", subheading: "Rentals with Pools" },
  ];


  const filteredItems = selectedCategory === "All"
    ? gridItems
    : gridItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container-fluid" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container">
        <h1 style={{ fontSize: "24px", lineHeight: "56px", marginBottom: "2rem" }}>
          Inspiration for Future Getaways
        </h1>

        
        <div className="flex-items">
          {categories.map((category) => (
            <a
              key={category}
              className="items"
              onClick={() => setSelectedCategory(category)}
              style={{ cursor: "pointer" }}
            >
              <p>{category}</p>
            </a>
          ))}
        </div>

        <hr style={{ borderBottom: "1px solid grey", width: "100%" }} />

       
        <div className="grid-container">
          {filteredItems.map((item) => (
            <div key={item.id} className="grid-item">
              <p style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "16px", color: "grey", lineHeight: "5px", textAlign: "left" }}>
                {item.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
