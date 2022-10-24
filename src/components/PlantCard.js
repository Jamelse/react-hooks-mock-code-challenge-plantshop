import React, {useState} from "react";

function PlantCard({plants}) {
  
  const [stockButton, setStockButton] = useState(true)
  
  function stockButtonHandler(){
    setStockButton((stock) => !stock)
  }
  
  return (
    <li className="card">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {stockButton ? (
        <button className="primary" onClick={stockButtonHandler}>In Stock</button>
      ) : (
        <button onClick={stockButtonHandler}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
