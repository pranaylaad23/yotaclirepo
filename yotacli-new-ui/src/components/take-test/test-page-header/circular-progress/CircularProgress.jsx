const CircularProgress = ({
                              currTime,
                              parts,
                              customText = null,
                              label = null,
                              customStrokeWidth = null,
                              customFontSize = null,
                              customFontWeight = null,
                              customTextColor = null,
                              customStrokeColor = null,
                              customStrokeCircleColor = null,
                              transitionDuration = 1000
                          }) => {
    // defaultProperties
    const width = 80;
    const height = 80;
    const radius = (width / 2) * 0.9;
    const centerX = width / 2;
    const centerY = height / 2;
    const strokeEmptyWidth = customStrokeWidth ? customStrokeWidth : 2;
    const strokeFullWidth = strokeEmptyWidth * 2;
    const strokeCircleColor = customStrokeCircleColor ? customStrokeCircleColor : "#e6e6e6";
    const strokeTimerColor = customStrokeColor ? customStrokeColor : "orangered";
    const textColor = customTextColor ? customTextColor : "orangered";
    const fontSize = customFontSize ? customFontSize : 20;
    const fontWeight = customFontWeight ? customFontWeight : "none";

    let textElements = '';

    if (label) {
        textElements =
            <>
                <text
                    x="50%"
                    y="40%"
                    textAnchor="middle"
                    dy={fontSize * 0.2}
                    fontFamily="sans-serif"
                    fontSize={fontSize * 0.7}
                    fill={"#a1a0a0"}
                >
                    {label}
                </text>
                <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    dy={fontSize * 0.4}
                    fontFamily="sans-serif"
                    fontSize={fontSize * 1.25}
                    fontWeight={fontWeight}
                    fill={textColor}
                >
                    {currTime.toString().padStart(2, '0')}
                </text>
            </>
    } else {
        textElements =
            <>
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy={fontSize * 0.45}
                    fontFamily="sans-serif"
                    fontSize={fontSize * 0.8}
                    fontWeight={fontWeight}
                    fill={textColor}
                >
                    {customText}
                </text>
            </>
    }

    return (
        <span className="circular-countdown">
            <svg width={width} height={height}>
                <circle
                    r={radius}
                    cx={centerX}
                    cy={centerY}
                    fill="none"
                    strokeWidth={strokeEmptyWidth}
                    stroke={strokeCircleColor}
                />

                <circle
                    r={radius}
                    cx={centerX}
                    cy={centerY}
                    fill="none"
                    strokeWidth={strokeFullWidth}
                    stroke={strokeTimerColor}
                    strokeDasharray={`${(currTime / parts) * (Math.PI * 2 * radius)} ${(Math.PI * 2 * radius)}`}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${centerX} ${centerY})`}
                    style={{transition: `stroke-dasharray ${transitionDuration}ms linear`}}
                />
                {textElements}
            </svg>
        </span>
    );
};

export default CircularProgress;
