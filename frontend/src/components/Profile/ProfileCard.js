import React from "react";
import profilePic from "../../assets/images/user-1.jpg";

function ProfileCard() {
  return (
    <>
      <div className="profile-card bg-light p-3 mt-4">
        <img src={profilePic} alt="user" className="profile-photo" />
        <h5 className="mt-4">
          <a href="timeline.html" className="">
            Sarah Cruiz
          </a>
        </h5>
        <a href="test.com" className="">
          <i className="ion ion-android-person-add"></i> 1,299 followers
        </a>
      </div>
    </>
  );
}

export default ProfileCard;
