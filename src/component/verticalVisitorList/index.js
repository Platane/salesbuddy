import React from 'react';

import style from './style.css';

import { Mood } from '../mood';

const Visitor = ({ name, profile_pic, mood, selected, onClick }) =>
    <div
        onClick={onClick}
        className={
            style.visitor + ' ' + (selected ? style.visitorSelected : '')
        }
    >
        <div
            className={style.visitorPic}
            style={{ backgroundImage: `url(${profile_pic})` }}
        />
        <div className={style.visitorName}>{name}</div>
        <div className={style.visitorMood}><Mood size={24} mood={mood} /></div>
    </div>;

export const VerticalVisitorList = ({
    visitors,
    selectedVisitorId,
    selectVisitor,
}) =>
    <div className={style.container}>
        {visitors.map(visitor =>
            <Visitor
                key={visitor.id_user}
                name={`${visitor.first_name} ${visitor.last_name}`}
                profile_pic={visitor.profile_pic}
                mood={visitor.search && visitor.search.emotion}
                onClick={() => selectVisitor(visitor.id_user)}
                selected={visitor.id_user === selectedVisitorId}
            />
        )}
    </div>;
