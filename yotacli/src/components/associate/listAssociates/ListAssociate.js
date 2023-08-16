import React from 'react';
import ListAssociateItem from './ListAssociateItem';
import Card from '../../../ui/card/Card';
import HeaderItem from './HeaderItem';
import Pagination from "../../../ui/pagination/Pagination"
// import { Outlet } from 'react-router-dom';


const ListAssociate = () => {
  return (
    <React.Fragment>
      
    <div className='col-12 justify-content-centre'> 
      <Card>
        <HeaderItem/><hr/>
        <ListAssociateItem />
      </Card>
      <Pagination/>
      
    </div>
    {/* <Outlet/> */}
    </React.Fragment>
  )
}

export default ListAssociate;
