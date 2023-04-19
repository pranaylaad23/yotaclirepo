import React, { Component } from 'react'
import QuestionService from '../services/QuestionService';

class CreateQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            questionLevel: '',
            questionType: '',
            question: '',
            a: '',
            b: '',
            c: '',
            d: '',
            correctAnswer: ''
        }
        this.changeQuestionLevelHandler = this.changeQuestionHandler.bind(this);
        this.changeQuestionTypeHandler = this.changeQuestionTypeHandler.bind(this);
        this.saveOrUpdateQuestion = this.saveOrUpdateQuestion.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            QuestionService.getQuestionById(this.state.id).then( (res) =>{
                let question = res.data;
                this.setState({questionLevel: question.questionLevel,
                    questionType: question.questionType,
                    question : question.question,
                    a: question.a,
                    b: question.b,
                    c: question.c,
                    d: question.d,
                    correctAnswer: question.correctAnswer
                });
            });
        }        
    }
    saveOrUpdateQuestion = (e) => {
        e.preventDefault();
        let question = {questionLevel: this.state.questionLevel, questionType: this.state.questionType, question: this.state.question};
        console.log('question => ' + JSON.stringify(question));

        // step 5
        if(this.state.id === '_add'){
            QuestionService.createquestion(question).then(res =>{
                this.props.history.push('/questions');
            });
        }else{
            QuestionService.updatequestion(question, this.state.id).then( res => {
                this.props.history.push('/questions');
            });
        }
    }
    
    changeQuestionLevelHandler= (event) => {
        this.setState({questionLevel: event.target.value});
    }

    changeQuestionTypeHandler= (event) => {
        this.setState({questionType: event.target.value});
    }

    changeQuestionHandler= (event) => {
        this.setState({question: event.target.value});
    }

    changeOptionAHandler= (event) => {
        this.setState({question: event.target.value});
    }

    changeOptionBHandler= (event) => {
        this.setState({question: event.target.value});
    }

    changeOptionCHandler= (event) => {
        this.setState({question: event.target.value});
    }

    changeOptionDHandler= (event) => {
        this.setState({question: event.target.value});
    }

    changeCorrectAnswerHandler= (event) => {
        this.setState({question: event.target.value});
    }

    cancel(){
        this.props.history.push('/questions');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add question</h3>
        }else{
            return <h3 className="text-center">Update question</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Question Level: </label>
                                            <input placeholder="Question Level" name="questionLevel" className="form-control" 
                                                value={this.state.questionLevel} onChange={this.changeQuestionLevelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Question type: </label>
                                            <input placeholder="Question Type" name="questionType" className="form-control" 
                                                value={this.state.questionType} onChange={this.changeQuestionTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Question: </label>
                                            <input placeholder="Question" name="question" className="form-control" 
                                                value={this.state.question} onChange={this.changeQuestionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Option A: </label>
                                            <input placeholder="Option A" name="a" className="form-control" 
                                                value={this.state.questionType} onChange={this.changeOptionAHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Option B: </label>
                                            <input placeholder="Option B" name="b" className="form-control" 
                                                value={this.state.questionType} onChange={this.changeOptionBHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Option C: </label>
                                            <input placeholder="Option C" name="c" className="form-control" 
                                                value={this.state.questionType} onChange={this.changeOptionCHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Option D: </label>
                                            <input placeholder="Option D" name="d" className="form-control" 
                                                value={this.state.questionType} onChange={this.changeOptionDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Correct Answer: </label>
                                            <input placeholder="Correct Answer" name="questionType" className="form-control" 
                                                value={this.state.correctAnswer} onChange={this.changeCorrectAnswerHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateQuestion}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateQuestion
