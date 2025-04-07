import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cardsData from "../data/CardsData";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="wrap">
        {cardsData.map((card) => (
          <Card
            key={card.name}
            src={card.src}
            name={card.name}
            describtion={card.describtion}
            emoji={card.emoji}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
