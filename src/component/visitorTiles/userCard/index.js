import React from 'react';

import style from './style.css';

export const UserCard = ({ profile_pic, firstname, lastname }) =>
    <div className={style.container}>
        <div className={style.left}>
            <div
                className={style.pic}
                style={{ backgroundImage: `url(${profile_pic})` }}
            />
        </div>
        <div className={style.right}>
            <div className={style.content}>
                <div className={style.label}>Name</div>
                <div className={style.name}>{`${firstname} ${lastname}`}</div>
            </div>
        </div>
    </div>;
