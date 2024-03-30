import React, { useContext } from "react";
import { assets } from "../../../public/assets/assets";
import "./main.css";
import { Context } from "../../Context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="UserIcons" />
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello</span>
                </p>
                <p>How Can I Help You Today ?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest Beautifull places</p>
                  <img src={assets.compass_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Urban Planing</p>
                  <img src={assets.bulb_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Random Facts</p>
                  <img src={assets.message_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Top programming</p>
                  <img src={assets.code_icon} alt="CompassIcon" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="result">
                  <div className="resTitle">
                     <img src={assets.user_icon} alt="" />  
                     <p>
                      {recentPrompt}
                     </p>
                  </div>  
                  <div className="result-data">
                      <img src={assets.gemini_icon} alt="" />
                      {loading?<>
                          <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                          </div>
                      </>:
                      <>
                      <p dangerouslySetInnerHTML={{__html:resData}}></p>
                      </>
                      }
                  </div>            
              </div>
            </>
          )}
          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Enter a Prompt here"
                value={input}
              />
              <div>
               
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              Gemini May Display Inaccurate Info, Including About People, So
              Double-Check Its Responses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
