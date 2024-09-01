import React from "react";
import "./style/home.css";
import head_img from "../Assets/images/Group 1Main.png";

import Tilesview from "./TilesView";
import { Link } from "react-router-dom";
const Home = (props) => {
 
  return (
    <div>
     

      <section id="hero">
        <div className="welcome-text">
          <h3>Discover, Rate, and Review: </h3>
          <h2>Audix</h2>
          <h1>
            Welcome to Audix, your go-to platform for exploring and rating the best audiobooks. Dive into a vast library of captivating stories across genres, all curated to enhance your listening experience. Whether you're a casual listener or a devoted audiobook enthusiast, Audix offers a seamless way to discover new titles, read insightful reviews from fellow listeners, and rate your favorites. Join our community today and let your voice be heard as you help others find their next great listen!
          </h1>
          <span>Explore Now</span>
        </div>
        <div className="landing_img">
          <img src={head_img} alt="" />
        </div>
      </section>

      <section id="categories">
        <h4 className="__cat-title">Categories</h4>
        <ul className="__cat-list">
          <li>Fiction</li>
          <li>Non-fiction</li>
          <li>Young Adult</li>
          <li>Children's Books</li>
          <li>Classics</li>
          <li>Health & Wellness</li>
          <li>Education & Learning</li>
          <li>Hobbies & Interests</li>
          <li>Religion & Spirituality</li>
          <li>Language & Linguistics</li>
        </ul>
      </section>

      <Tilesview data={props.data.slice(0,4)} title="Best Seller"/>
      <Tilesview data={props.data.slice(8,12)} title="New Release"/>

      <section id="view-all">
        <Link to='/all-audiobooks'> <a href="">View All Audiobooks</a></Link>
      </section>
    </div>
  );
};

export default Home;
// export const AudiobookData= ()=>{return({data1})};
