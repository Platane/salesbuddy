import React from 'react';

import style from './style.css';

import { floor, regions, lines } from './zone';

const Visitor = ({ id_user, profile_pic, selected, size = 40 }) =>
    <g
        className={
            style.visitor + ' ' + (selected ? style.visitorSelected : '')
        }
    >
        <defs>
            <clipPath id={id_user}>
                <circle cx={0} cy={0} r={size / 2} fill="black" />
            </clipPath>
        </defs>
        <circle cx={0} cy={0} r={size / 2 * 1.2} fill="#fff" />
        <image
            xlinkHref={profile_pic}
            x={-size / 2}
            y={-size / 2}
            height={size}
            width={size}
            clipPath={`url(#${id_user})`}
        />
    </g>;

export const Map = ({
    visitors,
    positions,
    selectedVisitorId,
    selectVisitor,
}) =>
    <svg viewBox="0 0 490 540" className={style.container}>

        {Array.from({ length: 40 }).map((_, i) =>
            <path
                key={i}
                d={`M-500 ${30 * i - 300} H1000`}
                className={style.grid}
            />
        )}
        {Array.from({ length: 40 }).map((_, i) =>
            <path
                key={i}
                d={`M${30 * i - 300} -500 V1000`}
                className={style.grid}
            />
        )}

        <path d={floor} className={style.floor} />

        {regions.map(path =>
            <path key={path} d={path} className={style.region} />
        )}

        {lines.map(path => <path key={path} d={path} className={style.line} />)}

        {visitors
            .slice()
            .sort((a, b) => (a.id_user == selectedVisitorId ? 1 : -1))
            .map((visitor, i) =>
                <g
                    key={i}
                    transform={`translate(${positions[i].x},${positions[i].y})`}
                    onClick={() => selectVisitor(visitor.id_user)}
                >
                    <Visitor
                        size={visitor.id_user === selectedVisitorId ? 65 : 30}
                        selected={visitor.id_user === selectedVisitorId}
                        {...visitor}
                    />
                </g>
            )}

    </svg>;

Map.defaultProps = {
    visitors: [],
    positions: [],
};
