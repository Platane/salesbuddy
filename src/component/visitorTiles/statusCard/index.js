import React from 'react';

import style from './style.css';

export const StatusCard = ({ profile_pic, firstname, lastname }) =>
    <div className={style.container}>
        <div
            className={style.pic}
            style={{ backgroundImage: `url(${profile_pic})` }}
        />
    </div>;
