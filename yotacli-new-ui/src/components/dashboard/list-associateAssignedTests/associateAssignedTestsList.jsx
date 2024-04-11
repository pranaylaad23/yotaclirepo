import React, {useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./AssociateAssignedTests.module.css";
import {AssociateAssignedTestsTableBody} from "./associateAssignedTestsTableBody";
import {fetchAssociateAssignedTests} from "../../../features/redux/associateAssignedTests/associateAssignedTestsAction";

export const AssociateAssignedTestsList = () => {
    const dispatch = useDispatch();
    const {userData} = useSelector((state) => state.security);
    const searchInputRef = useRef(null);
    const rowsPerPageSelectRef = useRef(null);
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const columns = [
        {id: "id", label: "#"},
        {id: "name", label: "Test Name"},
        {id: "startDate", label: "Start date"},
        {id: "endDate", label: "End date"},
        {id: "duration", label: "Duration"},
        {id: "testStatus", label: "Test Status"},
        {id: "action", label: "Action"},
    ];

    const {associateAssignedTestsList} = useSelector(
        (state) => state.associateAssignedTests
    );

    console.log(associateAssignedTestsList);

    useEffect(() => {
        if (userData.token)
            dispatch(fetchAssociateAssignedTests());
    }, [dispatch, userData]);

    const filteredData = useMemo(() => {
        let filterData = [];
        if (associateAssignedTestsList && associateAssignedTestsList.length) {
            filterData = associateAssignedTestsList?.filter((item) =>
                Object.values(item).some((value) =>
                    value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );

            return filterData;
        }
    }, [associateAssignedTestsList, searchTerm]);

    useEffect(() => {
        setData(filteredData);
        console.log("filterData", filteredData);
    }, [filteredData]);

    const totalPages = useMemo(() => {
        let x = [];
        if (filteredData && filteredData.length) {
            x = Math.ceil(filteredData.length / rowsPerPage);
        }
        return x;
    }, [filteredData && filteredData.length > 0, rowsPerPage]);

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

    const paginatedData =
        filteredData && filteredData.length
            ? filteredData.slice(
                page * rowsPerPage,
                Math.min((page + 1) * rowsPerPage, filteredData.length)
            )
            : [];

    return (
        <div className="table-container">
            <div className="filter-section">
                <div className="show-entries">
                    <label className="filter-label" htmlFor="data-per-page">
                        Show Entries
                    </label>
                    <div className="custom-select">
                        <select
                            id="data-per-page"
                            ref={rowsPerPageSelectRef}
                            value={rowsPerPage}
                            onChange={handleDataPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                </div>
                <div className="list-search">
                    <label className="filter-label" htmlFor="data-per-page">
                        Search
                    </label>
                    <input
                        type="text"
                        placeholder=" ... "
                        value={searchTerm}
                        ref={searchInputRef}
                        onChange={handleSearch}
                        className="list-search-btn"
                    />
                </div>
            </div>

            <div className="horizontal-line"></div>

            <table className="mb-0 table table-bordered table-striped">
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.id}>{column.label}</th>
                    ))}
                </tr>
                </thead>

                <AssociateAssignedTestsTableBody
                    rows={paginatedData}
                    columns={columns}
                />
            </table>

            <div className="pagination">
                <button
                    className="page-button"
                    onClick={() => handleChangePage(page - 1)}
                    disabled={page === 0}
                >
                    Previous
                </button>
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        className={`page-button ${index === page ? "active" : ""}`}
                        onClick={() => handleChangePage(index)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="page-button"
                    onClick={() => handleChangePage(page + 1)}
                    disabled={page === totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
