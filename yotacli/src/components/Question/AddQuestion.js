import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from '../../ui/button/Button';

const AddQuestion = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    
    <div id="addQuestion" className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Question"
              />
            </div>

            <div class="form-group mt-3">
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Type : </Form.Label>
                <Form.Control as="select">
                  <option value="black">mcq</option>
                  <option value="amber">t/f</option>
                </Form.Control>
              </Form.Group>{" "}
            </div>
            <div class="form-group mt-3">
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Level : </Form.Label>
                <Form.Control as="select">
                  <option value="black">easy</option>
                  <option value="amber">medium</option>
                  <option value="amber">hard</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Correct Answer"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success mt-4"
              style={{ backgroundColor: "#144358" }}
            >
              Add Question
            </button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

     
    </div>
  )
}

export default AddQuestion
