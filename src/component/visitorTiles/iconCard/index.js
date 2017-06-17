import React from 'react';

import { Icon } from '../../icon';
import { Mood } from '../../mood';

import style from './style.css';

export const IconCard = ({ icon, label, mood }) =>
    <div className={style.container}>
        <div className={style.icon}>
            {mood
                ? <Mood size="100%" mood={mood} />
                : <Icon icon={icon} color="#9b9b9b" size="100%" />}
        </div>
        <div className={style.label}>
            {label}
        </div>
    </div>;
