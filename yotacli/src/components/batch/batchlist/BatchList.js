import React from 'react'
import Card from '../../../ui/card/Card';
import BatchItem from './BatchItem';
import HeaderItem from './HeaderItem';
import Pagination from '../../../ui/pagination/Pagination';



const BatchList = () => {

  return (

    <div className="justify-content-centre ">
      <Card>
        <HeaderItem />
        <hr />
        <BatchItem />
      </Card>
      <Pagination/>
    </div>
  )
}

export default BatchList;
