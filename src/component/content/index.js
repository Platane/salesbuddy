import React from 'react';

import style from './style.css';

import { VerticalVisitorList } from '../verticalVisitorList/connected';
import { VisitorTiles } from '../visitorTiles/connected';
import { Map } from '../map/connected';

export const Content = ({ mainContent }) =>
    <div className={style.container}>
        <div className={style.main}>
            {'profil' === mainContent && <VisitorTiles />}
            {'map' === mainContent && <Map />}
        </div>
        <div className={style.leftPanel}>
            <VerticalVisitorList />
        </div>
    </div>;
