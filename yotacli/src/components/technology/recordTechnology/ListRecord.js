import React, { useEffect } from 'react'
import classes from "../../../components/technology/recordTechnology/ListRecord.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnology, fetchTechnologyTestNumber } from "../../../redux/features/technology/CreateTechSlice";
import { Link } from "react-router-dom";

const ListRecord = ({currentPage, dataPerPage}) => {
  const dispatch = useDispatch();

  const technology = useSelector((state) => state.technology.technologies);
   useEffect(() => {
    dispatch(fetchTechnology());
  }, []);

  // Pending from backend due to Wrong JSON format
  // const technologyTestNumber = useSelector((state) => state.technology.testNumberArray);
  // console.log("original array in List Record technologyTestNumber",technologyTestNumber);

  // useEffect(() => {
  //   dispatch(fetchTechnologyTestNumber());
  // }, []);



  //Pagination
  console.log("currentPage:", currentPage);
  const lastDataIndex =  currentPage * dataPerPage;
  const firstDataIndex =  lastDataIndex - dataPerPage;

  const paginatedData =  technology.slice(firstDataIndex,lastDataIndex);
  console.log("Data per page to show:", paginatedData);


  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name Of Technology</th>
            {/* <th>Description</th> */}
            <th>Test Number</th>
          </tr>
        </thead>
        <tbody>
          
          {paginatedData.map((tech, key) => (
          <tr key={key}>
            <td>
              <b>{key + firstDataIndex + 1}</b>
            </td>
            <td>{tech.name}</td>
            {/* <td>{tech.shortDescription}</td> */}
            <td><Link to={`/recordTechDetails/${tech.name}`}>2</Link></td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>
  )
}

export default ListRecord