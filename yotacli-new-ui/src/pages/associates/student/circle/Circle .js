import React from 'react';
import style from './student.css';

const Circle = ({ index, isAttempted }) => {
    // const backgroundColor = isAttempted ? 'green' : 'orange';
    return (
        <div className="outer-circle">
            <div className="circle" style={{ background: isAttempted ? 'green' : isAttempted==false? 'orange': 'white' }}>
                <div className="number">{index + 1}</div>
            </div>
        </div>
    );
};

export default Circle;
