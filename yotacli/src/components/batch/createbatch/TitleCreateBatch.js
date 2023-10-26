import React from 'react'
import CreateBatch from './CreateBatch'
import classes from "../../dashboard/TitleDashboard.module.css"

const TitleCreateBatch = () => {
  return (
    <>
    {/* <!--dashbord--> */}
    <div className="container-fluid">
      <div className={`row ${classes.back}`}>
        <div className="col">
          <h5 className={classes.title}>Batch Management</h5>
        </div>
      </div>
      <CreateBatch />
    </div>
  </>
  )
}

export default TitleCreateBatch
