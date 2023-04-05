import React, { useState } from 'react';
import TechData from "../../components/store/TechData"
import classes from '../technology/TechnologyItem.module.css';

const TechnologyItem = () => {

    const [technology, setTechnology] = useState(TechData);

    // const handleDeleteClick = (technologyId) => {
    //     const newTechnology = [...technology];

    //     const index = technology.findIndex((technology) => technology.id === technologyId);
    //     newTechnology.splice(index, 1);

    //     setTechnology(newTechnology);
    // }


    return (
        <div className={classes.table}>
            <table className='table table-bordered table-hover table-responsive-sm-md-lg'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Name Of Technology</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {technology.map((tech, key) => (
                        <tr key={key}>
                            <td><b>{tech.id}</b></td>
                            <td>{tech.name}</td>
                            <td>{tech.shortDescription}</td>
                            <td><i className="fa fa-edit" ></i>&nbsp;                                                      {/* onClick={(event) => handleEditClick(event, list)} */}
                                <i className='fa fa-trash-can'></i>                                                         {/* onClick={() => handleDeleteClick(tech.id)} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TechnologyItem;