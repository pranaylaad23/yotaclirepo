import React, { useState } from 'react'
import classes from '../associate/AssociateItem.module.css'

const AssociateItem = () => {

    const [associate, setAssociate] = useState();

    return (
        <div className={classes.table}>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Associate Name</th>
                        <th>Technology Name</th>
                        <th>Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {associate.map((associate,key) => (
                        <tr key={key}>
                            <td><b>{associate.id}</b></td>
                            <td>{associate.name}</td>
                            <td>{associate.technologyName}</td>
                            <td>{associate.emailId}</td>
                            <td><i className="fa fa-edit" ></i>&nbsp;&nbsp;
                                <i className="fa fa-trash-can"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AssociateItem;