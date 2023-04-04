import React from 'react'
import Button from '../../ui/button/Button';
import InputField from '../../ui/inputField/InputField';
import classes from "../../ui/card/Card.module.css";
import "./HeaderItemmodule.css";



const HeaderItem = () => {

  return (

    <div className="row d-flex justify-content-between">
      <div className='row mt-3'>

        <div className='col-xl-8 col-lg-7 col-md-6 col-sm-4'>

          <h5 className={classes.boxtitle}>Batch List

            <button className='btn-filter'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"

              fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">

              <path

                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />

            </svg>

            </button>

          </h5>

        </div>


        <div className='col-6 col-lg-4'>

          <form className="form-inline">
            {/* <Button>
              <div><i className='fa fa-filter' style={{ color: 'white' }}></i></div>
            </Button> */}
            <InputField >
              <input className="inputField" type="search" placeholder="Search keyword..." aria-label="Search" />
            </InputField>
            <Button><i className='fa fa-search' style={{ color: 'white' }}></i></Button>
          </form>

        </div>
      </div>

    </div>
  )

}

export default HeaderItem;
