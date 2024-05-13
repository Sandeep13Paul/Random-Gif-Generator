// import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState("car");
    const [loader, setLoader] = useState(false);
    
    async function fetchData() {
        setLoader(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        // console.log(output);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        console.log(imageSource);
        setLoader(false);
    }
    
    useEffect(() => {
        fetchData();
    },[])
    
    return { gif, loader, fetchData };
}

export default useGif;