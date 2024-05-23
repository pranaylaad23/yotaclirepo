import styles from "../test/Test.module.css";
import Card from "../../components/Card/Card";
import Button from "react-bootstrap/esm/Button";

export const AddQuestion = () => {
    return (
        <div>
            <Card className={styles["container"]}>
                <div>
                    <h6 className={styles["form-title"]}>Add Questions</h6>
                    <Button type="submit"
                        variant="primary"
                        size="sm">
                        Add From Library
                    </Button>
                    &nbsp;
                    <Button type="submit"
                        variant="primary"
                        size="sm">
                        Upload
                    </Button>
                </div>
            </Card>
        </div>
    )
}