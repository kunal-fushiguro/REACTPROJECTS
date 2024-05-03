import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ReanderGifs() {
  const para = useParams();
  const { name } = para;
  const url = `https://nekos.best/api/v2/${name}?amount=50`;

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => setData([res]))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDownload = (link) =>{
    const aTag = document.createElement('a');
    aTag.href=link;
    aTag.setAttribute("donwload",link.split('/').pop());
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  
  // console.log(url);
  console.log(data);
  // console.log(data[0].results);
  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-[#31363F] flex justify-start items-center flex-wrap flex-col">
        <h1 className="text-white text-[40px] w-full text-center h-[20%] bg-[#222831] font-bold">
          <NavLink exact to={"/"}>
            Anime Gifs
          </NavLink>
        </h1>
        <div className="flex w-full justify-center items-center flex-col text-white h-auto min-h-[80%]">
          {data.length > 0 && data[0].results.map((obj) =>(
                <div className="p-3 w-[50%] h-[500] bg-[#222831] rounded-2xl object-contain flex justify-center items-center m-7 flex-col gap-3 ">
                  <img src={`${obj.url}`} alt="Gifs" srcset="" />
                  <button className="p-4 rounded-3xl bg-[#31363F] font-bold" onClick={()=>{handleDownload(obj.url)}}>Download</button>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ReanderGifs;
