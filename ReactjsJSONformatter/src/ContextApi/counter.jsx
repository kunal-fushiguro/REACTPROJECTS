import {createContext,useState} from 'react'


export const Context = createContext(null);
export const ContextProvider = (props) =>{
    const [jsonInput,setJsonInput] = useState('');
    const [format,setFormat] = useState();
    const [url,setUrl] = useState("");
    const [tree,setTree] = useState(false);


    // fetch json data 
    const fetchJson = async(url) => {
        setUrl("");
        // console.log(url);
        const data = await fetch(url);
        const jsonData = await data.json()
        // console.log(jsonData);
        setJsonInput(JSON.stringify(jsonData));
        formatJson(jsonData);
        
    }

    // format function
    const formatJson = (json) =>{
        // console.log(json);
        setFormat(JSON.stringify(json,null,4))
    }

    
    const contextValue = {
        jsonInput,
        setJsonInput,
        url,
        setUrl,
        fetchJson,
        format,
        setFormat,
        formatJson,
        tree,
        setTree,
    }
    return <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
}