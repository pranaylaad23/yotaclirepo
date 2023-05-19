import React from "react";
import Card from "../../../ui/card/Card";
import ListBatchItem from "./ListBatchItem";
import HeaderItem from "./HeaderItem";
import Pagination from "../../../ui/pagination/Pagination";

const ListBatch = () => {
  return (
    <div className="justify-content-centre ">
      <Card>
        <HeaderItem />
        <hr />
        <ListBatchItem />
      </Card>
      <Pagination />
    </div>
  );
};

export default ListBatch;
