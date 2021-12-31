import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import "./Home.css";
const Home = () => {
    const product={
        name:"t-shirt",
        price:"3456",
        id:"rohit",
        images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    }
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div id="container" class="container">
          <Product product={product}/>
      </div>
    </Fragment>
  );
};

export default Home;
