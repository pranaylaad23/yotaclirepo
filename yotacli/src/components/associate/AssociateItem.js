
import React, { useEffect, useState } from "react";
import classes from "../associate/AssociateItem.module.css";
import axios from "axios";

const AssociateItem = () => {
  const [associate, setAssociate] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/yota/api/associates/all").then((res) => {
      console.log(res.data);
      setAssociate(res.data);
    });
  }, []);

  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
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
          {associate.map((associate, key) => (
            <tr key={key}>
              <td>
                <b>{associate.id}</b>
              </td>
              <td>
                {associate.firstName}&nbsp;&nbsp;
                {associate.lastName}
              </td>
              <td>{associate.technologyName}</td>
              <td>{associate.emailId}</td>
              <td>
                <i className="fa fa-edit"></i>&nbsp;&nbsp;
                <i className="fa fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssociateItem;

