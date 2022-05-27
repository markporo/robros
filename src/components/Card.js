import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({name, address, phone, email, id}) => {
    let navigate = useNavigate();

    return (
    <div onClick={() => {navigate(`details/${id}`)}} className="bg-primaryBlue border-2 w-auto rounded-lg m-5 h-48 shadow-inner p-5 hover:scale-[1.03] transition-all flex flex-nowrap justify-evenly flex-initial flex-row">
      <img src={`https://robohash.org/${name}`} alt="avatar" className="w-36" />
      <div className="text-primaryWhite p-5 w-52 text-center text-xs">
        <h1 className='text-xl m-5'>{name}</h1>
      </div>
    </div>
    );
}

export default Card;
