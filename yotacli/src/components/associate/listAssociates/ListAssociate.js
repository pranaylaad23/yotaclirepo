import React from 'react';
import ListAssociateItem from './ListAssociateItem';
import Card from '../../../ui/card/Card';
import HeaderItem from './HeaderItem';
import Pagination from "../../../ui/pagination/Pagination"


const ListAssociate = () => {
  return (
    <div className='col-12 justify-content-centre'> 
      <Card>
        <HeaderItem/><hr/>
        <ListAssociateItem />
      </Card>
      <Pagination/>
    </div>
  )
}

export default ListAssociate;