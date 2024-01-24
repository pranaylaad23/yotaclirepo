

import React, { useState } from 'react';
import mockdata from './mockdata.json';
import './Button';
import './listTechnology.css';


const ASC = "ASC"; 
const DSC = "DSC"; 

const ListTechnology = () => {
  const [data, setdata] = useState(mockdata); 
  const [order, setorder] = useState("ASC");   
  
  const sorting = (col) => {
    if (order === ASC) {
      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder(DSC);
    } else {
      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder(ASC);
    }

    if (order === DSC) {
      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder(ASC);
    } else {
      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder(DSC);
    }
  };

  

  return (
    <div>
      
      <div className='show-sort'>
      <label>Show Entries</label> 
      <br></br>
      <select className='sort-option'>
  <option selected>0</option>
 <option value="1">5</option>
  <option value="2">10</option>
  <option value="3">15</option>
     </select>
      
      
       <label className="Search-label">Search</label>
       <div className ="input-group">
  <input type="search" class="form-control rounded"  id="myInput"placeholder="Search" aria-label="Search" aria-describedby="search-addon"  />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>

      </div>

      
      <hr/>


     
      
      <table id="myTable" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%" >
      <thead>
      <tr>
      <th  onClick={()=>sorting("id")}># ⇅
      </th>
      <th  onClick={()=>sorting("tech_name")}>Technology Name ⇅
      </th>
      <th  onClick={()=>sorting("tech_dsc")}>Technology Description ⇅
      </th>
      <th > Action 
      </th>
      
    </tr>
  </thead>
  
  <tbody>
    { data.map((d)=>(
      <tr key={d.id}>
          <td>{d.id}</td>
          <td>{d.tech_name}</td>
          <td>{d.tech_dsc}</td>
          <td><i className="fa-solid fa-trash" id="icons">_</i>
          <i className="fa-solid fa-pen-to-square" id="icons">_</i>
          <i className="fa-solid fa-eye" id="icons"></i>
          </td>
          
      </tr>
    ))}
  </tbody>

</table>


<nav aria-label="Page navigation example"> 
<ul class="pagination justify-content-end"> 
<li class="page-item disabled"> 
<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a> 
</li> 
<li class="page-item">
  <a class="page-link" href="#">1</a>
  </li>
   <li class="page-item">
    <a class="page-link" href="#">2</a>
    </li> 
    <li class="page-item">
      <a class="page-link" href="#">3</a>
      </li> 
      <li class="page-item"> 
      <a class="page-link" href="#">Next</a> 
      </li> 
      </ul> 
      </nav>
      </div>
  );
};

export default ListTechnology;