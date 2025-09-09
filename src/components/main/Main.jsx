import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import main from "../../config/gemini";
import { use } from "react";

const cardContent = [
  {
    textContent: "Suggest beautiful places to see on an upcoming road trip",
    img: assets.compass_icon,
  },
  {
    textContent: "Briefly summarize the concept : Urban planning",
    img: assets.bulb_icon,
  },
  {
    textContent: "Brainstrom team bonding activities for our work retreat",
    img: assets.message_icon,
  },
  {
    textContent: "Improve the readibality of the following code",
    img: assets.code_icon,
  },
];

function Cards() {
  return (
    <>
      {cardContent.map((card, index) => (
        <div className="card" key={index}>
          <p>{card.textContent}</p>
          <img src={card.img} alt="" />
        </div>
      ))}
    </>
  );
}

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [gotResponse, setGotResponse] = useState(false);
  const handelInput = async () => {
    const response = await main(inputValue);
    setAiResponse(response.response);
  };
  return gotResponse ? (
    <>
      <div className="main">
        <div className="nav">
          <p>HARIKAS AI</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="response-ai">
            <p>
              <span>Response</span>
            </p>
          </div>
          <div className="ai-response-container">
            <div className="ai-response">{aiResponse}</div>
          </div>

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a prompt here"
              />
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                onClick={() => {
                  handelInput();
                  setGotResponse(true);
                  setInputValue("");
                }}
                alt=""
              />
            </div>

            <p className="bottom-info">
              The responses from the ai might be not accurate,Double-check the
              facts.
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="main">
        <div className="nav">
          <p>gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello , Dev.</span>
            </p>
            <p>How can I help you today.</p>
          </div>
          <div className="cards">
            <Cards></Cards>
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a prompt here"
              />
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                onClick={() => {
                  handelInput();
                  setGotResponse(true);
                  setInputValue("");
                }}
                alt=""
              />
            </div>

            <p className="bottom-info">
              The responses from the ai might be not accurate,Double-check the
              facts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
