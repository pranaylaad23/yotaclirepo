import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ListUnit.css";
import CreateUnitForm from "../add-unit/CreateUnitForm.jsx";
import "../../common/button/Button.jsx";
import Table from "react-bootstrap/Table";
import Select from "react-select";

const ListUnit = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const pageDataOptions = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 25, label: "25" },
    { value: 100, label: "100" },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <span className="heading">Unit List</span>
      <div>
        <Button className="create-unit-button" onClick={openModal}>
          Create Unit
        </Button>
        {isModalOpen && <CreateUnitForm closeModal={closeModal} />}
      </div>
      <div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <Select options={pageDataOptions} onChange="" />
          </div>
          <div className="col-md-3" />
          <div className="col-md-3 justify-content-end">
            <input class="form-control" id="" placeholder="Search..." />
          </div>
          <div className="col-md-2">
            <button type="button" class="btn btn-primary btn-1-unit search1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>BG1BU2</td>
            <td>Description1</td>
            <td>
              <i class="fa-solid fa-pen-to-square"></i>_
              <i class="fa-solid fa-trash-can"></i>_
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>BG1BU3</td>
            <td>Description2</td>
            <td>
              <i class="fa-solid fa-pen-to-square"></i>_
              <i class="fa-solid fa-trash-can"></i>_
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>BG1BU4</td>
            <td>Description3</td>
            <td>
              <i class="fa-solid fa-pen-to-square"></i>_
              <i class="fa-solid fa-trash-can"></i>_
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>BG1BU5</td>
            <td>Description4</td>
            <td>
              <i class="fa-solid fa-pen-to-square"></i>_
              <i class="fa-solid fa-trash-can"></i>_
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListUnit;
