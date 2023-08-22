
import classes from "./Pagination.module.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({dataPerPage, setCurrentPage, currentPage, toggleRecord}) => {
  // const [dataPerPage, setDataPerPage] = useState(5); //Pagination
  const technology = useSelector((state) => state.technology);
  const technologyTestNumber = useSelector((state) => state.technology.testNumberArray);

  // For Search Technology
  const totalData = technology.searchTech.length;
  console.log("total Data:",totalData);

  // For Record Data Technology
  const totalTestData = technologyTestNumber.length;
  console.log("totalTestData",totalTestData);

  // For Search Technology
  let totalSearchData;
  if(totalData !== 0){
    totalSearchData = technology.searchTech[0].length;
    console.log("total Search Data:",totalSearchData);
  }
  
  // For Record Data Technology
  let totalTestPageData;
  if(totalTestData!==0){
    totalTestPageData = technologyTestNumber[0].length;
    console.log("totalTestPageData:",totalTestPageData);
  }

  console.log("dataPerPage:",dataPerPage);
  
  let pages = [];

  // For Search Technology
  if(totalSearchData !== undefined){
    pages = []
    console.log("IN total Search Data", pages);
    console.log("totalSearchData/dataPerPage:",totalSearchData/dataPerPage);
    for (let i = 1; i <= Math.ceil(totalSearchData/dataPerPage); i++){
      pages.push(i);
    }
  }else{
    pages = []
    console.log("IN Normal Data", pages);
    console.log("totalData/dataPerPage:",totalData/dataPerPage);
    for (let i = 1; i <= Math.ceil(totalData/dataPerPage); i++){
      pages.push(i);
    }
  }
  console.log("pages:",pages.length);

// For Record Data Technology
if (toggleRecord){
  if(totalTestPageData > 0){
    pages = []
    console.log("IN total test Data per page", pages);
    console.log("totalTestPageData/dataPerPage:",totalTestPageData/dataPerPage);
    for (let i = 1; i <= Math.ceil(totalTestPageData/dataPerPage); i++){
      pages.push(i);
    }
  }
}

  const previousPage = () => {
    if (currentPage !== 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage !== pages.length){
      setCurrentPage(currentPage + 1);
    }
  }


  return (
    <div className={classes.pagination}>

      <div className="row justify-content-center">
        <div className="col-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination">

              <li className="page-item">
                <button className="page-link" onClick={previousPage}>
                  <span aria-hidden="true">&laquo;</span>
                  {/* <span className="sr-only">Previous</span> */}
                </button>
              </li>

              {/* <li className="page-item"><a className="page-link" href='#'>1</a></li>
              <li className="page-item"><a className="page-link" href='#'>2</a></li>
              <li className="page-item"><a className="page-link" href='#'>3</a></li> */}
              {pages.map((page, index)=>{
                  return <button className="page-link" onClick={() => setCurrentPage(page)} key={index} style={{background: page==currentPage ? "grey": "white", 
                  color: page==currentPage ? "white": "blue"}}>{page}</button>
                })}

              <li className="page-item">
                <button className="page-link" onClick={nextPage}>
                  <span aria-hidden="true">&raquo;</span>
                  {/* <span className="sr-only">Next</span> */}
                </button>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      {/* {props.children} */}
      </div>
  )
}

export default Pagination

