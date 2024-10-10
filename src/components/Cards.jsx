import React from "react";
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
import Slider from "react-slick";

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container" style={{marginTop:"50px"}}>
      <div className="row justify-content-left">
      <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card5}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 1"
                />
              </div>
              <div>
                <img
                  src={card5}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 1"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px",marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Go on tour with Feid
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Feid
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
              <strong>77</strong>$ per guest
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card6}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 1"
                />
              </div>
              <div>
                <img
                  src={card6}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 1"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px",marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
               Open the Olympic Games at Musse 
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Mathew Lehanuer
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Booking Closed
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{marginBottom:'2rem'}}>Past Experience</h1>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card1}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 1"
                />
              </div>
              <div>
                <img
                  src={card1}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 1"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px",marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Live like Bollywood Jhanvi Kapoor
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Jhanvi Kapoor
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card2}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 2"
                />
              </div>
              <div>
                <img
                  src={card2}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 2"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px",marginTop:'1rem'  }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Live like Kevin Peterson
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Kevin Peterson
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card3}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 3"
                />
              </div>
              <div>
                <img
                  src={card3}
                  style={{  height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 3"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem'  }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Live like Greddy O'dessy
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Greddy O'dessy
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card4}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card4}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Live like Khaby Lame
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Khaby Lame
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card7}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card7}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Design You Incredile SuperSuite
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Edna Mode
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card8}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card8}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Crash at the X-Mansion
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Jubliee
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card9}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card9}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                S'hrek Swamp
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Donkey
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card10}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card10}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Home Alone Holiday
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Buzz
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>


        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card11}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card11}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
               HousePlant Retreat
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Seth Rogen
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card12}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card12}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
               Ted Lasso's Favourite Pub
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Mae
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card13}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card13}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>  
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                The Last BlockBuster
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Sandi
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card" style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
            <Slider {...settings}>
              <div>
                <img
                  src={card14}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
              <div>
                <img
                  src={card14}
                  style={{ height: "20rem", width: "100%", objectFit: "cover" }}
                  alt="Card 4"
                />
              </div>
            </Slider>
            <div className="card-body" style={{ lineHeight: "5px" ,marginTop:'1rem' }}>
              <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Drif Off in the Up house
              </h5>
              <p className="card-text" style={{ color: "grey" }}>
                Hosted by Carl Fredickson
              </p>
              <h5 className="card-text" style={{ fontWeight: "bold", fontSize: "15px" }}>
                Sold Out
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
