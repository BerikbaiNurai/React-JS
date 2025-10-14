import React from "react";
import "./ProfileCard.css";

function ProfileCard ({name, email, avatar}) {
    return(
        <div className="profilecard">
            <img src={avatar} alt={name} className="avatar" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default ProfileCard;