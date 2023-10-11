import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  fetchClient } from '../../../redux/features/client/CreateClientSlice';
import { Link } from 'react-router-dom';


const ClientsList = () => {
  const client = useSelector((state) => state.clients.clients);
  console.log("client"+client);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchClient());
  }, []);
  return (


    <>
            {client.map((client, key) => (
                <tr key={key}>
                    
                    <td>
                        {client.clientId}&nbsp;&nbsp;
                        
                    </td>
                    <td>{client.clientName}</td>
                    <td>{client.shortDescription}</td>
                    <td>
                       <i className="fa fa-edit" title='Edit'></i>&nbsp;&nbsp;
                            <i className="fa fa-trash-can" title='Delete'>
                            </i> &nbsp;&nbsp;
                            <Link to={`/viewQuestion`}>
                                
                                <i className="fa fa-eye" title="View"></i>
                                
                            </Link>

                
                    </td>
                </tr>
            ))}
        </>
  )
};

export default ClientsList
