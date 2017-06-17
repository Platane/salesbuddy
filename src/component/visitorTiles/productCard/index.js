import React from 'react';

import style from './style.css';

export const ProductCard = ({ profile_pic, first_name, last_name }) =>
    <div className={style.container}>
        <div className={style.left}>
            <div
                className={style.pic}
                style={{ backgroundImage: `url(${profile_pic})` }}
            />
        </div>
        <div className={style.right}>
            <div className={style.label}>Name</div>
            <div className={style.name}>{`${first_name} ${last_name}`}</div>
        </div>
    </div>;
