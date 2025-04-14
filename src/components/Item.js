import React, {useState} from "react";

function Item({ name, category }) {

  const[isIncart, setIsInCart] = useState(false);

  const handleClick = () =>{
    setIsInCart((prev) => !prev);
  }
  const lisClass = isIncart ? "in-cart":"";
  const buttonText = isIncart ? "Remove from Cart":"Add to Cart"
  const buttonClass = isIncart ? "remove":"add"
  return (
    <li className={lisClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
