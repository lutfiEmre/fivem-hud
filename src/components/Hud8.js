import React from 'react';

const Hud8 = () => {
    const afterStyle = {
        content: "''",
        display: 'block',
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        transform: 'rotate(120deg)',
    };

    const graphStyle = {
        position: 'relative',
    };

    return (
        <div className="multigraph">
            <span className="tooltip">70%</span>
            <div className="graph" style={graphStyle}>
                <div style={afterStyle}></div>
            </div>
        </div>
    );
};

export default Hud8;
