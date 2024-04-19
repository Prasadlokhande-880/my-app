import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Adddata from "./Adddata";

function CardList() {
  const [initialCards, setInitialCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();
  const [adddata, displayAddData] = useState(false);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards"));
    if (storedCards) {
      setInitialCards(storedCards);
      setCards(storedCards);
    } else {
      const defaultCards = [
        {
          id: "1",
          imageUrl:
            "https://i.pinimg.com/736x/c6/e6/de/c6e6dee83f3d59320c32a0fc236fb7a8.jpg",
          name: "Jessica Parker",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
          email: "jessica@example.com",
          institution: "Example University",
          profession: "Actor",
          discussProfile: "like",
          teamsList: "Team A",
          country: "USA",
          teamName: "Team A",
        },
        {
          id: "2",
          imageUrl:
            "https://paintbynumbersforsale.com/wp-content/uploads/2020/05/Abstract-Horse-Animal-picture-by-numbers-Kits-Painting-number-picture-diy-paint-by-numbers-Living-Room.jpg_640x640_0f90ab84-6498-4941-ae84-1a589ea57813.jpg",
          name: "Kim Cattrall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
          email: "kim@example.com",
          institution: "Example University",
          profession: "Actor",
          discussProfile: "like",
          teamsList: "Team B",
          country: "USA",
          teamName: "Team B",
        },
        {
          id: "3",
          imageUrl: "https://i.imgur.com/oYiTqum.jpg",
          name: "Jessica Parker",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
          email: "jessica@example.com",
          institution: "Example University",
          profession: "Actor",
          discussProfile: "like",
          teamsList: "Team A",
          country: "USA",
          teamName: "Team A",
        },
        {
          id: "4",
          imageUrl: "https://i.imgur.com/2DhmtJ4.jpg",
          name: "Kim Cattrall",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
          email: "kim@example.com",
          institution: "Example University",
          profession: "Actor",
          discussProfile: "like",
          teamsList: "Team B",
          country: "USA",
          teamName: "Team B",
        },
      ];

      setInitialCards(defaultCards);
      setCards(defaultCards);
      localStorage.setItem("cards", JSON.stringify(defaultCards));
    }
  }, []);

  function handleSearchClick() {
    if (searchVal === "") {
      setCards(initialCards);
      return;
    }
    const filteredCards = initialCards.filter((card) =>
      card.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setCards(filteredCards);
  }

  function onClickId(id) {
    localStorage.setItem("key", id);
    navigate("/profile");
  }

  function addCard(newCard) {
    const updatedCards = [...initialCards, newCard];
    setInitialCards(updatedCards);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  }

  function deleteCard(id) {
    const updatedCards = initialCards.filter((card) => card.id !== id);
    setInitialCards(updatedCards);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  }

  const adddataButon = () => {
    displayAddData(!adddata);
  };

  return (
    <div>
      <div
        style={{ marginLeft: "600px", marginTop: "20px", fontWeight: "700" }}
      >
        <input onChange={(e) => setSearchVal(e.target.value)} />
        <button onClick={handleSearchClick}>
          <BsSearch />
        </button>
        <button onClick={adddataButon}>Add Card</button>
        <p>Note:-click on profile to open</p>
      </div>
      <ul className="cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            description={card.description}
            id={card.id}
            onClickFunction={onClickId}
            onDelete={deleteCard}
          />
        ))}
      </ul>

      <div>
        {adddata && (
          <div className="divsize">
            <p className="button" onClick={adddataButon}>
              close
            </p>
            <Adddata onAddCard={addCard} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardList;
