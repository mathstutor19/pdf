import React from "react";
import Hero from "../../components/hero/Hero.jsx";
import Premium from "../../components/premium/Premium.jsx";
import Product from '../../components/product/Product.jsx'
import Solution from "../../components/solution/Solution.jsx";
import Users from "../../components/users/Users.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./Home.css";
const Home = () => {
    return (
        <div className="home">
            <Hero/>
            <Product/>
            <Solution/>
            <Users/>
            <Premium/>
            <Footer/>
        </div>
    );
};

export default Home;
