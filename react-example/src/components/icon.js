import React from 'react';

const Icon = ({svg, size}) => {

    function getPath(p) {
        return <path d={p}>
        </path>;
    }

    const path = typeof svg.path === "string" ? getPath(svg.path) : svg.path.map((p) => getPath(p));
    const actualSize = size || 1;

    return (
        <svg stroke="currentColor"
             strokeWidth={svg.strokeWidth || "0"}
             fill="currentColor"
             viewBox={svg.viewBox}
             width={`${actualSize}em`}
             height={`${actualSize}em`}
             xmlns="http://www.w3.org/2000/svg">
            {path}
        </svg>
    );
};

export default Icon;
