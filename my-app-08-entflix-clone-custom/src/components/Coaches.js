import React from "react";
import "../static/css/Coaches.css";
import Coach from "../static/image/coach.png";

const coaches = [
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
  { name: "김계란", image: Coach },
];

// coaches 원래 불러와야함
// function Coaches({title, coaches}) {
function Coaches({ title }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="coach__posters">
        {coaches.map((coach) => (
          <img src={coach.image} alt={coach.name} className="coach__poster" />
        ))}
      </div>
    </div>
  );
}

export default Coaches;
