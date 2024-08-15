import React, { useState, useEffect } from 'react';
import './Clock.css';
import { useClock } from './clockContext';

function Clock() {
    const { settings } = useClock();
    const [secondsLeft, setSecondsLeft] = useState(settings.workTime);
    const [isRunning, setIsRunning] = useState(false);
    const [currentPomo, setCurrentPomo] = useState(1);
    const [isWorkTime, setIsWorkTime] = useState(true);

    useEffect(() => {
        setSecondsLeft(isWorkTime ? settings.workTime : settings.shortBreak);
    }, [settings, isWorkTime]);

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                setSecondsLeft(prev => {
                    if (prev === 1) {
                        clearInterval(timerId);
                        handleCycleCompletion();
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerId);
    }, [isRunning]);

    const handleCycleCompletion = () => {
        if (isWorkTime) {
            const isLastPomo = currentPomo === settings.totalPomos;
            setIsWorkTime(false);
            setSecondsLeft(isLastPomo ? settings.longBreak : settings.shortBreak);
        } else {
            setIsWorkTime(true);
            setSecondsLeft(settings.workTime);
            setCurrentPomo(currentPomo + 1);
        }
        setIsRunning(false);
    };

    const handleStart = () => {
        if (secondsLeft > 0) {
            setIsRunning(true);
        }
    };

    const handleStop = () => setIsRunning(false);

    const handleReset = () => {
        setIsRunning(false);
        setSecondsLeft(settings.workTime);
        setCurrentPomo(1);
        setIsWorkTime(true);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className='base'>
            <div className="container">
                <div className="clock">
                    {formatTime(secondsLeft)}
                </div>
                <div className="buttons">
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="pomos">
                <h4>#{currentPomo}</h4>
                <span>{isWorkTime ? "Work Time" : (currentPomo % settings.totalPomos === 0 ? "Long Break" : "Short Break")}</span>
            </div>
        </div>
    );
}

export default Clock;
