import React, { Fragment, useEffect, useState } from "react";
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
 const [currentPage, setcurrentPage] = useState(1)

  const setCurrentPage=(e)=>{
      setCurrentPage(e)
  }
  
    const dispatch = useDispatch();
const keyword=match.params.keyword
  const { products, loading, error, productsCount,resultPerPage} = useSelector(
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
         <div className="paginationBox">
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPage}
            nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
            
            />
         </div>
         
         </Fragment>}
         
         
         
         </Fragment>;
};

export default Products;
