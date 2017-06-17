import React from 'react';

import style from './style.css';

export const StatusCard = ({ profile_pic, first_name, last_name }) =>
    <div className={style.container}>
        <div className={style.ok}>Ok</div>
        <div className={style.no}>?</div>
    </div>;
