import React from "react";

function Card({ imageUrl, name, description, id, onClickFunction, onDelete }) {
  return (
    <li>
      <div className="profile-card" onClick={() => onClickFunction(id)}>
        <div className="profile-img">
          <img src={imageUrl} alt="User" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-description">{description}</p>
        </div>
        <div
          className="delete-icon button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          Delete
        </div>
      </div>
    </li>
  );
}

export default Card;
