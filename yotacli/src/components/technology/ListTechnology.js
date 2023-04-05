import React from 'react'
import Card from '../../ui/card/Card';
import Pagination from '../../ui/pagination/Pagination';
import HeaderItem from '../../components/technology/HeaderItem';
import TechnologyItem from './TechnologyItem';

const ListTechnology = () => {
  return (

      <div className='col-12' >
        <Card>
          <HeaderItem />
          <hr />
          <TechnologyItem />
          <Pagination/>
        </Card>
      </div>
  )
}

export default ListTechnology;