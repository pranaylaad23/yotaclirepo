import { React, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const Timer = (props) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    //const deadline = "December, 31, 2022";

    const deadline = new Date(Date.now() + parseInt(props.paperTime) * 60 * 1000); // Add 30 minutes to current time
    let sign;
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        sign = Math.sign(time);
        if (sign === -1) {
            setIsRunning(false);
            clearInterval(null);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };  
    let interval;
    useEffect(() => {
        interval = setInterval(() => getTime(deadline), 1000);
        console.log('empty use effect.....', interval)
        setIsRunning(true); 
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => getTime(deadline), 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);
    return (
        <div className="container text-start">
            <div className="row">
                <div className="col">
                    <Card >
                        <Card.Header>Timer</Card.Header>
                        <Card.Body>
                            <div className="timer" role="timer">
                                <div className="timer">
                                    <span id="hour">{ }</span>
                                    <span className="text"> Time Left: </span>
                                    <span id="hour">{hours < 10 ? "0" + hours : hours}</span>
                                    <span className="text"> Hrs </span>
                                    <span id="minute">{minutes < 10 ? "0" + minutes : minutes}</span>
                                    <span className="text"> Min </span>
                                    <span id="second">{seconds < 10 ? "0" + seconds : seconds}</span>
                                    <span className="text"> Sec</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};


export default Timer;