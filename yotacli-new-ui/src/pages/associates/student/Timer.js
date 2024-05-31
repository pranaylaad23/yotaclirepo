import { useRef } from "react";
import { React, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Timer = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [open, setOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const timerIdref = useRef();
  const navigate = useNavigate();


  useEffect(() => {
    setMinutes(props.totaltime);
  }, [props.totaltime]);

  useEffect(() => {
    timerIdref.current = setInterval(() => {
      setMinutes((state) => state - 1);
    }, 60000);
    setIsRunning(true);
  }, []);

  if (minutes < 0) {
    setIsRunning(false);
    setMinutes(0);
    setOpen(true);
  }

  //const deadline = "December, 31, 2022";

  // const deadline = new Date(Date.now() + parseInt(props.paperTime) * 60 * 1000); // Add 30 minutes to current time
  // let sign;
  // const getTime = () => {
  //     const time = Date.parse(deadline) - Date.now();
  //     sign = Math.sign(time);
  //     if (sign === -1) {
  //         setIsRunning(false);
  //         clearInterval(null);
  //     } else {
  //         setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //         setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //         setMinutes(Math.floor((time / 1000 / 60) % 60));
  //         setSeconds(Math.floor((time / 1000) % 60));
  //     }
  // };
  // let interval;
  // useEffect(() => {
  //     interval = setInterval(() => getTime(deadline), 1000);
  //     console.log('empty use effect.....', interval)
  //     setIsRunning(true);
  //     return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //     let interval;
  //     if (isRunning) {
  //         interval = setInterval(() => getTime(deadline), 1000);
  //     }
  //     return () => clearInterval(interval);
  // }, [isRunning]);

  return (
    <>
      <div className="container text-start">
        <div className="row">
          <div className="col">
            <Card>
              <Card.Header>Timer</Card.Header>
              <Card.Body>
                <div className="timer" role="timer">
                  <div className="timer">
                    <span id="hour">{}</span>
                    <span className="text"> Time Left: </span>
                    <span id="hour">{hours < 10 ? "0" + hours : hours}</span>
                    <span className="text"> Hrs </span>
                    <span id="minute">{isRunning ? "0" + minutes : "00"}</span>
                    <span className="text"> Min </span>
                    <span id="second">
                      {seconds < 10 ? "0" + seconds : seconds}
                    </span>
                    <span className="text"> Sec</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Exam is over !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mr-4">
          <div>
           <h5>Thank you Times up!</h5>
          </div>
          <button
            className="submitt-button btn btn-success"
            type="submit"
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}
          >
            <Link className="nav-link" to="/myTest">
              Submit
            </Link>
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Timer;
