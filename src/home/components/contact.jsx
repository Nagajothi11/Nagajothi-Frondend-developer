
import { Link } from "react-router-dom";
import React, { UseState } from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Blog() {

    return (
        <div className="subscribe" id="contact">
            <div className="container py-5">
                <Fade top>
                    <h3 className="about-title text-5xl font-bold text-white">Subscribe</h3>
                </Fade>
                <Zoom>
                    <div className="flex flex-wrap mt-5 justify-content-center">
                        <div className="w-full lg:w-6/12 sm:w-6/12 xs:w-12/12 px-3 mb-4">
                            <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded pr-10 ">
                                <div className=" flex justify-center w-15 py-3 px-1">
                                    <span
                                        className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                    >
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="h-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center text-base outline-none"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-2/12 sm:w-3/12 xs:w-12/12 px-3">
                            <button className=" h-14 hover:scale-105 transition duration-700 ease-in-out bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 w-100 rounded focus:outline-none focus:shadow-outline" type="button">
                                <i className="fas fa-paper-plane"></i> Send
                            </button>
                        </div>
                        <div className="w-full lg:w-7/12 sm:w-7/12 xs:w-12/12 px-3">
                            <p className="mb-0 mt-5 text-white ">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </p>
                        </div>
                    </div>
                </Zoom>
            </div >
        </div>
    )
}

export default Blog;
