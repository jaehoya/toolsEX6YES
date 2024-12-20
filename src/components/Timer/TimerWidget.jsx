import React, { useState, useEffect } from "react";
import "./TimerWidget.css";

const TimerWidget = () => {
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [isCountingUp, setIsCountingUp] = useState(false);
    const [time, setTime] = useState(0);
    const [countUpRecords, setCountUpRecords] = useState([]);
    const [countDownTime, setCountDownTime] = useState(0);

    // Countdown logic
    useEffect(() => {
        let timer;
        if (isCountingDown && countDownTime > 0) {
            timer = setInterval(() => {
                setCountDownTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (countDownTime === 0) {
            setIsCountingDown(false); // Stop countdown when time reaches 0
        }
        return () => clearInterval(timer);
    }, [isCountingDown, countDownTime]);

    // Countup logic
    useEffect(() => {
        let timer;
        if (isCountingUp) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isCountingUp]);

    // Handle starting Countdown
    const startCountDown = (duration) => {
        setCountDownTime(duration);
        setIsCountingDown(true);
        setIsCountingUp(false); // Stop Count Up if running
        setTime(0); // Reset Count Up time
    };

    // Handle starting Countup
    const startCountUp = () => {
        setIsCountingUp(true);
        setIsCountingDown(false); // Stop Count Down if running
    };

    // Stop Countup and save record
    const stopCountUp = () => {
        setIsCountingUp(false);
        if (time > 0) {
            setCountUpRecords((prevRecords) => [...prevRecords, time]);
        }
        setTime(0);
    };

    return (
        <div className="timer-widget">
            <h3>Timer Widget</h3>
            
            {/* Countdown Controls */}
            <div>
                <h4>Countdown</h4>
                <button onClick={() => startCountDown(5 * 60)}>5 Minutes</button>
                <button onClick={() => startCountDown(10 * 60)}>10 Minutes</button>
                <button onClick={() => startCountDown(30 * 60)}>30 Minutes</button>
                <button onClick={() => startCountDown(60 * 60)}>1 Hour</button>
                <p>Time Remaining: {Math.floor(countDownTime / 60)}m {countDownTime % 60}s</p>
            </div>

            {/* Countup Controls */}
            <div>
                <h4>Countup</h4>
                <button onClick={startCountUp}>Start Count Up</button>
                <button onClick={stopCountUp}>Stop Count Up</button>
                <p>Elapsed Time: {Math.floor(time / 60)}m {time % 60}s</p>
            </div>

            {/* Countup Records */}
            <div>
                <h4>Countup Records</h4>
                <ul>
                    {countUpRecords.map((record, index) => (
                        <li key={index}>
                            {Math.floor(record / 60)}m {record % 60}s
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimerWidget;
