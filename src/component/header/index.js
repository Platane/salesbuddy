import React from 'react';

import style from './style.css';

const Notification = () => <div>{''}</div>;

const UserSetting = () =>
    <div className={style.userSetting}>
        <div className={style.userSettingPic} />
        <div className={style.userSettingName}>Luc Billon</div>
        <div className={style.userSettingCarret}>▼</div>
    </div>;

export const Header = () =>
    <div className={style.container}>
        <div className={style.logo} />
        <div className={style.right}>
            <Notification />
            <UserSetting />
        </div>
    </div>;
