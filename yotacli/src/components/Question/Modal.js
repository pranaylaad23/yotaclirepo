import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import React from 'react'

const Modal = () => {
    return (
        <Modal show={showModal} onHide={closeModal}>
<Modal.Header closeButton>
<Modal.Title>Delete Question</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>Are you sure you want to delete these Records?</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={closeModal}>
Close
</Button>
<Button style={{ backgroundColor: "#144358" }} onClick={closeModal}>
Delete
</Button>
</Modal.Footer>
</Modal>
  )
}

export default Modal;