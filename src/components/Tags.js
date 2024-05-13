// import axios from "axios";
import React, { useState } from "react";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const Tags = () => {
    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState("");
    // const [loader, setLoader] = useState(false);

    // async function fetchData() {
    //     setLoader(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    // function clickHandler() {
    //     fetchData();

    // }

    // function changeHandler(event) {
    //     setTag(event.target.value)
    // }

    const {gif, loader, fetchData} = useGif(tag);

    return (
        <div className="w-[800px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

            {
                (loader) ? (<Spinner />) : (<img src={gif} alt="" width="450"/>)
            }

            <input type="text" value={tag}
            className="w-10/12 p-2 rounded-lg mb-[2px] text-center"
            onChange={(event) => setTag(event.target.value)}/>
            
            <button onClick={() => fetchData()}
            className="w-10/12 bg-yellow-400 p-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    );
}

export default Tags;