

import React, { useEffect, useState } from 'react'
import classes from "../batch/BatchItem.module.css"
import axios from 'axios';




const BatchItem = (props) => {

  const [batch, setBatch] = useState([]);

  // const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:9090/yota/api/batches/").then((res) => {
      console.log(res.data);
      setBatch(res.data);
    });
  }, []);

  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
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
          {batch.map((result, key) => (
            <tr key={key}>
              <td>{result.batchIdentifier}</td>
              <td>{result.batchName}</td>
              <td>{result.batchDescription}</td>
              <td>{result.startDate}</td>
              <td>{result.endDate}</td>
              <td>{result.createdAt}</td>
              <td>{result.updatedAt}</td>
              <td>
                <i className="fa fa-edit"></i>&nbsp;{" "}
                {/* onClick={(event) => handleEditClick(event, list)} */}
                <i className="fa fa-trash-can"></i>{" "}
                {/* onClick={() => handleDeleteClick(tech.id)} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default BatchItem;
