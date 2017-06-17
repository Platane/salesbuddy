import React from 'react';

import style from './style.css';

import { Mood } from '../mood';

const Visitor = ({ name, profile_pic, mood }) =>
    <div className={style.visitor}>
        <div
            className={style.visitorPic}
            style={{ backgroundImage: `url(${profile_pic})` }}
        />
        <div className={style.visitorName}>{name}</div>
        <div className={style.visitorMood}><Mood size={24} mood={mood} /></div>
    </div>;

export const VerticalVisitorList = ({ visitors }) =>
    <div className={style.container}>
        {visitors.map(visitor =>
            <Visitor
                key={visitor.sender_id}
                name={`${visitor.firstname} ${visitor.lastname}`}
                profile_pic={visitor.profile_pic}
                mood={visitor.search && visitor.search.emotion}
            />
        )}
    </div>;
