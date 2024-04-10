import classes from './ExamTiming.module.css';
import {useEffect, useState} from "react";
import CircularProgress from "../circular-progress/CircularProgress";

const timer = {
    hours: 0,
    minutes: 0,
    seconds: 0
};

export const ExamTiming = (props) => {
    const {timeInMinutes} = props;
    timer.hours = ~~(timeInMinutes / 60);
    timer.minutes = ~~(timeInMinutes % 60);
    const [state, setState] = useState({...timer});
    const [totalSeconds, setTotalSeconds] = useState(timeInMinutes * 60);

    const startTimer = () => {
        if (totalSeconds > 0) {
            setTotalSeconds(prev => prev - 1);
        }
    }

    const handleTimerTimeout = () => {
        props.onTimeout();
    };

    useEffect(() => {
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds - newHours * 3600) / 60);
        const newSeconds = totalSeconds - newHours * 3600 - newMinutes * 60;

        setState({
            ...state,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds
        });

        let timerId;
        if (totalSeconds === 0) {
            clearTimeout(timerId);
            handleTimerTimeout();
        } else {
            timerId = setTimeout(startTimer, 1000);
            return () => clearTimeout(timerId);
        }

    }, [totalSeconds]);

    useEffect(() => {
        setState({
            ...state,
            parts: state.hours * 3600 + state.minutes * 60 + state
        });
        setTimeout(startTimer, 1000);


    }, []);

    return (
        <div className={classes["exam-timing"]}>
            <p className={classes["exam-timing-title"]}>Exam Timing</p>
            <CircularProgress label={"Hours"}
                              currTime={state.hours}
                              parts={timer.hours > 0 ? timer.hours : 60}
                              customFontSize={"15"}
                              customFontWeight={"bold"}
                              customStrokeColor={"#1dadd7"}/>
            <CircularProgress label={"Minutes"}
                              currTime={state.minutes}
                              parts={60}
                              customFontSize={"15"}
                              customFontWeight={"bold"}
                              customStrokeColor={"#1dadd7"}/>
            <CircularProgress label={"Seconds"}
                              currTime={state.seconds}
                              parts={60}
                              transitionDuration={state.seconds === 0 ? 0 : 1000}
                              customFontSize={"15"}
                              customFontWeight={"bold"}
                              customStrokeColor={"#1dadd7"}/>
        </div>
    )
};
