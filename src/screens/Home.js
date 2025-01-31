import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="m-3">
        <Cards />
        <Cards />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
