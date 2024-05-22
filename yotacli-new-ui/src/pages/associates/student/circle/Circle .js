import React from 'react';
import style from './student.css';

const Circle = ({ index, isAttempted }) => {

    return (
        <div className="outer-circle">
            <div className="circle" style={{ background: isAttempted ? '#d1e7dd' : '#f8d7da' }}>
                <div className="number">{index + 1}</div>
            </div>
        </div>
    );
};

export default Circle;
