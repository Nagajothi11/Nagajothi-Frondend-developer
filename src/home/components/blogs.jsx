
import { Link } from "react-router-dom";
import React, { UseState } from "react";
import draco from '../../banner.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Blog() {

    return (
        <div className="container py-4" id="blog">
            <Fade top>
                <h3 className="about-title text-5xl font-bold">Latest Blogs</h3>
            </Fade>
            <div className="flex flex-wrap mt-5 blog">
                <div className="w-full lg:w-4/12 sm:w-4/12 xs:w-12/12 px-3 mb-4">
                    <Zoom>
                        <div>
                            <div className=" bg-white shadow-xl rounded border-transparent text-left hover:scale-105 transition duration-700 ease-in-out">
                                <img src={draco} className="card-img-top" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title text-2xl mb-3">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="cursor-pointer font-semibold text-orange-600 text-sm hover:text-orange-600 p-0">
                                        Read More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
                <div className="w-full lg:w-4/12 sm:w-4/12 xs:w-12/12 px-3 mb-4">
                    <Zoom>
                        <div>
                            <div className=" bg-white shadow-xl rounded border-transparent text-left hover:scale-105 transition duration-700 ease-in-out">
                                <img src={draco} className="card-img-top" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title text-2xl mb-3">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="cursor-pointer font-semibold text-orange-600 text-sm hover:text-orange-600 p-0">
                                        Read More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="w-full lg:w-4/12 sm:w-4/12 xs:w-12/12 px-3 mb-4">
                    <Zoom>
                        <div>
                            <div className=" bg-white shadow-xl rounded border-transparent text-left hover:scale-105 transition duration-700 ease-in-out">
                                <img src={draco} className="card-img-top" alt="..." />
                                <div className="card-body p-4">
                                    <h5 className="card-title text-2xl mb-3">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="cursor-pointer font-semibold text-orange-600 text-sm hover:text-orange-600 p-0">
                                        Read More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div >
        </div >
    )
}

export default Blog;
