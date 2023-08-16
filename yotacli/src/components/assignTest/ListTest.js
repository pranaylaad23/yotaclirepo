import React from 'react';
import HeaderItem from './HeaderItem';
import TestList from './TestList';
import Card from '../../ui/card/Card';
import Pagination from '../../ui/pagination/Pagination';
const ListTest = () => {
    return (
        <div className="justify-content-centre ">
      <Card>
        <HeaderItem />
        <hr />
        <TestList />
      </Card>
      <Pagination />
    </div>
    );
};

export default ListTest;