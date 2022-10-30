
import { Link } from "react-router-dom";
import React, { UseState } from "react";
import dractopo from '../../top.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function About() {

    return (
        <div className="container py-4" id="about">
            <div className="flex flex-wrap mt-4">
                <div className="w-full lg:w-6/12 px-5 align-self-center" >
                    <Zoom>
                        <div className="about-image">
                            <img src={dractopo} className="img-fluid rounded-xl" />
                        </div>
                    </Zoom>
                </div>
                <div className="w-full lg:w-6/12 pr-5" >
                    <div className="about-content text-left">
                        <Fade top>
                            <h3 className="about-title text-5xl font-bold">About us</h3>
                        </Fade>
                        <Fade>
                            <p className="text-base mt-4 sm:mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br />
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default About;
