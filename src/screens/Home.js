import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

export default function Home() {
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response[0], response[1]);
    setfoodItem(response[1]);
    setfoodCat(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        {foodCat != [] ? (
          foodCat.map((data) => {
            return <div>{data.CategoryName}</div>;
          })
        ) : (
          <div>"""""""""</div>
        )}
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
