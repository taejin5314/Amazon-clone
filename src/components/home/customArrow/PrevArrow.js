import React from 'react';

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", top: "23%", left: "20px", zIndex: "1" }}
            onClick={onClick}
        >
        </div>
    );
}

export default PrevArrow
