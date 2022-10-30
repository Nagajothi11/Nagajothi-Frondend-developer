
import { Link } from "react-router-dom";
import React, { UseState } from "react";
import draco from '../../banner.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import dractopo from '../../top-2.jpg';

function About() {

    return (
        <div className="container py-4" id="product">
            <Fade top>
                <h3 className="about-title text-5xl font-bold">Products</h3>
            </Fade>
            <div className="flex flex-wrap mt-5">
                <div className="w-full lg:w-6/12 sm:w-6/12 xs:w-12/12">
                    <Zoom>
                        <Link to={{
                            pathname: "/product",
                        }}>
                            <div className="product-image">
                                <img src={draco} className="img-fluid" />
                                <h5 className="product-header text-lg sm:text-3xl"><i className="fa fa-rocket pr-4"></i>Rockets</h5>
                                <div className="product-content px-4 py-3 text-left">
                                    <h4 className="text-orange-600">Rocket</h4>
                                    <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                </div>
                            </div>
                        </Link>
                    </Zoom>
                </div>
                <div className="w-full lg:w-6/12 sm:w-6/12 xs:w-12/12">
                    <Zoom>
                        <div className="product-image">
                            <img src={draco} className="img-fluid" />
                            <h5 className="product-header text-lg sm:text-3xl"><i className="fas fa-capsules pr-4"></i>Capsules</h5>
                            <div className="product-content px-4  py-3 text-left">
                                <h4 className="text-orange-600">Capsules</h4>
                                <p className="m-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div >
        </div >
    )
}

export default About;
