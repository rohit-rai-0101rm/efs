import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const {loading,error,products,productsCount}=useSelector(state=>state.products)
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(products)
  return (
    <Fragment>
    {loading ? (
      <Loader/>
    ) : (
      <Fragment>
        <MetaData title="ECOMMERCE" />

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

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
    )}
  </Fragment>
  );
};

export default Home;
