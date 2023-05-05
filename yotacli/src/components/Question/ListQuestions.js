import React from "react";

import Button from "../../ui/button/Button";
import FilterQuestion from "./FilterQuestion";
import { Card, Dropdown } from "react-bootstrap";
import HeaderItem from "./HeaderItem";
import ItemQuestion from "./ItemQuestion";

const ListQuestions = () => {
  return (
    <div>
      <br />
      {/* <Card style={{ width: "100%", marginLeft: "8%" }}> */}
      <Card className="p-4">
        <FilterQuestion />
      </Card>
      <HeaderItem />
      <div className="row">
      <Card>
        <div className="float-right col-sm-3">
        <Button>Add New Question</Button>
        </div>
        <ItemQuestion />
      </Card>

      </div>

    </div>
  );
};

export default ListQuestions;
