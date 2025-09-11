import React, { useEffect, useState } from "react";
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
  const [displayMsg, setDisplayMsg] = useState("");
  const [index, setIndex] = useState(0);

  const [gotResponse, setGotResponse] = useState(false);
  const handelInput = async () => {
    const response = await main(inputValue);
    setDisplayMsg("");
    setIndex(0);
    setAiResponse(response.response);
  };
  console.log(aiResponse);

  useEffect(() => {
    if (index < aiResponse.length) {
      const interval = setTimeout(() => {
        setDisplayMsg((prev) => prev + aiResponse[index]);
        setIndex((prev) => prev + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [index, aiResponse]);
  return gotResponse ? (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="response-ai">
            <p>
              <span>Response</span>
            </p>
          </div>
          <div className="ai-response-container">
            <div className="ai-response">{displayMsg}</div>
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
          <p>Gemini</p>
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
