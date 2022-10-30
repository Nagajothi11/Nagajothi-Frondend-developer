
import React, { useState, useEffect } from "react";
import Banner from './components/banner'
import Blogs from './components/blogs'
import { endpoints } from "../auth/url";
import usercalls from "../auth/endpoints";

function Products() {
    const path = usercalls();
    const [rocket, setRockets] = useState()
    const [state, setState] = useState('')
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [nameData, setNameData] = useState(null)
    const [countryData, setCountryData] = useState(null)
    const [StateData, setStateData] = useState(null)
    const [filterData, setFilterData] = useState(null)

    useEffect(() => {
        getdata();
    }, [])

    useEffect(() => {
        if (name === '' && country === '' && state === '') {
            getdata();
        }
        else {
            if (name) {
                let datum
                if (nameData) {
                    console.log(nameData, "nameData")
                    datum = nameData;
                }
                else if (StateData) {
                    console.log(StateData, "StateData")
                    datum = StateData;
                }
                else {
                    datum = rocket
                }
                const query = name.toLowerCase();
                const items = []
                datum.filter(function (item) {
                    if (item.rocket_id) {
                        if (item.rocket_id.indexOf(query) > -1) {
                            console.log(items, "items")
                            items.push(item)
                        }
                        setFilterData(items)
                        setNameData(items)
                    }
                })
            }
            if (country) {
                let datums
                if (nameData) {
                    console.log(nameData, "nameData")
                    datums = nameData;
                }
                else if (StateData) {
                    console.log(StateData, "StateData")
                    datums = StateData;
                }
                else {
                    datums = rocket
                }
                const query = country;
                const items = []
                console.log(query, "query")
                datums.filter(function (item) {
                    console.log(item, "item")
                    if (item.country) {
                        if (item.country.indexOf(query) > -1) {
                            console.log(items, "items")
                            items.push(item)
                        }
                        setFilterData(items)
                        setCountryData(items)
                    }
                })
            }
            if (state) {
                let datumstate
                if (nameData) {
                    console.log(nameData, "nameData")
                    datumstate = nameData;
                }
                else if (countryData) {
                    console.log(countryData, "countryData")
                    datumstate = countryData;
                }
                else {
                    datumstate = rocket
                }
                const query = state.toLowerCase();
                const items = []
                datumstate.filter(function (item) {
                    console.log(item, "item")
                    if (item.engines) {
                        if (item.engines.type.indexOf(query) > -1) {
                            console.log(items, "items")
                            items.push(item)
                        }
                        console.log(items, "engine")
                        setFilterData(items)
                        setStateData(items)
                    }
                })
            }
        }

    }, [state, name, country])

    const getdata = async () => {
        const url = endpoints.getrocket
        try {
            const data = await path.getCall({ url });
            const result = await data.json();
            setRockets(result);
            setFilterData(result)
        }
        catch (error) {
            console.error(error);
        }

    }
    return (
        <div>
            <Banner />
            <div className="container py-4" >
                <div className="flex flex-wrap mt-5 justify-content-center">
                    <div className="w-full lg:w-3/12 sm:w-3/12 xs:w-12/12 px-3">
                        <input
                            onChange={(e) => {
                                console.log(e.target.value);
                                setState(e.target.value)
                            }}
                            type="text"
                            className="h-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 d rounded-l-none px-3 self-center text-base outline-none"
                            placeholder="Engine"
                        />
                    </div>
                    <div className="w-full lg:w-3/12 sm:w-3/12 xs:w-12/12 px-3">
                        <input
                            onChange={(e) => {
                                console.log(e.target.value);
                                setCountry(e.target.value)
                            }}
                            type="text"
                            className="h-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 d rounded-l-none px-3 self-center text-base outline-none"
                            placeholder="Country"
                        />
                    </div>
                    <div className="w-full lg:w-3/12 sm:w-3/12 xs:w-12/12 px-3">
                        <input
                            onChange={(e) => {
                                console.log(e.target.value);
                                setName(e.target.value)
                            }}
                            type="text"
                            className="h-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 d rounded-l-none px-3 self-center text-base outline-none"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full lg:w-3/12 sm:w-3/12 xs:w-12/12 px-3">
                        <button className=" h-12 hover:scale-105 transition duration-700 ease-in-out bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 w-100 rounded focus:outline-none focus:shadow-outline" type="button">
                            <i className="fas fa-search"></i> Search
                        </button>
                    </div>
                </div>
            </div >
            <Blogs
                rocket={filterData}
                title={"Rockets"} />
        </div >
    );
}

export default Products;
