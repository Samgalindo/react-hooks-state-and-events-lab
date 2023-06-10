import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] =useState(true)
  const liClassName= isInCart ? "" : "in-cart"
  const buttonText = isInCart ? "Remove from Cart" : "Add to Cart"

  const handleClick = () => {
    setIsInCart(!isInCart)
  }

  
  return (
    <li className= {liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= {handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
