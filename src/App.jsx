import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";

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
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <>
              <SearchBar searchType="experiences" />
            </>
          }
        />
      </Routes>
      <Categories />
      <Cards />
      <Footer/>
      <MainFooter/>
    </Router>
  );
}

export default App;
