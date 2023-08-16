import React from 'react'
import classes from "../../../components/technology/recordTechnology/RecordTechDetails.module.css";
import { useParams } from 'react-router-dom';

const RecordTechDetails = () => {
    const { name } = useParams();
    console.log("UseParam name in RecordTechDetails.js", name);

  return (
    <div>
        <div className={classes.boxtitle}>
            Technology Name: { name }
        </div>
        <br/>
        <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Test Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td><i className="fa fa-edit"></i>&nbsp;{" "}</td>
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default RecordTechDetails