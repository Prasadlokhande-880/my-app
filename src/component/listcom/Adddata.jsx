// Adddata.js

import React, { useState } from "react";
import "./add.css";

const Adddata = ({ onAddCard }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [profession, setProfession] = useState("");
  const [discussProfile, setDiscussProfile] = useState("");
  const [teamsList, setTeamsList] = useState("");
  const [country, setCountry] = useState("");
  const [teamName, setTeamName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      id: Date.now().toString(),
      imageUrl,
      name,
      email,
      institution,
      profession,
      discussProfile,
      teamsList,
      country,
      teamName,
      description,
    };
    onAddCard(newCard);
    setName("");
    setEmail("");
    setInstitution("");
    setProfession("");
    setDiscussProfile("");
    setTeamsList("");
    setCountry("");
    setTeamName("");
    setImageUrl("");
    setDescription("");
  };

  return (
    <div className="addmain">
      <form onSubmit={handleSubmit}>
        <div className="flexduv">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email Address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <br />
        <div className="flexduv">
          <label>
            Institution:
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </label>
          <br />
          <label>
            Profession:
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </label>
        </div>

        <br />

        <div className="flexduv">
          <label>
            Discuss Profile:
            <input
              type="text"
              value={discussProfile}
              onChange={(e) => setDiscussProfile(e.target.value)}
            />
          </label>
          <br />
          <label>
            Teams List:
            <input
              type="text"
              value={teamsList}
              onChange={(e) => setTeamsList(e.target.value)}
            />
          </label>
        </div>

        <div className="flexduv">
          <br />
          <label>
            Country:
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <br />
          <label>
            Team Name:
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </label>
        </div>

        <div className="flexduv">
          <br />
          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adddata;
