import { createContext, useState } from "react";
import runChat from "../Config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [pervPrompt, setPrevPrompt] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState("");

  const delayPara = (index,nextWord) =>{
    setTimeout(() => {
        setResData(perv => perv+nextWord);
    }, 75*index);
  }

  const newChat = () =>{
    setLoading(false);
    setshowResult(false);
  }

  const onSent = async (prompt) => {

    setResData("");
    setLoading(true);
    setshowResult(true);
    let response;
    if(prompt !== undefined){
        response = await runChat(prompt);
        setRecentPrompt(prompt);
    }else{
        setRecentPrompt(input);
        setPrevPrompt(perv => [...perv,input]);
        response = await runChat(input);
    }
    let responseArray = response.split("**");
    let newArray = "";
    for(let i = 0; i < responseArray.length;i++){
        if(i === 0 || i%2 !== 1){
            newArray += responseArray[i];
        }else{
            newArray += "<b>" + responseArray[i] + "</b>";

        }
    }
    let newResponse = newArray.split("*").join("</br>")
    let newResponseArray = newResponse.split(" ");
    for(let i =0; i < newResponseArray.length; i++){
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+" ");
    }
    setLoading(false);
    setInput("");


  };
  const contextValue = {
    pervPrompt,
    setPrevPrompt,
    showResult,
    // setshowResult,
    recentPrompt,
    setRecentPrompt,
    onSent,
    loading,
    resData,
    input,
    setInput,
    newChat,

  };
  return (
    <>
      <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    </>
  );
};

export default ContextProvider;
