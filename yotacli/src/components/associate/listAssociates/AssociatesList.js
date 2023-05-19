import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteAssociate } from '../../../redux/features/associate/DeleteAssociateSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssociate } from '../../../redux/features/associate/ListAssociateSlice';

const AssociatesList = (props) => {

    let count = 1;
    
    const dispatch = useDispatch();
    const associate = useSelector((state) => state.associate);
    useEffect(() => {
        dispatch(fetchAssociate());
    }, []);

    return (
        <>
            {associate.associates.map((associate, key) => (
                <tr key={key}>
                    <td><b>{count++}
                    </b></td>
                    <td>
                        {associate.firstName}&nbsp;&nbsp;
                        {associate.lastName}
                    </td>
                    <td>{associate.technologyName}</td>
                    <td>{associate.emailId}</td>
                    <td>
                        <Link to={`/updateAssociate/${associate.id}`}><i className="fa fa-edit"></i></Link>&nbsp;&nbsp;
                        <Link to={`/deleteAssociate/${associate.id}`}
                            onClick={() => dispatch(deleteAssociate(associate.id))}>
                            <i className="fa fa-trash-can">
                            </i></Link>
                    </td>
                </tr>
            ))}
        </>
    )
};

export default AssociatesList;