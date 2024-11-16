import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";
import ListingDetails from "./components/ListingDetails";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar searchType="stays" />
              <Cards />
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              <SearchBar searchType="experiences" />
              <Cards />
            </>
          }
        />
    
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
      <Footer />
      <MainFooter />
    </Router>
  );
}

export default App;
