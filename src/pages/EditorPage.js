import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import "../style/editor.css";


const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Kushal" },
    { socketId: 2, userName: "Rohit" },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTH0Flzvbn_w9Mo14Phs0fPKhuLnKR86ZoFV4XRGAQk3R2XmCCT9NTHiVkKm12e5z5kYA&usqp=CAU"
              className="logoImage"
              alt=""
            />
            </div>
            <div>
            <span>ፈᎧᎴᏋ &nbsp; &nbsp; &nbsp;</span>
            <span>ᏋᎴᎥᏖᎧᏒ</span>
            </div>
          </div>
          <h3>Connected...</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} userName={client.userName} />
            ))}
          </div>
        </div>

        <button className="btn copyBtn">Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorwrap">
         <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
