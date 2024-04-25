import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AddTechnology.css';
import { useDispatch, useSelector } from 'react-redux';

// Import the TechnologyList component
import TechnologyList from './TechnologyList';
import { createTechnology } from '../../features/technology/technologyAction'; // Assuming the file path is correct

function AddTechnology() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [technologyName, setTechnologyName] = useState('');
  const {error}= useSelector((state) => state.technologies);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTechnologyName = technologyName.trim();
	if((trimmedTechnologyName.length >0)&& (error===null)){
	dispatch(createTechnology({ technology: trimmedTechnologyName }));
      setTechnologyName('');
      setOpen(false);}
   else if(trimmedTechnologyName.length === 0){
   setTechnologyName('');
        setOpen(false);
        alert('Name is empty. Please provide a technology name.');
   }else if(error){
	 alert(error);
      setTechnologyName('');
      setOpen(false);
   }
  };

  const openModal = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setTechnologyName(event.target.value);
  };
  return (
    <>
      <Button variant="primary" size="sm" style={{ marginLeft: "83%" }} onClick={openModal}>
                            Add Technology
                        </Button>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Technology
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group row mb-1 ">
              <label
                for="inputDescription"
                className="createclientdescription col-sm-4 col-form-label mt-0"
              >
                Technology Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  value={technologyName}
                  placeholder='Enter Technology'
                  className="mb-2 form-control-sm form-control mt-1"
                  onChange={handleChange} 
                ></input>
              </div>
            </div>
          </div>

          <button
            className="submitt-button btn btn-primary"
            type="submit"
           onClick={handleSubmit}
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTechnology;