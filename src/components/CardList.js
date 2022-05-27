import React from "react";
import Card from "./Card";


function CardList({friends}) {
  
    return (
      <div className="flex justify-around flex-wrap">
      {friends.map((each) => (
        <Card key={each.id} id={each.id} name={each.name} phone={each.phone} email={each.email} address={each.address} />
      ))}
      </div>
    )
  
}

export default CardList;