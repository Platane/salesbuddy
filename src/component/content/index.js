import React from 'react';

import style from './style.css';

import { VerticalVisitorList } from '../verticalVisitorList';
import { VisitorTiles } from '../visitorTiles';

export const Content = () =>
    <div className={style.container}>
        <div className={style.main}>
            <VisitorTiles />
        </div>
        <div className={style.leftPanel}>
            <VerticalVisitorList />
        </div>
    </div>;
