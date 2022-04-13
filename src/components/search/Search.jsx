import React, { useState} from "react";
import { Button } from "react-bootstrap";
import Dishes from "../dishes/Dishes";

const Search = () => {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="anchor">
          <input
            type="text"
            onChange={(e) => setItem(e.target.value)}
            className="searchBar"
            placeholder="Search"
          />
          <Button variant="primary" className="col-sm-2">Ieškoti</Button>
          {item.length  && <Dishes item={item} />}
        </div>
        
      </form>
    </div>
  );
};

export default Search;
