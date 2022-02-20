import React from "react";
import LeftNav from "../../components/Navigation/LeftNav";
import ProfileCard from "../../components/Profile/ProfileCard";

function LeftSidebar() {
  return (
    <div className="left-sidebar bg-light">
      <ProfileCard />
      <LeftNav />
    </div>
  );
}

export default LeftSidebar;
