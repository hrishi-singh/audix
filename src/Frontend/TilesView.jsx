import React from "react";
import Cards from "./Cards";
import "./style/tilesview.css";
function Tilesview(props) {


  return (
    <div id="__tiles-container">
      <h4>{props.title}</h4>

      <div className="tiles">
        {props.data.map((det) => {
          return (
            <Cards
              Book_title={det.title}
              Author={det.author}
              Rating={det.rating}
              ID={det._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tilesview;
