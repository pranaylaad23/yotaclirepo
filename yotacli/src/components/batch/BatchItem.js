import React, { useState } from 'react'
import classes from "../batch/BatchItem.module.css"



const BatchItem = (props) => {

    const [batch, setBatch] = useState();

    return (

        <div className={classes.table}>

            <table className='table table-bordered table-responsive-xs-sm-md-xl table-over'>
                <thead>
                    <tr>
                        <th>Identifier</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {batch.map((list, key) => (
                        <tr key={key}>
                            <td>{list.batchIdentifier}</td>
                            <td>{list.batchName}</td>
                            <td>{list.batchDescription}</td>
                            <td>{list.startDate.toLocaleDateString()}</td>
                            <td>{list.endDate.toLocaleDateString()}</td>
                            <td>{list.createdAt.toLocaleDateString()}</td>
                            <td>{list.updatedAt.toLocaleDateString()}</td>
                            <td><i className="fa fa-edit" ></i>&nbsp;                                                      {/* onClick={(event) => handleEditClick(event, list)} */}
                                <i className='fa fa-trash-can'></i>                                                         {/* onClick={() => handleDeleteClick(tech.id)} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );
}

export default BatchItem;
