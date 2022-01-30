import React from "react";
import "./User.css";

const User = (props) => {
  const { name, email, gender, image, selary } = props.users;
  const handleOnClick = props.handleOnClick;

  return (
    <div>
      <div id="user">
        <div id="image">
          <img src={image} alt="" />
        </div>
        <div id="details">
          <p>Name: {name}</p>
          <p>
            <small>Email: {email}</small>
          </p>
          <p>
            <small>Gender: {gender}</small>
          </p>
          <p>
            <small>Selary: {selary}</small>
          </p>
          <button id="btn" onClick={() => handleOnClick(props.users)}>
            ADD ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
