import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Products.css'
import {
  clearErrors,
  getProduct,
  getProductDetails,
  getProducts,
} from "../../actions/productActions";
import Loader from "../layout/Loading/Loading";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
const Products = ({match}) => {
  const dispatch = useDispatch();
const keyword=match.params.keyword
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts(keyword));
  }, [dispatch,keyword]);
  return <Fragment>{loading ? <Loader /> :
     <Fragment>
         <div className="products">
             {
                 products&&products.map((product)=>(
                     <ProductCard key={product._id} product={product}/>
                 ))
             }


         </div>
         
         </Fragment>}
         
         
         
         </Fragment>;
};

export default Products;
