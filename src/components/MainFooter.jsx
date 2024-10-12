import React from "react";
import "../css/MainFooterStyles.css";

const MainFooter = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container">
        <hr style={{ borderBottom: "1px solid grey", width: "100%" }} />

        <div className="MainContainer">
          <div className="FooterItem">
            <p className="FooterTitle">Support</p>
            <a href="https://www.airbnb.com/help">Help Center</a>
            <a href="https://www.airbnb.com/help/article/3218">AirCover</a>
            <a href="https://www.airbnb.com/against-discrimination">Anti-discrimination</a>
            <a href="https://www.airbnb.com/accessibility">Disability support</a>
            <a href="https://www.airbnb.com/help/article/1320">Cancellation options</a>
            <a href="https://www.airbnb.com/help/article/3290">Report neighborhood concern</a>
          </div>

          <div className="FooterItem">
            <p className="FooterTitle">Hosting</p>
            <a href="https://www.airbnb.com/host/homes?from_footer=1">Airbnb your home</a>
            <a href="https://www.airbnb.com/aircover-for-hosts">AirCover for Hosts</a>
            <a href="https://www.airbnb.com/resources/hosting-homes">Hosting resources</a>
            <a href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center">Community forum</a>
            <a href="https://www.airbnb.com/help/article/1376">Hosting responsibly</a>
            <a href="https://www.airbnb.com/airbnb-friendly">Airbnb-friendly apartments</a>
            <a href="https://www.airbnb.com/ambassadors/joinaclass">Join a free Hosting class</a>
          </div>

          <div className="FooterItem">
            <p className="FooterTitle">Airbnb</p>
            <a href="https://news.airbnb.com/">Newsroom</a>
            <a href="https://www.airbnb.com/release">New features</a>
            <a href="https://careers.airbnb.com/">Careers</a>
            <a href="https://investors.airbnb.com/home/default.aspx">Investors</a>
            <a href="https://www.airbnb.com/giftcards">Gift cards</a>
            <a href="https://www.airbnb.org/?locale=en&_gl=1*1ypnc2o*_gcl_au*MTIyODMxNTQzLjE3Mjg1NDU4NTY.*FPAU*MTIyODMxNTQzLjE3Mjg1NDU4NTY.">Airbnb.org emergency stays</a>
          </div>
        </div>
      </div>

      <footer className="container">
        <hr style={{ borderBottom: "1px solid grey", width: "100%" }} />
        <div className="footer-bottom">
          <div className="footer-left">
            <p>
              © 2024 Airbnb, Inc. All Copyright reserved · <a href="https://www.airbnb.com/help/article/2908">Terms</a> · <a href="https://www.airbnb.com/sitemaps/v2">Sitemap</a> · <a href="https://www.airbnb.com/help/article/2855">Privacy</a> ·{" "}
              <a href="https://www.airbnb.com/help/sale-share-opt-out">Your Privacy Choices</a>
            </p>
          </div>
          <div className="footer-right">
            <a href="#">🌐 English (US)</a>
            <a href="#">$ USD</a>
            <a href="https://www.facebook.com/airbnb">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/airbnb">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.instagram.com/airbnb/">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
