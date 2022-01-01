import "./App.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import WebFont from 'webfontloader'
import Header from "./components/layout/Header/Header.js";
import { useEffect } from "react";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Search from "./components/Search/Search";
import LoginSignup from "./components/User/LoginSignup";

function App() {
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
  
  },[])
  return <Router>
    <Header/> 
    <Route exact path="/" component={Home} /> 
    <Route exact path="/product/:id" component={ProductDetails} /> 
    <Route exact path="/products" component={Products} /> 
    <Route  path="/products/:keyword" component={Products} /> 

    <Route exact path="/search" component={Search} /> 
    <Route exact path="/login" component={LoginSignup} /> 

    <Footer/>
  </Router>;
}

export default App;
