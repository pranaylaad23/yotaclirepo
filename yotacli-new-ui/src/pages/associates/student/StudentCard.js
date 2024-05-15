import React from 'react';
import Card from 'react-bootstrap/Card';
import Answers from './Answers';


const StudentCard = ({ header, text1, text2, component }) => {
  const showMarks = component === 'Question';
  const showAnswers = component === 'Question' && <Answers />; // Concise conditional rendering
  return (
    <div className="container text-start">
      <div className="row">
        <div className="col">
          <Card >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Text >{text1} </Card.Text>
              <div>
                <div class="container text-end">
                  <div className="row">
                    <div className="col">
                      <div className="col">
                        {showMarks && <div className="col">[Marks : 1]</div>} {/* Cleaner conditional rendering */}
                      </div>
                    </div>
                  </div>
                </div>
                {showAnswers}
              </div>
              <Card.Text>
                {text2}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>

  );
}

export default StudentCard;