import React from 'react';
import AssociateItem from './AssociateItem';
import Card from '../../ui/card/Card';
import HeaderItem from './HeaderItem';

const ListAssociate = () => {
  return (
    <div className='col-12 justify-content-centre'> 
      <Card>
        <HeaderItem/><hr/>
        <AssociateItem />
      </Card>
    </div>
  )
}

export default ListAssociate;