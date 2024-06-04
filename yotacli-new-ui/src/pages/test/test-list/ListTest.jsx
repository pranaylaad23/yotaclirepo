import { useEffect } from "react"
import Card from "../../../components/Card/Card"
import styles from '../../test/test-list/ListTest.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllTest } from "../../../features/tests/testAction";
import { SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

export const ListTest = () => {
    const { userData } = useSelector(state => state.auth);
    const { tests } = useSelector(state => state.tests);
    const dispatch = useDispatch();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    console.log(tests);

    useEffect(() => {
        if (userData.token) {
            dispatch(getAllTest())
        }
    }, []);

    return (
        <div>
            <h6>Test List</h6>
            <Card className={styles["test-list"]}>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Test Title</th>
                            <th scope="col">Total Question</th>
                            <th scope="col">Invited</th>
                            <th scope="col">Approval</th>
                            <th scope="col">ShortListed</th>
                            <th scope="col">Created On</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(tests) && tests.map((response, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{response.testTitle}</td>
                                    <td>{response.totalQuestions}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{new Date(response.createdAt).toLocaleDateString(
                                        "en-US",
                                        options
                                    )}</td>
                                    <td>
                                        {
                                            response.endDate ?
                                                new Date(response.endDate).toLocaleDateString("en-US", options)
                                                : "---"
                                        }
                                    </td>
                                    <td>
                                        <a
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <SiGithubactions style={{ cursor: 'pointer', color: "blue", fontSize: "20px" }} />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Clone Test
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Assign to training
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Assign to individual
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Edit Test
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    View Questions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/">
                                                    Extend
                                                </Link>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

