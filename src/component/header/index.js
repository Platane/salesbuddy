import React from 'react';
import { Icon } from '../icon';
import style from './style.css';

const Notification = () => <div>{''}</div>;

const UserSetting = () =>
    <div className={style.userSetting}>
        <div className={style.userSettingPic} />
        <div className={style.userSettingName}>Luc Billon</div>
        <div className={style.userSettingCarret}>▼</div>
    </div>;

export const Header = ({ mainContent, setMainContent }) =>
    <div className={style.container}>
        <div className={style.logo} />
        <div className={style.right}>
            {setMainContent &&
                <div
                    className={style.contentToggle}
                    onClick={() =>
                        setMainContent(
                            mainContent === 'map' ? 'profil' : 'map'
                        )}
                >
                    <Icon
                        size={30}
                        color="#fff"
                        icon={mainContent === 'map' ? 'user' : 'mapTic'}
                    />
                </div>}
            <Notification />
            <UserSetting />
        </div>
    </div>;
