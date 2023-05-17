import React from 'react'
import BatchForm from './BatchForm'
import Card from '../../../ui/card/Card'
import classes from "../createbatch/Createbatch.module.css";

const CreateBatch = () => {
  return (
    <div className={`justify-content-centre ${classes.card}`}>
      <Card>
        <BatchForm />
      </Card>
     
    </div>
  )
}

export default CreateBatch
