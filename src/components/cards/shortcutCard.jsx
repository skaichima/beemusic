import React from "react";

function Card({name, icon}) {
  return (
    <div className="shortcut-card">
        <span>{icon}</span>
        {name}
    </div>
  );
}

export default Card;