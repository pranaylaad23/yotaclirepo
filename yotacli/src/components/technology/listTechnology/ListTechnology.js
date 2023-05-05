import React from "react";
import Card from "../../../ui/card/Card";
import Pagination from "../../../ui/pagination/Pagination";

import ListTechnologyItem from "./ListTechnologyItem";
import HeaderItem from "./HeaderItem";

const ListTechnology = () => {
  return (
    <div className="col-12">
      <Card>
        <HeaderItem />
        <hr />
        <ListTechnologyItem />
      </Card>
      <Pagination />
    </div>
  );
};

export default ListTechnology;
