import React from 'react';

import { Map } from '../../map/connected';

import style from './style.css';

export const UserCard = ({ profile_pic, first_name, last_name }) =>
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
                <div className={style.name}>{`${first_name} ${last_name}`}</div>
            </div>
        </div>

        <div className={style.map}>
            <div className={style.mapW}>
                <div className={style.mapShadow} />
                <div className={style.mapW2}>
                    <Map />
                </div>
            </div>
        </div>
    </div>;
