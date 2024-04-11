import { useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "../../common/button/Button";
import CancelButton from "../../common/button/CancelButton";
import { editTechnology } from "../../../features/redux/technology/technologyAction";

export const EditTechnology = ({ setShowModal, formDetail }) => {
  const nameRef = useRef(null);
  const dispatch = useDispatch();

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const formData = {
      name: nameRef.current.value,
      technologyId: formDetail.id,
    };
    dispatch(editTechnology(formData));
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <div className="form-group row">
          <label htmlFor="inputName" className="col-sm-4">
            Technology Name
          </label>
          <div className="col-sm-8">
            <input
              name="name"
              ref={nameRef}
              type="text"
              defaultValue={formDetail.name}
              className="mb-2 form-control-sm form-control"
            />
          </div>
        </div>
        <div className="d-flex p-2 justify-content-between">
          <div className="Add-button">
            <Button type="submit">Edit</Button>
          </div>

          <div className="Tech-button">
            <CancelButton
              type="reset"
              className="cancel"
              onClick={handleCancel}
            >
              Cancel
            </CancelButton>
          </div>
        </div>
      </form>
    </div>
  );
};
