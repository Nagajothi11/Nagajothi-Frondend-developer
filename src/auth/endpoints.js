// import axios from "axios";
import React from 'react';

export default function Endpoints() {

    //   const getCallWithoutAuthToken = async (data) => {
    //     const { url } = data;
    //     const rawResponse = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     return rawResponse;
    // }
    const getCall = async (data) => {
        const { url } = data;
        const rawResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
        return rawResponse;
    }
    // const postCallWithoutAuthToken = async (data) => {
    //     const { url, payload } = data;
    //     const rawResponse = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(payload)
    //     })
    //     return rawResponse;
    // }
    // const postCallfile = async (data) => {
    //     const { url, files } = data;
    //     console.log(files, "files")
    //     // const validateToken = await validateAuthToken()
    //     const validateToken = sessionStorage.getItem('accesstoken');
    //     const rawResponse = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/pdf',
    //             'Content-Type': 'multipart/form-data',
    //             'Authorization': `${validateToken}`
    //         },
    //         files
    //     })
    //     return rawResponse;
    // }
    // const postCall = async (data) => {
    //     const { url, payload } = data;
    //     // const validateToken = await validateAuthToken()
    //     const validateToken = sessionStorage.getItem('accesstoken');
    //     const rawResponse = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': `${validateToken}`
    //         },
    //         body: JSON.stringify(payload)
    //     })
    //     return rawResponse;
    // }
    // const postCallTokenonly = async (data) => {
    //     const { url } = data;
    //     // const validateToken = await validateAuthToken()
    //     const validateToken = sessionStorage.getItem('accesstoken');
    //     const rawResponse = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': `${validateToken}`
    //         }
    //     })
    //     return rawResponse;
    // }

    return {
        // getCallWithoutAuthToken,        postCallWithoutAuthToken, 
        getCall,
        // postCall, putCall, postCallTokenonly, postCallfile,
        //  getRefreshToken,
        // uploadImage, 
    }
}
