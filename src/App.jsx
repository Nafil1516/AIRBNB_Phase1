import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";
import BookingPage from "./components/BookingPage";
import ListingDetails from "./components/ListingDetails";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AdminPanel from "./components/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Define the router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <SearchBar searchType="stays" />
          <Cards searchType="stays" />
          <Footer />
          <MainFooter />
        </>
      ),
    },
    {
      path: "/experience",
      element: (
        <>
           <Navbar />
          <SearchBar searchType="experiences" />
          <Cards searchType="experiences" />
          <Footer />
          <MainFooter />
        </>
      ),
    },
    {
      path: "/listing/:id",
      element: <>
        <Navbar />
        <ListingDetails />
        <MainFooter />
      </>
    },
    {
      path: "/book/:id",
      element:
        <>
          <Navbar />
          <BookingPage />
          <MainFooter />
        </>
    },
    {
      path: "/login",
      element:
        <>
          <Navbar />
          <LoginPage />
          <MainFooter />
        </>
    },
    {
      path: "/signup",
      element:
        <>
          <Navbar />
          <SignupPage />
          <MainFooter />
        </>
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
            <Navbar />
          <AdminPanel />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
