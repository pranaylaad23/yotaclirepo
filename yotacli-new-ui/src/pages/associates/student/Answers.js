import React from "react";

function Answers(props) {
    return (
        <div class="form-group form-horizontal p-2" >
                    <div class='form-check'>
                        <input type="radio" className="form-check-input" name="answer-entry" value="0" />
                        <span>List</span>
                    </div>
                    <div class='form-check'>
                        <input type="radio" className="form-check-input" name="answer-entry" value="0" />
                        <span>Set</span>
                    </div>
                    <div class='form-check'>
                        <input type="radio" className="form-check-input" name="answer-entry" value="0" />
                        <span>Map</span>
                    </div>
                    <div class='form-check'>
                        <input type="radio" className="form-check-input" name="answer-entry" value="0" />
                        <span>none</span>
                        

                    </div>
            </div>
    );
}

export default Answers;