import React from 'react'
import Card from '../../../ui/card/Card';
import UpdateAssociateForm from './UpdateAssociateForm';
import classes from './UpdateAssociate.module.css';

const UpdateAssociate = () => {
    return (
        <div className={classes.card}>
            <Card>
                <UpdateAssociateForm />
            </Card>
        </div>
    )
}

export default UpdateAssociate;