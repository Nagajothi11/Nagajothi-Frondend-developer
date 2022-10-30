
import { Link } from "react-router-dom";
import React, { UseState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import draco from '../../Draco2.png';
import draco2 from '../../draco.png';
import Zoom from 'react-reveal/Zoom';

function Banner() {
    var settings = {
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        fade: true,
    };
    return (
        <div className="container-fluid p-0">
            <Slider {...settings}>
                <div className="banner">
                    <Zoom>
                        <div className="bannerheader">
                            <h1 className="text-base font-bold sm:mb-5 sm:text-7xl ">Lorem Ipsum is simply dummy text</h1>
                            <h5 className="text-xs sm:text-2xl ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h5>
                        </div>
                    </Zoom>
                    <img src={draco} className="img-fluid" />

                </div>
                <div className="banner">
                    <div className="bannerheader">
                        <h1 className="text-base font-bold sm:mb-5 sm:text-7xl">Lorem Ipsum is simply dummy text</h1>
                        <h5 className="text-xs sm:text-2xl text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h5>
                    </div>
                    <img src={draco2} className="img-fluid" />
                </div>
            </Slider >
        </div >
    )
}

export default Banner;
