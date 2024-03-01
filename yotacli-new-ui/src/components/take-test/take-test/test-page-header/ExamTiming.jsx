import './TestPageHeader.css';
import {useEffect, useState} from "react";

export const ExamTiming = (props) => {
    const timeLimit = props.timeLimit * 60;
    const [timeLeft, setTimeLeft] = useState(timeLimit);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 0) {
                    clearInterval(intervalId);
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className={"exam-timing"}>
            <p className={"exam-timing-title"}>Exam Timing</p>
            <div className="countdown-container">
                <div className="countdown-circle">
                    <div className="countdown-label">Hours</div>
                    <div className="countdown-value">{hours.toString().padStart(2, '0')}</div>
                </div>
                <div className="countdown-circle">
                    <div className="countdown-label">Minutes</div>
                    <div className="countdown-value">{minutes.toString().padStart(2, '0')}</div>
                </div>
                <div className="countdown-circle">
                    <div className="countdown-label">Seconds</div>
                    <div className="countdown-value">{seconds.toString().padStart(2, '0')}</div>
                </div>
            </div>
        </div>
    )
};
