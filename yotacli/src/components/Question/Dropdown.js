import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: "#144358" }}>
            <i className="fa-solid fa-bars"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="expand">
              Expand All Answers
            </Dropdown.Item>
            <Dropdown.Item href="collapse">
              Collapse All Answers
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Dropdown
