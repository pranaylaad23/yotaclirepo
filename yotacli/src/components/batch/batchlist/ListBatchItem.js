import classes from "../batchlist/ListBatchItem.module.css";

import BatchList from "./BatchList";

const ListBatchItem = (props) => {
  return (
    <div className={`table-responsive ${classes.table}`}>
      <table className="table table-bordered table-hover" style={{fontSize:"small"}}>
        <thead>
          <tr>
            {/* <th>Sr.</th> */}
            <th>Identifier</th>
            <th>Name</th>
            <th>Description</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <BatchList />
        </tbody>
      </table>
    </div>
  );
};

export default ListBatchItem;
