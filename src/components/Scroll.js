import React from "react";

const Scroll = ({children}) => {
  return (
    <div className='bg-primaryGrey' style={{overflowY: 'scroll', height: '550px', border: '1px solid black'}}>
      {children}
    </div>
  )
}

export default Scroll;