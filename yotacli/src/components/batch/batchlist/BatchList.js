import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import batchDelete from "../../../redux/features/batch/deleteBatchSlice";
import React, { useEffect, useState } from "react";
import classes from "../batchlist/ListBatchItem.module.css";
import { fetchBatch } from "../../../redux/features/batch/batchListSlice";

const BatchList = () => {
  const dispatch = useDispatch();
  const batch = useSelector((state) => state.batch);
  useEffect(() => {
    dispatch(fetchBatch());
  }, []);

  return (
    <>
      {batch.batches.map((result, key) => (
        <tr key={key}>
          <td>{result.id}</td>
          {/* <td>{result.batchIdentifier}</td> */}
          <td>{result.batchName}</td>
          <td>{result.batchDescription}</td>
          <td>{result.startDate}</td>
          <td>{result.endDate}</td>
          <td>{result.createdAt}</td>
          <td>{result.updatedAt}</td>
          <td>
            <Link to={`/updatebatch/${result.id}`} className={classes.link}>
              {" "}
              <i className="fa fa-edit"></i>&nbsp;{" "}
            </Link>

            <Link
              to={`/deletebatch/${result.id}`}
              onClick={() => dispatch(batchDelete(result.id))}
            >
              <i className="fa fa-trash-can"></i>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BatchList;
