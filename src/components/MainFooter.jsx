import React from "react";
import "../css/MainFooterStyles.css";

const MainFooter = () => {
  const navigate = useNavigate();
  const Linkingpage = () => {
    navigate("/LinktTo");
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container">
        <hr style={{ borderBottom: "1px solid grey", width: "100%" }} />

        <div className="MainContainer">
          {" "}
         
          <div className="FooterItem">
            <p onClick={Linkingpage}
              style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}
            >
              Support
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Help Center
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              AirCover
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Anti-discrimination
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Disability support
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Cancellation options
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Report neighborhood concern
            </p>
          </div>
          <div className="FooterItem">
            <p
              style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}
            >
              Hosting
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Airbnb your home
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              AirCover for Hosts
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Hosting resources
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Community forum
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Hosting responsibly
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Airbnb-friendly apartments
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Join a free Hosting class
            </p>
          </div>
          <div className="FooterItem">
            <p
              style={{ fontSize: "16px", fontWeight: "500", textAlign: "left" }}
            >
              AirBnb
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Newsroom
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              New features
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Careers
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Investors
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Gift cards
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "grey",
                lineHeight: "20px",
                textAlign: "left",
              }}
            >
              Airbnb.org emergency stays
            </p>
          </div>
        </div>
      </div>

      <footer className="container">
        <hr style={{ borderBottom: "1px solid grey", width: "100%" }} />

        <div className="footer-bottom">
          <div className="footer-left">
            <p>
              © 2024 Airbnb, Inc. · <a href="#">Terms</a> ·{" "}
              <a href="#">Sitemap</a> · <a href="#">Privacy</a> ·{" "}
              <a href="#">Your Privacy Choices</a>
            </p>
          </div>

          <div className="footer-right">
            <a href="#">🌐 English (US)</a>
            <a href="#">$ USD</a>
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
