import React from "react";
import "./style/cards.css";
import Star from "../Assets/images/Star.png";
import Author from "../Assets/images/Author.png";
import { Link } from "react-router-dom";
function Cards(props) {
  return (
    <div className="container">
      <div className="imgbox">
        <img
          src="https://cdn.dribbble.com/userupload/4401203/file/original-4c7b74aaeeee3491cc62b1a356da6cfe.png?resize=1504x1128"
          alt=""
        />
      </div>
      <p className="__book-title">{(props.Book_title) && props.Book_title.slice(0, 20)}</p>
      <div className="info">
        <div className="author __sub-info">
          <img src={Author} alt="" />

          <p>{props.Author}</p>
        </div>
        <div className="rating __sub-info">
          <img src={Star} alt="" />
          <p>{(props.Rating) && (props.Rating).toFixed(2)}</p>
        </div>
      </div>
      <Link to={`/details/${props.ID}`} className="__view-btn">
        View
      </Link>
    </div>
  );
}

export default Cards;
