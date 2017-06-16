import React from 'react';

import style from './style.css';

const Notification = () => <div>X</div>;

const UserSetting = () => <div>X</div>;

export const Header = () =>
    <div className={style.container}>
        <div className={style.logo} />
        <div className={style.right}>
            <Notification />
            <UserSetting />
        </div>
    </div>;
