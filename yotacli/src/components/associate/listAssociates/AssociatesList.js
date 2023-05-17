import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteAssociate } from '../../../redux/features/associate/DeleteAssociateSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const AssociatesList = (props) => {
    
    const [associates, setAssociates] = useState([]);
    const dispatch = useDispatch(associates);
    let count = 1;

    useEffect(() => {
        axios.get("http://localhost:9090/yota/api/associates/all").then((res) => {
            console.log(res.data);
            setAssociates(res.data);
        });
    }, []);

    return (
        <>
            {associates.map((associate, key) => (
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