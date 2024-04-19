import React from "react";
import List from "../component/listcom/list";
import Navbar from "../component/HomePage-Component/Navbar";
import CardList from "../component/listcom/cardlist";

const list = () => {
  return (
    <div>
      <Navbar />
      <div className="mar">
        <List />
      </div>
    </div>
  );
};

export default list;
