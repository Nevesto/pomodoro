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
        <header>
            <button onClick={openSettings}>Settings</button>
            {showSettings && <SettingsWindow closeSettings={closeSettings} />}
        </header>
    )
}

export default Header;