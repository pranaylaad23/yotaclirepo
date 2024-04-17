import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllTrainers} from "../../features/trainers/trainerAction";

export const AllTrainers = () => {
    const trainers = useSelector((state) => state.trainers.trainers);
    const token = useSelector((state) => state.auth.userData.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token)
            dispatch(fetchAllTrainers());
    }, [dispatch, token]);

    return (
        <>
            <h2>Trainers page</h2>
            <hr/>
            {
                trainers && trainers.map((trainer, index) => (
                    <div key={index}>
                        <h1>Trainer: {index + 1}</h1>
                        <h3>Name: {trainer.fullName}</h3>
                        <h3>Email: {trainer.emailAdd}</h3>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
};
