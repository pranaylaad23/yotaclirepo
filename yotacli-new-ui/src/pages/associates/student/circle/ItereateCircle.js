import Circle from "./Circle ";

function ItereateCircle() {
    const attempted = [true, false, true, false, true, false, true, false, true, false, 
        , false, true,true, false, true, false, true, false, true]; // Example attempted states

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>
                        {attempted.map((isAttempted, index) => (
                            <Circle key={index} index={index} isAttempted={isAttempted} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ItereateCircle;