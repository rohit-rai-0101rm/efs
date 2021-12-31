import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const Product = ({ product }) => {
  const options={
      edit:false,
      size:window.innerWidth<600?20:25,
      activeColor:"tomato",
      value:3.5,
      isHalf:true,
      color:"rgba(20,20,20,0.1)"

  }
    return (
    <Link className="productCard">
      <img src={product.images[0].url} />
      <p>{product.name}</p>
      <div>
          <ReactStars {...options}/><span>(256 Reviews)</span>
      </div>
    </Link>
  );
};

export default Product;
