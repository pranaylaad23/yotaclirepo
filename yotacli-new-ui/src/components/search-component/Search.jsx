import { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Search = ({ setSearchValue }) => {
  const searchInput = useRef();

  const handleChange = () => {
    const searchValues = searchInput.current.value;
    setSearchValue(searchValues);
  };

  return (
    <div>
      <Row>
        <Col xs={5}>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search..."
            ref={searchInput}
            onChange={handleChange}
            style={{height:"1px"}}
          />
        </Col>
      </Row>
    </div>
  );
};
