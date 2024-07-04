import React from "react";
import Cards from "./Cards";
import "./style/tilesview.css";
import { useEffect,useState,} from "react";
function Tilesview(props) {
const [sortValue,setSortValue]=useState();

useEffect(() => {
  console.log(sortValue);
  if(props.data && sortValue==="sales2"){
    // console.log("Going into sort",sortValue);
    props.data.sort(function(a, b){return a.sales-b.sales});
    console.log("sorted lowest to highest");
  }
  if(props.data && sortValue==="sales1"){
    // console.log("Going into Highest sort",sortValue);
    
    props.data.sort(function(a, b){return b.sales-a.sales});
    console.log("sorted highest to lowest");
  }
  // setData(props.data);
}, [sortValue]);

  return (
    <div id="__tiles-container">
      <h4>{props.title}</h4>
      <div className="__sort-filter-container">
        <div className="__sort-container">
          <form action="#">
            <label htmlFor="sort">Sort by:</label>
            <select name="sort" id="sort" value={sortValue} onChange={e=>setSortValue(e.target.value)}>
              <option value="" disabled selected></option>
              <option value="sales1">Low Sales</option>
              <option value="sales2">High Sales</option>

            </select>
          </form>
        </div>
      </div>
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
