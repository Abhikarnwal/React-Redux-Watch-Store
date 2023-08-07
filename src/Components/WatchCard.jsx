import React from "react";
import { Link } from "react-router-dom";

const WatchCard = ({ id, image ,name,category }) => {

  return (
    <Link to={`/watches/${id}`} >
    <div data-testid={`watch-card-wrapper-${id}`} style={{border:"5px solid black",padding:"10px"}}   >
      <div>
        <img data-testid="watch-card-image" src={image} alt={name} width={250} />
      </div>
      <div>
        <div data-testid="watch-name">{name}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div> </Link>
    
  );
};

export default WatchCard;
