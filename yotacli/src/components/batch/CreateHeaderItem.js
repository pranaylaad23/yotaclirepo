import React from 'react'
import classes from "./CreateheaderItem.module.css"
import Button from '../../ui/button/Button'

const CreateHeaderItem = () => {

  //  handleOnSubmit fuction 

  const handleOnSubmit = (e) =>{
    e.preventDefault();

  }
  
    return (

        <div className="row d-flex justify-content-between">
            <div className='row mt-3'>

                <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>

                    <h5 className={classes.boxtitle}>Create Batch </h5>

                </div>


                <div className='col-6 col-lg-4'>

                    <form className="form-inline">
                        {/* <Button>
                  <div><i className='fa fa-filter' style={{ color: 'white' }}></i></div>
                </Button> */}
                        <div className="d-flex">
                            <Button type="Submit" onClick={handleOnSubmit} style={{ color: 'white' }} className={classes.btnSave}>Save</Button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )

}

export default CreateHeaderItem
