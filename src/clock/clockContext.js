import React, { createContext, useState, useContext } from 'react';

const ClockContext = createContext();

export function ClockProvider({ children }) {
    const [settings, setSettings] = useState({
        workTime: localStorage.getItem('workTime') ? Number(localStorage.getItem('workTime')) * 60 : 25 * 60,
        shortBreak: localStorage.getItem('shortBreak') ? Number(localStorage.getItem('shortBreak')) * 60 : 5 * 60,
        longBreak: localStorage.getItem('longBreak') ? Number(localStorage.getItem('longBreak')) * 60 : 15 * 60,
        totalPomos: localStorage.getItem('pomoTimes') ? Number(localStorage.getItem('pomoTimes')) : 4,
    });

    const updateSettings = (newSettings) => {
        setSettings(prevSettings => {
            const updatedSettings = { ...prevSettings, ...newSettings };
            localStorage.setItem('workTime', updatedSettings.workTime / 60);
            localStorage.setItem('shortBreak', updatedSettings.shortBreak / 60);
            localStorage.setItem('longBreak', updatedSettings.longBreak / 60);
            localStorage.setItem('pomoTimes', updatedSettings.totalPomos);
            return updatedSettings;
        });
    };

    return (
        <ClockContext.Provider value={{ settings, updateSettings }}>
            {children}
        </ClockContext.Provider>
    );
}

export const useClock = () => useContext(ClockContext);
