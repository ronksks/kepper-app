import React, { useState } from "react";

function Time() {
    const [currentTime, setTime] = useState(0);
    function updateTime() {
        setTime(new Date().toLocaleTimeString("en-GB"));
    }

    setInterval(updateTime, 1000);
    return (
        <div className="time">
            <h1>{currentTime}</h1>;
        </div>
    )
}
export default Time;