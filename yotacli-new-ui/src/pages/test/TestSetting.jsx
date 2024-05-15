import styles from "../test/Test.module.css";
import Button from "react-bootstrap/esm/Button";
import Card from "../../components/Card/Card";

export const TestSetting = ({ nextScreen }) => {

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        nextScreen("screen3")
    }

    return (
        <div>
            <Card className={styles["container"]}>
                <form onSubmit={handleSubmit}>
                    <h6 className={styles["form-title"]}>Test Setting</h6>

                    <div className="form-group mt-3">
                        <label className={styles["form-test-label"]}>End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            className="form-control mt-1"
                            placeholder="Add title"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className={styles["form-test-label"]}>End Time</label>
                        <input
                            type="time"
                            name="endTime"
                            className="form-control mt-1"
                            placeholder="Add title"
                        />
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
        </div >
    )
}