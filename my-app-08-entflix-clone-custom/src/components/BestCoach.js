import React from "react";
import "../static/css/BestCoach.css";
import backdropImage from "../static/image/bestcoach.png";

function BestCoach({ title, bestCoach }) {
  return (
    <div className="bcoach">
      <h2 className="title">{title}</h2>
      <div
        className="best-coach"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${backdropImage})`,
        }}
      >
        <div className="bcoach__contents">
          {/* title */}
          <h2 className="bcoach__title">{bestCoach.title}</h2>
          {/* subtitle */}
          <h2 className="bcoach__subtitle">{bestCoach.subtitle}</h2>

          {/* description */}
          {bestCoach.description.map((line) => (
            <h1 className="bcoach__description">{line}</h1>
          ))}
          {/* videos 구현 예정*/}
        </div>
      </div>
    </div>
  );
}

export default BestCoach;
