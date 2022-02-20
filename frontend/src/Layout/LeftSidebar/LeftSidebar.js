import React from "react";
import ProfileCard from "../../components/Profile/ProfileCard";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <ProfileCard />

      <a href="#newsfeed" className="d-block">
        Newsfeed
      </a>
      <a href="#people-nearby" className="d-block">
        People Nearby
      </a>
      <a href="#friends" className="d-block">
        Friends
      </a>
      <a href="#groups" className="d-block">
        Groups
      </a>
    </div>
  );
}

export default LeftSidebar;
