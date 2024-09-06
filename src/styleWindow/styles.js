import React from "react";
import './styles.css';

function Styles({ closeStyles }) {
    return (
        <div className="styles">
            <div className="styles-container">
                <button onClick={closeStyles} className="close-btn">Close</button>
                {/* Conteúdo do componente Styles */}
            </div>
        </div>
    );
}

export default Styles;
