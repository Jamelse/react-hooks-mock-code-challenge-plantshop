import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
   return (
    <ul className="cards">{plants.map((pl => {
      return (<PlantCard plants={pl}/>)
    }))}</ul>
  );
}

export default PlantList;
