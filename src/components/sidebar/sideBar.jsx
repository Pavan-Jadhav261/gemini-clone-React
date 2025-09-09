import "./sidebar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";
import main, { History } from "../../config/gemini.js";

function SideBar() {
  const [extend, setExtend] = useState(false);
  const handleHistory = async () => {
    const response = await main();
    console.log(response.history[0].parts[0]);
  };
  const click = () => {
    setExtend((extend) => !extend);
  };
  const history = History;
  const userHistory = history.filter((items) => items.role == "user");

  function ResentQuestions() {
    return (
      <>
        {userHistory.map((textContent) => {
          return (
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{textContent.parts[0].text}</p>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => {
            click();
            ResentQuestions();
          }}
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>New chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <ResentQuestions />
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
