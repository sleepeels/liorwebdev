import { useEffect, useRef, useState } from "react";
import "./Card.css";
import "../Skills.css";

const Card = ({ tech, imgURL }) => {
  const [cardState, setCardState] = useState(false);
  const card = useRef();

  useEffect(() => {}, []);

  const flipCard = () => {
    if (cardState) {
      card.current.classList.remove("flip-card");
      setCardState(false);
    } else {
      setCardState(true);
      card.current.classList.add("flip-card");
    }
  };
  return (
    <div className="card" onClick={flipCard} ref={card}>
      <div className="face">
        <img className="tech-img" src={imgURL} alt="" />
      </div>
      <div className="back">
        <h4>{tech}</h4>
        <p>tap me!</p>
      </div>
    </div>
  );
};

export default Card;
