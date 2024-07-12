import React from "react";
import Star from "../assets/images/Star.png";
import Star1 from "../assets/images/Star1.png";
import Star2 from "../assets/images/Star2.png";

function StarsImges() {
  return (
    <div className="stares">
      <img src={Star2} className="star2" />
      <img src={Star} className="star" />
      <img src={Star1} className="star1" />
    </div>
  );
}

export default StarsImges;
