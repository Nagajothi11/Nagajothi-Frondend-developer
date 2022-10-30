
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Banner from './components/banner'
import About from './components/about'
import Product from './components/products'
import Blogs from './components/blogs'
import Contact from './components/contact'


function App() {

    return (
        <div>
            <Banner />
            <About />
            <Product />
            <Blogs />
            <Contact />
        </div>
    );
}

export default App;
