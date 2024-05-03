import React, { useEffect, useState } from "react";
import HomeGifs from "./HomeGifs";
import {Link} from 'react-router-dom'

function Home() {
  const url = `https://nekos.best/api/v2/endpoints`;
  const [data, setData] = useState({});
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // Extracting keys from the received data
        setKeys(Object.keys(json));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <>
      <div className="flex justify-center items-center w-full flex-col gap-6 m-5 ">
        {keys.map((key,index)=>{
             if(index > 3){

             return <div className="bg-[#222831] w-[90%] h-[90%] flex justify-start items-center flex-col rounded-3xl">
                <div className="flex justify-between items-center w-full p-4 text-3xl font-bold h-[25%]">
                    <span key={key}>
                        {key.toUpperCase()}
                    </span>

                      <Link exact to={`/Gifs/${key}`} className="p-2 rounded-3xl bg-[#31363F]">
                        ➕
                      </Link>
                </div>
                    <HomeGifs value={key}/>
            </div>
             }
        })}
      </div>
    </>
  );
}

export default Home;
