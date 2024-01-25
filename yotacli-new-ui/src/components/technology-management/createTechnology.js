import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
 
export const CreateTechnology = () => {
    const [showModal, setShowModal] = useState(true);
    const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Unit Form created successfully");
    setShowModal(false);
   
 };
 return (
    <div>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Unit Form</Modal.Title>
        </Modal.Header>
            <Modal.Body>
               <h1>CreateTechnology</h1>
            </Modal.Body>
        </Modal>
    </div>
     );
    };
    export default CreateTechnology;








// import React from "react";
// import createTechnology from "../components/technology-management/createTechnology";
// const createTechnology = ()=> {
//     return (
//         <div>
//             <h3>Create Technology</h3>
//         </div>
//     );
// }

// export default createTechnology;