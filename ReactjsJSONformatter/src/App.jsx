import { useState, useContext } from "react";
import { Context } from "./ContextApi/counter";
import { JSONTree } from "react-json-tree";

function App() {
  const {
    jsonInput,
    setJsonInput,
    url,
    setUrl,
    fetchJson,
    format,
    formatJson,
    tree,
    setTree,
  } = useContext(Context);
  const theme = {
    scheme: 'custom',
    author: 'white',
    base00:"#444444",
    base01:"#ffffff",
    base02:"#ffffff",
    base03:"#ffffff",
    base04:"#ffffff",
    base05:"#ffffff",
    base06:"#ffffff",
    base07: '#FFFFFF', 
    base08: '#FFFFFF', 
    base09: '#FFFFFF', 
    base0A: '#FFFFFF', 
    base0B: '#FFFFFF', 
    base0C: '#FFFFFF', 
    base0D: '#FFFFFF', 
    base0E: '#FFFFFF', 
    base0F: '#FFFFFF'   
    
  }

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[#333333] flex justify-center items-center flex-col">
        <div className="w-[100%] h-[15%] flex justify-center items-center gap-2 ">
          <div className=" flex justify-center items-center w-[90%] h-[65px] bg-[#444444] rounded-2xl gap-4">
            <input
              type="text"
              className="w-[80%] h-[50%] rounded-full outline-none pl-[15px] font-bold placeholder:font-bold"
              placeholder="PASTE API URL HERE ........"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              className="w-[10%] bg-[#47cf73] font-bold rounded-2xl text-white p-[7px] text-xl"
              onClick={() => {
                fetchJson(url);
              }}
            >
              Fetch JSON
            </button>
          </div>
        </div>
        <div className="w-[100%] h-[85%] flex justify-center items-center">
          <div className="flex justify-center items-center w-[45%] h-[100%]">
            <textarea
              type="text"
              className="bg-[#444444] h-[90%] w-[90%] rounded-2xl p-5 outline-none border-none text-start font-bold text-white text-xl resize-none"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            ></textarea>
          </div>
          <div className="w-[7%] flex justify-center items-center flex-col gap-7">
            <button
              className="w-[100%] bg-[#47cf73] font-bold rounded-2xl text-white p-[7px] text-xl"
              onClick={() => {
                formatJson(JSON.parse(jsonInput));
                setTree(false);
                console.log(tree);
              }}
            >
              Format
            </button>
            <button
              className="w-[100%] bg-[#47cf73] font-bold rounded-2xl text-white p-[7px] text-xl"
              onClick={() => {
                setTree(true);
                console.log(tree);
              }}
            >
              Tree
            </button>
          </div>
          <div className="flex justify-center items-center w-[45%] h-[100%]">
            {tree ? (
              <div className="bg-[#444444] h-[90%] w-[90%] rounded-2xl p-5 outline-none border-none text-start font-bold text-white text-xl overflow-y-scroll">
                <JSONTree data={JSON.parse(jsonInput)} theme={theme} />
              </div>
            ) : (
              <textarea
                className="bg-[#444444] h-[90%] w-[90%] rounded-2xl p-5 outline-none border-none text-start font-bold text-white text-xl resize-none"
                value={format}
              ></textarea>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
