import React, { useState, useEffect } from 'react';

function HomeGifs(props) {
    const hide = {
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none' /* IE and Edge */,
        '&::-webkit-scrollbar': {
          display: 'none' /* WebKit */
        }
    }
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const url = `https://nekos.best/api/v2/${props.value}?amount=3`;
        
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setData(json.results);
          })
          .catch((error) => console.error("Error fetching data:", error));
    }, [props.value]); // Ensure useEffect runs when props.value changes
    // console.log(data);




    return (
        <div className='w-full h-[75%] flex justify-center items-center overflow-y-scroll p-3' style={hide}>
            {data.map((key)=>{
                return <div className='w-[33%] object-contain h-full p-2'>
                    <img src={key.url} alt="GIfs" />
                </div>
            })}
        </div>
    );
}

export default HomeGifs;
