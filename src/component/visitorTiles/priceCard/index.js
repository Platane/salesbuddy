import React from 'react';

import style from './style.css';

export const PriceCard = ({ price }) => {
    const [min, max] = price.split('-').map(x => x.trim());

    return (
        <div className={style.container}>
            <div className={style.min}>
                {min + ''}
            </div>
            <div className={style.separator}>-</div>
            <div className={style.max}>
                {max + ''}
            </div>
        </div>
    );
};
