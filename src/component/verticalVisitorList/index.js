import React from 'react';

import style from './style.css';

import { Mood } from '../mood';

const Visitor = ({ name, avatar_url, mood }) =>
    <div className={style.visitor}>
        <div
            className={style.visitorPic}
            style={{ backgroundImage: `url(${avatar_url})` }}
        />
        <div className={style.visitorName}>{name}</div>
        <div className={style.visitorMood}><Mood size={30} mood={mood} /></div>
    </div>;

export const VerticalVisitorList = ({ visitors }) =>
    <div className={style.container}>
        {(visitors || [0, 0, 0, 0])
            .map((visitor, i) =>
                <Visitor
                    key={i}
                    name="lea"
                    avatar_url="http://25.media.tumblr.com/tumblr_lzcdj8TjeQ1qamec9o1_1280.jpg"
                    mood="okIGuess"
                />
            )}
    </div>;
