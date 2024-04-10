import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  fetchTechCategory,
  fetchTechnologies,
  createTechCategory,
} from "../../../features/redux/technology/technologyAction";
import { useSelector, useDispatch } from "react-redux";
import "../../common/button/Button";
import "./listCategory.css";
import CancelButton from "../../common/button/CancelButton";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import Breadcrumb from "../../common/breadcrumb/breadcrumb.jsx";

export const ListCategory = ({ order, setorder }) => {
  const techCategoryList = useSelector(
    (state) => state.technology.techCategoryList
  );
  const techList = useSelector((state) => state.technology.techList);

  const createTechCategoryData = useSelector(
    (state) => state.technology.createTechCategoryData
  );

  const [settechCategoryList] = useState([]);
  const searchInputRef = useRef(null);
  const rowsPerPageSelectRef = useRef(null);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isModal, setIsModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const dispatch = useDispatch();

  const paths = [{ label: "Technology", link: "/" }, { label: "Category" }];

  const showModalRef = useRef(true);
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let selectedId = techList.findIndex((item) => {
      return item.name === selectedTech;
    });
    const formData = {
      name: nameRef.current.value,
      technologyMaster: {
        id: techList[selectedId].id,
      },
    };
    dispatch(createTechCategory(formData));
    console.log("Form Data:", formData);
    toast("Category created successfully", {
      type: "success",
    });
    // setSelectedTech(null);
    nameRef.current.value = "";
  };
  const handleCancel = () => {
    hideModal();
  };
  const hideModal = () => {
    const modals = document.getElementsByClassName("modell");
    if (modals.length > 0) {
      const modal = modals[0];
      modal.style.display = "none";
      // navigate("/Dashboard");
    }
  };

  useEffect(() => {
    dispatch(fetchTechCategory());
    dispatch(fetchTechnologies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTechCategory());
  }, [createTechCategoryData]);

  const filteredData = useMemo(() => {
    let data = techCategoryList.filter((item) =>
      Object.values(item).some((value) =>
        value?.toString()?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    );
    if (selectedValue && selectedValue != "All") {
      data = data.filter(
        (record) => record.technologyMaster.name === selectedValue
      );
    }

    return data;
  }, [techCategoryList, searchTerm, selectedValue]);

  const totalPages = useMemo(
    () => Math.ceil(filteredData.length / rowsPerPage),
    [filteredData, rowsPerPage]
  );

  const handleAddCategory = () => {
    setIsModal(true);

    // console.log("This is add category");

    // const modals = document.getElementById("modell");
    // console.log(modals);
    // if (modals.length > 0) {
    //   const modal = modals[0];
    //   console.log(modal);
    //   modal.style.display = "block";

    // navigate("/Dashboard");
  };

  const handleChangePage = (newPage) => {
    if (newPage * rowsPerPage >= filteredData.length) {
      newPage = Math.floor(filteredData.length / rowsPerPage);
    }
    setPage(newPage);
  };

  const handleSearch = () => {
    setSearchTerm(searchInputRef.current.value);
    setPage(0);
  };

  const handleDataPerPageChange = (event) => {
    const newDataPerPage = parseInt(event.target.value);
    setRowsPerPage(newDataPerPage);
    setPage(0);
  };

  const handleTechChange = (event) => {
    const newTech = event.target.value;
    setSelectedTech(newTech);
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...techCategoryList].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      settechCategoryList(sorted);
      setorder("DSC");
    } else {
      const sorted = [...techCategoryList].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      settechCategoryList(sorted);
      setorder("ASC");
    }
  };

  const handleFilterTechChange = (event) => {
    let target = event.target.value;
    setSelectedValue(target);
  };

  const renderForm = () => {
    return (
      <Modal
        id="modell"
        show={isModal}
        onHide={() => {
          setIsModal(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>
            <h6>Add Category</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group row">
              <label
                htmlFor="inputDescription"
                className="col-sm-2 d-flex align-items-center mt-0"
              >
                Technology
              </label>
              <div className="col-sm-10">
                <select
                  id="data-per-page"
                  // ref={rowsPerPageSelectRef}
                  value={selectedTech}
                  onChange={handleTechChange}
                  className="mb-2 form-control-sm form-control"
                >
                  <option selected disabled>
                    Select Technology
                  </option>

                  {techList &&
                    techList.length &&
                    techList.map((item, itemIndex) => {
                      return <option key={itemIndex}>{item.name}</option>;
                    })}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 mt-0">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  ref={nameRef}
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  className="mb-2 form-control-sm form-control"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mt-5">
              <Button style={{ borderRadius: "3px" }} type="submit">
                Save & More
              </Button>

              <CancelButton
                type="reset"
                className="cancel"
                onClick={() => {
                  setIsModal(false);
                }}
              >
                Cancel
              </CancelButton>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      <div className="show-sort">
        <Breadcrumb paths={paths} />
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ width: "200px" }}>
            <label>Show Entries</label>
            <br></br>
            <select
              id="data-per-page"
              ref={rowsPerPageSelectRef}
              value={rowsPerPage}
              className="w-100"
              style={{ height: "30px" }}
              onChange={handleDataPerPageChange}
            >
              <option selected>0</option>
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="3">15</option>
            </select>
          </div>
          <div style={{ width: "200px" }}>
            <label className="">Filter</label>
            <select
              id="data-per-page"
              // ref={rowsPerPageSelectRef}
              value={selectedTech}
              onChange={handleFilterTechChange}
              className="w-100"
              style={{ height: "30px" }}
            >
              <option selected>All</option>

              {techList &&
                techList.length &&
                techList.map((item, itemIndex) => {
                  return <option key={itemIndex}>{item.name}</option>;
                })}
            </select>
          </div>
          <div className="">
            <label className="">Search</label>
            <div>
              <input
                type="text"
                placeholder=" ..."
                value={searchTerm}
                ref={searchInputRef}
                onChange={handleSearch}
                style={{ height: "30px" }}
              />
            </div>
          </div>
          <div>
            <Button style={{ borderRadius: "3px" }} onClick={handleAddCategory}>
              Add Category
            </Button>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <table
        id="myTable"
        className="table table-striped table-bordered table-sm"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th className="table-columns" onClick={() => sorting("id")}>
              # ⇅
            </th>
            <th className="table-columns" onClick={() => sorting("name")}>
              Category Name ⇅
            </th>

            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((d, i) => (
              <tr className="table-rows" key={d.id}>
                <td>{i + 1}</td>
                <td>{d.name}</td>
                <td>
                  <i className="fa-solid fa-trash" id="icons">
                    _
                  </i>
                  <i className="fa-solid fa-pen-to-square" id="icons">
                    _
                  </i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Category available</td>
            </tr>
          )}
        </tbody>
      </table>

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
      {isModal ? renderForm() : null}
    </div>
  );
};
