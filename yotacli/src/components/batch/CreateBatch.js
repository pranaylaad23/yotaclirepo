import React from 'react'
import BatchForm from './BatchForm'
import CreateHeaderItem from "./CreateHeaderItem"
import Card from '../../ui/card/Card'

const CreateBatch = () => {
  return (
    <div className="justify-content-centre ">
      <Card>
        <CreateHeaderItem />
        <hr />
        <BatchForm />
      </Card>
     
    </div>
  )
}

export default CreateBatch
