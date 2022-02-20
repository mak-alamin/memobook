import React from "react";
import profilePic from "../../assets/images/user-1.jpg";

function ProfileCard() {
  return (
    <>
      <div className="profile-card relative bg-primary">
        <img
          src={profilePic}
          alt="user"
          className="profile-photo absolute top--25"
        />
        <h5 className="mt-4">
          <a href="timeline.html" className="text-light">
            Sarah Cruiz
          </a>
        </h5>
        <a href="test.com" className="text-light">
          <i className="ion ion-android-person-add"></i> 1,299 followers
        </a>
      </div>
    </>
  );
}

export default ProfileCard;
