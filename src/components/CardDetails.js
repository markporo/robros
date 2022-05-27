import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom"
import axios from 'axios';

export default function CardDetails() {
const [details, setDetails] = useState(null);
let {id} = useParams();
let navigate = useNavigate();

useEffect(() => {
  axios
  .get(`https://jsonplaceholder.typicode.com/users/${id}`)  // the key is the user's id from the card
  .then(res => {
    setDetails(res.data)  
  })
  .catch(error => {
    console.error(error);
  });
}, [id])

  if (details === null) {return <div>Loading...</div>};

  const {name, email, phone, website, username } = details;
  console.log(name, "details from get request details")

    return (
      <div>
      <div className="flex flex-col justify-around -mt-10 mb-2">
        <img src={`https://robohash.org/${name}`} alt="avatar" className="w-96 self-center" />
        <div className="text-primaryWhite p-8 text-center text-m bg-primaryBlue border-2 w-1/3  min-w-[350px] rounded-lg shadow-inner self-center">
          <h1 className='text-2xl m-5'>{name}</h1>
          <p>{username}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
        </div>
      </div>
      <div onClick={(() => {navigate('/')})} className="flex justify-end p-0 z-20">
          <nav className="mr-10 text-xl text-primaryBlue bg-primaryYellow border-2 py-2 rounded-xl w-36">
          Go Back
          </nav>
      </div>
     </div>
    )
  }