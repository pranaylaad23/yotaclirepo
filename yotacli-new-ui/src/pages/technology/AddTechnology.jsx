import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import './AddTechnology.css';
import { useDispatch } from "react-redux";
import { createTechnology } from '../../features/technology/technologyAction';

// Import the TechnologyList component
import TechnologyList from './TechnologyList'; // Assuming the file path is correct

function AddTechnology() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const nameRef = useRef("");

  const handleSubmit = (event) => {
    console.log("Form Submitted");
    event.preventDefault();
    const technologyName = nameRef.current.value;
    dispatch(createTechnology(technologyName));
    console.log("Technology Name:", technologyName);
    nameRef.current.value = "";
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
    <div className="add-tech-container">
      {!showForm && (
        <Button onClick={() => setShowForm(true)}>Add Technology</Button>
      )}
      {showForm && (
        <form className="add-tech-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputName">Technology Name</label>
            <input
              ref={nameRef}
              name="name"
              placeholder="Enter technology name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="add-tech-buttons">
            <Button type="submit" className="add">Add</Button>
            <Button type="button" className="cancel" onClick={handleCancel}>Cancel</Button>
          </div>
        </form>
      )}
    </div>
    <TechnologyList/>
    </>
  );
}

export default AddTechnology;