// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    // // const [gif, setGif] = useState("");
    // // const [loader, setLoader] = useState(false);

    // async function fetchData() {
    //     setLoader(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     console.log(imageSource);
    //     setLoader(false);
    // }
    
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {gif, loader, fetchData} = useGif();

    // function clickHandler() {
    //     fetchData();

    // }

    return (
        <div className="w-[800px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

            {
                (loader) ? (<Spinner />) : (<img src={gif} alt="" width="450"/>)
            }

            
            <button onClick={() => fetchData()}
            className="w-10/12 bg-yellow-400 p-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    );
}

export default Random;