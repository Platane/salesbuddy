import React from 'react';

import { Icon } from '../icon';

const FaceLess = ({ size }) =>
    <svg style={{ width: size, height: size }} viewBox="0 0 26 26">
        <g fill="none" fillRule="evenodd">
            <rect width="26" height="26" fill="#C7C7CC" rx="8" />
            <circle cx="17.97" cy="10.32" r="1.91" fill="#FFF" />
            <circle cx="8.03" cy="10.32" r="1.91" fill="#FFF" />
        </g>
    </svg>;

const Neutral = ({ size }) =>
    <svg viewBox="0 0 26 26" style={{ width: size, height: size }}>
        <g fill="none" fillRule="evenodd">
            <rect fill="#F8E81C" width="26" height="26" rx="8" />
            <circle fill="#FFF" cx="17.97" cy="10.32" r="1.91" />
            <circle fill="#FFF" cx="8.03" cy="10.32" r="1.91" />
            <path
                d="M17.6 17.84H8.4"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>;

const Happy = ({ size }) =>
    <svg style={{ width: size, height: size }} viewBox="0 0 26 26">
        <g fill="none" fillRule="evenodd">
            <rect width="26" height="26" fill="#60E521" rx="8" />
            <circle cx="17.97" cy="10.32" r="1.91" fill="#FFF" />
            <circle cx="8.03" cy="10.32" r="1.91" fill="#FFF" />
            <path
                stroke="#FFF"
                strokeWidth="2"
                d="M8.4 16.82c1.32 3.96 7.88 4.1 9.2 0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>;

const Sad = ({ size }) =>
    <svg viewBox="0 0 26 26" style={{ width: size, height: size }}>
        <g fill="none" fillRule="evenodd">
            <rect width="26" height="26" fill="#E33E28" rx="8" />
            <g fill="#FFF" transform="translate(6.118 8.412)">
                <circle cx="11.85" cy="1.91" r="1.91" />
                <circle cx="1.91" cy="1.91" r="1.91" />
            </g>
            <path
                stroke="#FFF"
                strokeWidth="2"
                d="M17.6 19.84c-1.32-3.96-7.88-4.1-9.2 0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>;

export const Mood = props => {
    switch (props.mood && '' + props.mood) {
        case '1':
            return <Happy {...props} />;
        case '2':
            return <Neutral {...props} />;
        case '3':
            return <Sad {...props} />;
        default:
            return <FaceLess {...props} />;
    }
};
