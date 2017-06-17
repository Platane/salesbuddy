import React from 'react';

import style from './style.css';

import { floor, regions, lines } from './zone';

const Visitor = ({ profile_pic, selected }) =>
    <g
        className={
            style.visitor + ' ' + (selected ? style.visitorSelected : '')
        }
    >
        <circle cx={0} cy={0} r={2} fill="black" />
    </g>;

export const Map = ({ visitors, positions, selectedVisitorId }) =>
    <svg viewBox="0 0 490 540" className={style.container}>

        {Array.from({ length: 40 }).map((_, i) =>
            <path d={`M-500 ${30 * i - 300} H1000`} className={style.grid} />
        )}
        {Array.from({ length: 40 }).map((_, i) =>
            <path d={`M${30 * i - 300} -500 V1000`} className={style.grid} />
        )}

        <path d={floor} className={style.floor} />

        {regions.map(path => <path d={path} className={style.region} />)}

        {lines.map(path => <path d={path} className={style.line} />)}

        {visitors.map((visitor, i) =>
            <g transform={`translate(${positions[i].x},${positions[i].y})`}>
                <Visitor
                    selected={visitor.id === selectedVisitorId}
                    {...visitor}
                />
            </g>
        )}

    </svg>;

Map.defaultProps = {
    visitors: [],
    positions: [],
};
