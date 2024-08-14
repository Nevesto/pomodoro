import React, { useState } from 'react';
import { useClock } from '../clock/clockContext';
import './settingsWindow.css';

function SettingsWindow({ closeSettings }) {
    const { settings, updateSettings } = useClock();
    const [pomoTimes, setPomoTimes] = useState(localStorage.getItem('pomoTimes') || '');
    const [workTime, setWorkTime] = useState(localStorage.getItem('workTime') || '');
    const [shortBreak, setShortBreak] = useState(localStorage.getItem('shortBreak') || '');
    const [longBreak, setLongBreak] = useState(localStorage.getItem('longBreak') || '');

    const handleSave = () => {
        updateSettings({
            totalPomos: Number(pomoTimes),
            workTime: Number(workTime) * 60,
            shortBreak: Number(shortBreak) * 60,
            longBreak: Number(longBreak) * 60
        });
        closeSettings();
    };

    return (
        <div className="settingsWindow">
            <div className="settings">
                <h2>Settings</h2>
                <div className="setting">
                    <label>Pomo Times</label>
                    <input 
                        type="number"
                        value={pomoTimes}
                        onChange={(e) => setPomoTimes(e.target.value)}
                    />
                </div>
                <div className="setting">
                    <label>Work Time</label>
                    <input 
                        type="number"
                        value={workTime}
                        onChange={(e) => setWorkTime(e.target.value)}
                    />
                </div>
                <div className="setting">
                    <label>Short Break</label>
                    <input 
                        type="number"
                        value={shortBreak}
                        onChange={(e) => setShortBreak(e.target.value)}
                    />
                </div>
                <div className="setting">
                    <label>Long Break</label>
                    <input 
                        type="number" 
                        value={longBreak}
                        onChange={(e) => setLongBreak(e.target.value)}
                    />
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default SettingsWindow;
