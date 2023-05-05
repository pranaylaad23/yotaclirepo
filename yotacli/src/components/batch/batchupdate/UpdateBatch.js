import React from 'react'
import UpdateForm from './UpdateForm'
import Card from '../../../ui/card/Card'
import classes from "../batchupdate/UpdateBatch.module.css"

const Updatebatch = () => {
    return (
        <div className={`justify-content-centre ${classes.card}`}>
            <Card>
                <UpdateForm />
            </Card>

        </div>
    )
}

export default Updatebatch
