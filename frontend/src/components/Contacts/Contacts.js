import React from "react";
import profilePic from "../../assets/images/user-1.jpg";

function Contacts() {
  return (
    <nav className="p-3">
      <h3 className="font-bold mb-3">Contacts</h3>
      <a href="#newsfeed" className="d-flex items-center mb-3">
        {" "}
        <img src={profilePic} alt="user" className="w-10 me-3 rounded-full" />
        Brad Pitt
      </a>
      <a href="#newsfeed" className="d-flex items-center mb-3">
        {" "}
        <img src={profilePic} alt="user" className="w-10 me-3 rounded-full" />
        Tom Cruz
      </a>
      <a href="#newsfeed" className="d-flex items-center mb-3">
        {" "}
        <img src={profilePic} alt="user" className="w-10 me-3 rounded-full" />
        Johny Depp
      </a>
      <a href="#newsfeed" className="d-flex items-center mb-3">
        {" "}
        <img src={profilePic} alt="user" className="w-10 me-3 rounded-full" />
        Ema Watson
      </a>
      <a href="#newsfeed" className="d-flex items-center mb-3">
        {" "}
        <img src={profilePic} alt="user" className="w-10 me-3 rounded-full" />
        Natali Portman
      </a>
      <a href="#newsfeed" className="d-flex items-center mb-3">
        {" "}
        <img src={profilePic} alt="user" className="w-10 me-3 rounded-full" />
        Scarlet Johanson
      </a>
      
    </nav>
  );
}

export default Contacts;
