import React from "react";
import Button from "../../ui/button/Button";
import FilterQuestion from "./FilterQuestion";
import { Card, Dropdown } from 'react-bootstrap';
import HeaderItem from "./HeaderItem";
import ItemQuestion from "./ItemQuestion";

const ListQuestions = () => {
  return (
    <div>
      <br />
    <Card style={{width: "100%", marginLeft: "8%"}}>

    <FilterQuestion/>
    </Card>
     <HeaderItem/>
     <Card style={{width: "80%", marginLeft: "8%"}}>
      <Dropdown/>
     <Button>Add New Question</Button>
     <ItemQuestion/>
     </Card>
    </div>
  );
};

export default ListQuestions;
