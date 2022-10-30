
import { Link } from "react-router-dom";
import React, { useState } from "react";
import draco from '../../banner.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { data } from "autoprefixer";

function Blog({ rocket, title }) {
    console.log(rocket, "rocket")
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null)
    return (
        <div className="container py-4">
            <Fade top>
                <h3 className="about-title text-5xl font-bold">{title}</h3>
            </Fade>
            <div className="flex flex-wrap mt-5 blog">
                {rocket && rocket.map((data, i) => (
                    <div className="w-full lg:w-4/12 sm:w-4/12 xs:w-12/12 px-3 mb-5">
                        <Zoom>
                            <div>
                                <div key={i} className=" bg-white shadow-xl rounded border-transparent text-left hover:scale-105 transition duration-700 ease-in-out">
                                    <img src={data.flickr_images[0]} className="card-img-top" alt="..." />
                                    <div className="card-body p-4">
                                        <h5 className="card-title text-2xl mb-1">{data.rocket_name}</h5>
                                        <h6 className="text-sm text-slate-500 mb-3">{data.country}</h6>
                                        <p className="card-text">{data.description}</p>
                                        <button onClick={() => {
                                            setOpen(!open);
                                            setDetails(data);
                                        }} data-toggle="modal" data-target="#exampleModal"
                                            className="cursor-pointer font-semibold text-orange-600 text-sm hover:text-orange-600 p-0">
                                            Read More <i className="fas fa-chevron-right"></i>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </Zoom>

                    </div>
                ))}
                {open && details != null ?
                    <div className="modal" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div onClick={() => setOpen(!open)}>
                                    <button className="text-3xl">
                                        <span className=" close " aria-hidden="true" >&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body mt-3">
                                    <h2 className="text-orange-600 modal-title mb-3">{details.rocket_name}</h2>
                                    <p className="text-justify">{details.description}</p>
                                    <img src={details.flickr_images[1]} className="img-fluid p-4" alt="..." />
                                    <h3 className="text-orange-600">Overview</h3>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <thead className="border-b">
                                                            <tr>
                                                                <th scope="col" className="text-sm font-bold text-gray-900 px-3 py-2">
                                                                    Height
                                                                </th>
                                                                <th scope="col" className="text-sm font-bold text-gray-900 px-3 py-2">
                                                                    Diameter
                                                                </th>
                                                                <th scope="col" className="text-sm font-bold text-gray-900 px-3 py-2">
                                                                    Mass
                                                                </th>
                                                                <th scope="col" className="text-sm font-bold text-gray-900 px-3 py-2">
                                                                    Engine
                                                                </th>
                                                                <th scope="col" className="text-sm font-bold text-gray-900 px-3 py-2">
                                                                    Propallants
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="border-b">
                                                                <td className="text-sm text-gray-900 font-medium px-3 py-2 whitespace-nowrap">
                                                                    {details.height?.feet}{'M'}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-medium px-3 py-2 whitespace-nowrap">
                                                                    {details.diameter?.feet}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-medium px-3 py-2 whitespace-nowrap">
                                                                    {details.mass?.kg}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-medium px-3 py-2 whitespace-nowrap">
                                                                    {details.engines?.type}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-medium px-3 py-2 whitespace-nowrap">
                                                                    {details.engines?.propellant_1}<br />
                                                                    {details.engines?.propellant_2}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-orange-600">First Stage</h3>
                                    <div className="py-4 px-20 text-left">
                                        <p className="text-lg text-gray-900 font-medium">Thurst Sea Level : {details.first_stage?.thrust_sea_level?.lbf}</p>
                                        <p className="text-lg text-gray-900 font-medium">Thrust Vacuum : {details.first_stage?.thrust_vacuum?.lbf}</p>
                                        <p className="text-lg text-gray-900 font-medium">Fuel Amount : {details.first_stage?.fuel_amount_tons}</p>
                                        <p className="text-lg text-gray-900 font-medium">Burn Time : {details.first_stage?.burn_time_sec ? details.first_stage.burn_time_sec : "none"}</p>
                                    </div>
                                    <h3 className="text-orange-600">Second Stage</h3>
                                    <div className="py-4 px-20 text-left">
                                        <p className="text-lg text-gray-900 font-medium">Thurst Sea Level : {details.second_stage?.thrust?.lbf}</p>
                                        <p className="text-lg text-gray-900 font-medium">Thrust Vacuum : {details.second_stage?.payloads?.option_1}</p>
                                        <p className="text-lg text-gray-900 font-medium">Fuel Amount : {details.second_stage?.fuel_amount_tons}</p>
                                        <p className="text-lg text-gray-900 font-medium">Burn Time : {details.second_stage?.burn_time_sec ? details.second_stage.burn_time_sec : 'none'}</p>
                                    </div>
                                    <h3 className="text-orange-600">Payload Stage</h3>
                                    <div className="py-4 px-20 text-center">
                                        <p className="text-lg text-gray-900 font-medium">Name : {details.payload_weights[0]?.name}</p>
                                        <p className="text-lg text-gray-900 font-medium">Weight : {details.payload_weights[0]?.kg}{' kg'}</p>
                                    </div>
                                    <a href={details.wikipedia} target="_blank"
                                        className="cursor-pointer font-semibold bg-orange-600 p-3 text-white text-sm hover:text-orange-600">
                                        Know More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    : null}
            </div >
        </div >
    )
}

export default Blog;
