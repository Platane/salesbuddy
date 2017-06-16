import React from 'react';
import { Header } from '../header';
import { Content } from '../content';

import style from './style.css';

export const App = () =>
    <div className={style.container}>
        <div className={style.header}>
            <Header />
        </div>
        <div className={style.content}>
            <Content />
        </div>
    </div>;
