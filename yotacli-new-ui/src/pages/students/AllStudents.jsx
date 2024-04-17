import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllStudents} from "../../features/students/studentAction";

export const AllStudents = () => {

    const students = useSelector((state) => state.students.students);
    const token = useSelector((state) => state.auth.userData.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token)
            dispatch(fetchAllStudents());
    }, [dispatch, token]);

    return (
        <>
            <h2>Students page</h2>
            <hr/>
            {
                students && students.map((student, index) => (
                    <div key={index}>
                        <h1>Student: {index + 1}</h1>
                        <h3>Name: {student.fullName}</h3>
                        <h3>Email: {student.emailAdd}</h3>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
};
