import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllAssociates} from "../../features/associates/associateAction";

export const AllAssociates = () => {

    const {associates} = useSelector((state) => state.associates);
    const {token} = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token)
            dispatch(fetchAllAssociates());
    }, [dispatch, token]);

    return (
        <>
            <h2>Associates List</h2>
            <hr/>
            {
                associates && associates.map((associate, index) => (
                    <div key={index}>
                        <h1>Associate: {index + 1}</h1>
                        <h3>Name: {associate.fullName}</h3>
                        <h3>Email: {associate.emailAdd}</h3>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
};
