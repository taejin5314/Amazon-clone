import React from 'react';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", top: "23%", right: "20px" }}
            onClick={onClick}
        >
        </div>
    );
}
export default NextArrow
