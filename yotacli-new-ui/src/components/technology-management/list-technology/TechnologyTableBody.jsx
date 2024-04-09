import { useDispatch } from "react-redux";
import { deleteTechnology, fetchTechnologyById } from "../../../features/redux/technology/technologyAction";

export const TechnologyTableBody = ({ techList, sorting, setShowModal, setEditAdd, setFormDetail}) => {
  const dispatch = useDispatch();

  const handleDeleteTechnology = (technologyId) => {
    dispatch(deleteTechnology(technologyId));
  };

  const handleEdit = async (technologyId) =>{
    const response = await dispatch(fetchTechnologyById(technologyId));
    const data = await response.payload;
    setFormDetail(data);
  } 

  return (
    <div>
      {techList.length == 0 ? (
        <b className="text-secondary">No technologies found.</b>
      ) : (
        <table
          className="mb-0 table table-bordered table-striped"
          style={{ marginTop: "-2%" }}
        >
          <thead>
            <tr>
              <th className="table-columns" onClick={() => sorting("id")}>
                # ⇅
              </th>
              <th className="table-columns" onClick={() => sorting("name")}>
                Technology Name ⇅
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {techList.map((d,index) => (
              <tr className="table-rows" key={d.id}>
                <td>{index+1}</td>
                <td>{d.name}</td>
                <td>
                  <i
                    className="fa-solid fa-trash text-danger"
                    id="icons"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteTechnology(d.id)}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <i
                    className="fa-solid fa-pen-to-square text-primary"
                    id="icons"
                    onClick={() => {setEditAdd("Edit"); setShowModal(true); handleEdit(d.id)}}
                  />     
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
