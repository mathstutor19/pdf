import React from "react";

function ArrayMao(props) {
  return (
    
    <div >
      <div className="array">
      <h3>{props.array.name}</h3>
      <button className="btn" onClick={() => props.isCompleted(props.array.id)}>{props.array.isCompleted ? "-" : "+"}</button>
      </div>
      <hr />
      <p style={{ display: props.array.isCompleted ? "block" : "none" }}>{props.array.parag}</p>
      </div>
    
  );
}

export default ArrayMao;
