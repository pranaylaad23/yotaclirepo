import React, { useState } from 'react'

const MyAccordian = ({ question, answer ,technology,level}) => {
    const [show, setShow] = useState(false);
    return (
      <>
    <div className="main-heading">
      
         <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
         {/* <h3>{question} </h3> */}
         <div className='sub'> <h3>{question} </h3></div>

           {/* <div className='main_button'>
        <button>{technology}</button>&nbsp;&nbsp;
        <button>{level}</button>
     </div>  */}
     </div>
     
     { show &&  <p className="answers"> {answer} </p> }
  
 </>
  )
}

export default MyAccordian
