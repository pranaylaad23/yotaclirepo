import React from 'react';

const QuestionElement = (props)=>{
    var databstarget = "#"+props.id;
    return (
       <React.Fragment>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <div>
                    <div class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={databstarget} aria-expanded="true" aria-controls={props.id}>
                        {props.question}
                    </div>
                </div>
            </h2>
            <div id={props.id} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-md-10"/>
                        <div class="col-md-2 justify-content-end input-group">
                            <a href="#"><i class="fa-solid fa-pen-to-square fa-lg"></i></a>__
                            <a href="#"><i class="fa-solid fa-trash-can fa-lg"></i></a>
                        </div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled1"
                            checked={props.correctAnswer==="option1"}/>
                        <label class="form-check-label" for="flexCheckDisabled1">
                            {props.option1}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled2"
                            checked={props.correctAnswer==="option2"}/>
                        <label class="form-check-label" for="flexCheckDisabled2">
                            {props.option2}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled3"
                            checked={props.correctAnswer==="option3"}/>
                        <label class="form-check-label" for="flexCheckDisabled3">
                            {props.option3}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled4" 
                            checked={props.correctAnswer==="option4"}/>
                        <label class="form-check-label" for="flexCheckDisabled4">
                            {props.option4}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div id = "seperator" style={{marginTop: "1rem"}}></div>
        </React.Fragment>
    );
}

export default QuestionElement;