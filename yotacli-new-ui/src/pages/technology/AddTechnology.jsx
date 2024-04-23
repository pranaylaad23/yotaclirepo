import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'react-bootstrap';
import './AddTechnology.css';
import {useDispatch, useSelector} from "react-redux";

// Import the TechnologyList component
import TechnologyList from './TechnologyList';
import {createTechnology} from "../../features/technology/technologyAction"; // Assuming the file path is correct

function AddTechnology() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const nameRef = useRef("");
    const {error} = useSelector((state) => state.technologies);

    useEffect(() => {
        if (error)
            alert(error)
    }, [error]);

    const handleSubmit = (event) => {
        console.log("Form Submitted");
        event.preventDefault();
        let technologyPayload = {
            technology: nameRef.current.value
        }
        if (technologyPayload.technology.length > 0)
            dispatch(createTechnology(JSON.stringify(technologyPayload)));
        else
            alert("Name is empty, Please provide technology name...")
        console.log("Technology Name:", technologyPayload);
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
