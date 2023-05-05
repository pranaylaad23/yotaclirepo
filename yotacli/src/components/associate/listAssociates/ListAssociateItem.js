
import React, { useEffect, useState } from "react";
import classes from "./ListAssociateItem.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAssociate } from "../../../redux/features/associate/DeleteAssociateSlice";

const ListAssociateItem = () => {
  const [associate, setAssociate] = useState([]);
  const dispatch = useDispatch(associate);
  let count=1;

  useEffect(() => {
    axios.get("http://localhost:9090/yota/api/associates/all").then((res) => {
      console.log(res.data);
      setAssociate(res.data);
    });
  }, []);

  return (

    <form >
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
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default ListAssociateItem;

