import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import classes from "../batchlist/ListBatchItem.module.css";
import { fetchBatch,handleSearchBatch } from "../../../redux/features/batch/batchListSlice";
import { batchDelete } from "../../../redux/features/batch/deleteBatchSlice";

const BatchList = ({currentPage,dataPerPage}) => {
  const dispatch = useDispatch();
  const batch = useSelector((state) => state.batch);
  console.log("searchTech array to search Batch:", batch.searchBatch);
  console.log("Original Array List:", batch.batches);

  useEffect(() => {
    dispatch(fetchBatch());
  }, []);
  
  //Pagination
  console.log("currentPage:", currentPage);
  const lastDataIndex =  currentPage * dataPerPage;
  const firstDataIndex =  lastDataIndex - dataPerPage;

  //Loading Data
  if (batch.loading) {
    console.log("Loading...");
    return (
      <tr>
        <td></td>
        <td>
          <h5>Loading Batch Details....</h5>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  //Search Data not found
  if (batch.searchBatch.length !== 0) {
    console.log("batch.searchBatch.length !== 0");

    if (batch.searchBatch[0].length === 0) {
      return (
        <tr>
          <td></td>
          <td>
            <h3>Search Not found</h3>
          </td>
          <td></td>
          <td></td>
        </tr>
      );
    }
    //Search Data Found
    if(batch.searchBatch[0].length > 0){
      console.log("batch.searchBatch[0].length > 0");

      const searchPaginatedSlice =  batch.searchBatch[0];
      console.log("searchPaginatedSlice:", searchPaginatedSlice);

      console.log("firstDataIndex:", firstDataIndex);
      console.log("lastDataIndex:", lastDataIndex);

      const searchPaginatedData =  searchPaginatedSlice.slice(firstDataIndex,lastDataIndex);
      console.log("searchPaginatedData to show:", searchPaginatedData);

      return (
        searchPaginatedData.map((result, key) => (
          <tr key={key}>
            {/* <td>{result.id}</td> */}
            <td>{result.batchIdentifier}</td>
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
        ))
      );
    }
  }
};

export default BatchList;
