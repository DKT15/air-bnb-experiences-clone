import React from "react";
import "../styles/Card.css";
import "../data";

// if there are 0 open spots. Sold out will be displayed in the badge text. If the location is eqaual to online, then it will be displayed in the badge text.
function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  // Props has been used here to bring the data across. This code is then linked to App.jsx.
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card-image" />
      <div className="card-stats">
        <img src="../assets/star.png" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From £{props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
