import React, { useState } from "react";
import "./header.css";
import SettingsWindow from "../settingsWindow/settingsWindow";
import Styles from "../styleWindow/styles";

function Header() {
    const [showSettings, setShowSettings] = useState(false);
    const [showStyles, setShowStyles] = useState(false);

    const toggleSettings = () => {
        setShowSettings(prevState => !prevState);
    };

    const toggleStyles = () => {
        setShowStyles(prevState => !prevState);
    };

    return (
        <div className="header">
            <button onClick={toggleSettings} className="header-settings-btn">Settings</button>
            {/* <button onClick={toggleStyles} className="header-settings-btn">Style</button> */}
            {showSettings && <SettingsWindow closeSettings={toggleSettings} />}
            {/* {showStyles && <Styles closeStyles={toggleStyles} />} */}
        </div>
    );
}

export default Header;
