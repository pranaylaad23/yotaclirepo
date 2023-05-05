import React from "react";
import Card from "../../ui/card/Card";

import HeaderItem from "../../components/technology/HeaderItem";
import TechnologyItem from "./TechnologyItem";
import Pagination from "../../ui/pagination/Pagination";

const ListTechnology = () => {
  return (
    <div className="col-12">
      <Card>
        <HeaderItem />
        <hr />
        <TechnologyItem />
      </Card>
      <Pagination />
    </div>
  );
};

export default ListTechnology;
