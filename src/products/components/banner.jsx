
import { Link } from "react-router-dom";
import React, { UseState } from "react";
import draco from '../../draco.png';
import Zoom from 'react-reveal/Zoom';

function Banner(props) {
    // console.log(props.title, "title")
    return (
        <div className="container-fluid p-0">
            <div className="banner">
                <Zoom>
                    <div className="bannerheader">
                        <h1 className="text-base font-bold sm:mb-5 sm:text-7xl">Rockets</h1>
                        <h5 className="text-xs sm:text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h5>
                    </div>
                </Zoom>
                <img src={draco} className="img-fluid" />
            </div>

        </div >
    )
}

export default Banner;
