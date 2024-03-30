import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState({
    site: "",
    userName: "",
    passWord: "",
  });
  const [allPass, setAllPass] = useState([]);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value, id: uuidv4() });
  };

  useEffect(() => {
    const storedPass = JSON.parse(localStorage.getItem("allPass"));
    console.log(storedPass);
    if (storedPass && storedPass.length !== 0) {
      console.log("hello");
      setAllPass(storedPass);
    }
  }, []);
  

  const savePassword = () => {
    // console.log(data);
    setAllPass([...allPass, data]);
    setData({ site: "", userName: "", passWord: "" });
    // localStorage.setItem("allPass", JSON.stringify(allPass));
  };

  useEffect(() => {
    // console.log(allPass);
    localStorage.setItem("allPass", JSON.stringify(allPass));
  }, [allPass]);

  const handleRemove = (id) => {
    console.log(id);
    const newArr = allPass.filter((value) => value.id !== id);
    setAllPass(newArr);
    localStorage.setItem("allPass", JSON.stringify(newArr));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[84vh] w-screen bg-[#fff8f0] flex justify-start items-center p-3 flex-col overflow-scroll hide gap-4">
        <div className="flex justify-center items-start flex-col bg-red-200 p-4 w-[90%] min-h-[200px] gap-3 rounded-2xl">
          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              placeholder="Enter Website Url Here"
              className="w-[95%] pl-5 h-[40px] outline-none font-bold"
              value={data.site}
              onChange={handleData}
              name="site"
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              placeholder="Enter UserName Here"
              className="w-[95%] pl-5 h-[40px] outline-none font-bold"
              value={data.userName}
              onChange={handleData}
              name="userName"
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              placeholder="Enter Password Here"
              className="w-[95%] pl-5 h-[40px] outline-none font-bold"
              value={data.passWord}
              onChange={handleData}
              name="passWord"
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-green-500 px-7 py-3 font-bold text-white rounded-full w-[40%] md:w-[20%] "
              onClick={savePassword}
            >
              Save
            </button>
          </div>
        </div>

        {allPass.map((value) => (
          <div
            className="flex justify-center items-center flex-col bg-red-200 w-auto min-w-[90%] gap-3  rounded-2xl md:min-w-[30%] md:w-auto h-[140px]"
            key={value.id}
          >
            <div className="flex justify-center items-center w-[95%] bg-white flex-col rounded-2xl font-bold h-auto border-[1px] border-black">
              <div className="w-full p-[0px] flex justify-center items-center h-[33.3%]">
                <span className="w-[50%] flex justify-center items-center border-r-2 border-black border-b">
                  Website
                </span>
                <span className="w-[50%] flex justify-center items-center  border-b  border-black">
                  {value.site}
                </span>
              </div>
              <div className="w-full p-[0px] flex justify-center items-center  h-[33.3%]">
                <span className="w-[50%] flex justify-center items-center border-r-2 border-black border-b">
                  UserName
                </span>
                <span className="w-[50%] flex justify-center items-center  border-b border-black">
                  {value.userName}
                </span>
              </div>
              <div className="w-full p-[0px] flex justify-center items-center  h-[33.3%] overflow-hidden">
                <span className="w-[50%] flex justify-center items-center border-r-2 border-black border-b overflow-hidden">
                  PassWord
                </span>
                <span className="w-[50%] flex justify-center items-center ">
                  {value.passWord}
                </span>
              </div>
            </div>
            <button
              className="bg-white px-7 rounded-2xl font-bold border-[1px] border-black"
              onClick={() => handleRemove(value.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
