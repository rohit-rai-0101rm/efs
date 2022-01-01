import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const Product = ({ product }) => {
  console.log(product)
  const options={
      edit:false,
      size:window.innerWidth<600?20:25,
      activeColor:"tomato",
      value:product.ratings,
      isHalf:true,
      color:"rgba(20,20,20,0.1)"

  }
    return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <p>{product.name}</p>
      <div>
          <ReactStars {...options}/><span>{product.numOfReviews}(Reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default Product;
