import React, { useState, useEffect } from "react";
import "../style/home.css";
import { initThree } from "../utils/ThreeInit";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new Room");
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room Id and Username must be required!");
      return;
    }

    // Redirect

    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };


  const handleInputEnter = (e)=>{
    if(e.code == 'Enter'){
      joinRoom();
    }
  }

  useEffect(() => {
    initThree(); // Initialize Three.js when the component mounts
  }, []);

  return (
    <div className="homePagewrapper">
      <canvas className="webgl"></canvas>
      <div className="formWrapper">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTH0Flzvbn_w9Mo14Phs0fPKhuLnKR86ZoFV4XRGAQk3R2XmCCT9NTHiVkKm12e5z5kYA&usqp=CAU"
          alt="logo.png"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div>
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onKeyUp={handleInputEnter}
          />
          <button className="btn" onClick={joinRoom}>
            Join
          </button>

          <span className="createInfo">
            <a onClick={createNewRoom} href="" className="createNewBtn">
              Create New room
            </a>
          </span>
        </div>
      </div>

      <footer className="footer">
        <h4>
          Built with 💌 by &nbsp;
          <a href="">codesolverkushal</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
