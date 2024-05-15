import styles from "../test/Test.module.css";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";

export const BasicInfo = ({ nextScreen }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        nextScreen("screen2")
    }

    return (
        <div>
            <Card className={styles["container"]}>
                <form onSubmit={handleSubmit}>
                    <h6>Basic Info</h6>
                    <div className="form-group mt-1">
                        <label className={styles["form-test-label1"]}>Test Title</label>
                        <Form.Control size="sm" type="text" placeholder="Add title"
                            name="testName" />
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <label
                                htmlFor="inputEmail4"
                                className={styles["form-test-label"]}
                            >
                                Description
                            </label>
                            <textarea
                                type="description"
                                name="description"
                                className="form-control mt-1"
                                placeholder="Description"
                            />
                        </div>
                        <div className="col-md-6">
                            <label
                                htmlFor="inputdescription4"
                                className={styles["form-test-label"]}
                            >
                                Instruction
                            </label>
                            <textarea
                                type="instruction"
                                name="instruction"
                                className="form-control mt-1"
                                placeholder="Instruction"
                            />
                        </div>
                    </div>
                    <div className={styles["test-btn"]}>
                        <Button
                            type="submit"
                            variant="primary"
                            size="sm">
                            Next..
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}