import React, { useState } from "react";
import "./header.css";
import SettingsWindow from "../settingsWindow/settingsWindow";

function Header() {
    const [showSettings, setShowSettings] = useState(false);

    const openSettings = () => {
        setShowSettings(true);
    }

    const closeSettings = () => {
        setShowSettings(false);
    }

    return (
        <div className="header">
            <button onClick={openSettings} className="header-settings-btn">Settings</button>
            {showSettings && <SettingsWindow closeSettings={closeSettings} />}
        </div>
    )
}

export default Header;