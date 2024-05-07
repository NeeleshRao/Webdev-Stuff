import React from "react";
import { useState } from "react";

const Main = () => {
  const [breakfastChoice, setBreakfastChoice] = useState("");
  const [lunchChoice, setLunchChoice] = useState("");
  let breakfastItems = [
    "Idli",
    " Masala Dosa",
    "Cucumber Dosa",
    "Tomato Dosa",
    "Upma",
    "Brown Rice",
    "Shavige",
  ];
  let lunchItems = [
    "Chitranna",
    "Tomato Saaru",
    "Lemon Saaru",
    "Mixed Vegetable Sambhar",
    "Kichdi",
    "Bisi Bele Bath",
    "Carrot Dal",
  ];
  const handleBreakfast = () => {
    let choice =
      breakfastItems[Math.floor(Math.random() * breakfastItems.length)];
    setBreakfastChoice(choice);
    // console.log(choice);
  };
  const handleLunch = () => {
    let choice = lunchItems[Math.floor(Math.random() * lunchItems.length)];
    setLunchChoice(choice);
    // console.log(choice);
  };

  return (
    <main>
      <div className="breakfast">
        <h2>Breakfast</h2>
        <button onClick={handleBreakfast}>Generate Breakfast</button>
        <p>The Breakfast choice is : {breakfastChoice || "Not chosen"}</p>
      </div>
      <div className="lunch">
        <h2>Lunch</h2>
        <button onClick={handleLunch}>Generate Lunch</button>
        <p>The Lunch choice is : {lunchChoice || "Not chosen"}</p>
      </div>
      <div className="dinner">
        <h2>Dinner</h2>
        <button>Generate Dinner</button>
      </div>
    </main>
  );
};

export default Main;
