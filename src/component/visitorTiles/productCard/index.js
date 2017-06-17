import React from 'react';

import style from './style.css';

import { Icon } from '../../icon';

const brandLogo = {
    'b&o': require('../../../asset/brand/bo.jpg'),
    beats: require('../../../asset/brand/beats.jpg'),
    bose: require('../../../asset/brand/bose.png'),
    harman: require('../../../asset/brand/harman.png'),
    'harman kardon': require('../../../asset/brand/harman.png'),
    lg: require('../../../asset/brand/lg.png'),
    jabra: require('../../../asset/brand/jabra.jpg'),
    jbl: require('../../../asset/brand/jbl.png'),
    philips: require('../../../asset/brand/philips.png'),
    sony: require('../../../asset/brand/sony.png'),
    devialet: require('../../../asset/brand/devialet.png'),
};

const getBandLogoUrl = brand => brandLogo[brand.toLowerCase()];

export const ProductCard = ({ img_url, rate, price, product_name, brand }) =>
    <div className={style.container}>
        <div className={style.column}>
            <div
                className={style.pic}
                style={{ backgroundImage: `url(${img_url})` }}
            />
        </div>
        <div className={style.column}>
            <div className={style.name}>{product_name}</div>
            <div className={style.rate}>
                {Array.from({ length: 5 }).map((_, i) =>
                    <Icon
                        key={i}
                        icon="star"
                        size={30}
                        color={i < rate ? '#ff6700' : '#9b9b9b'}
                    />
                )}
            </div>
        </div>
        <div className={style.column}>
            {getBandLogoUrl(brand)
                ? <div
                      className={style.brandLogo}
                      style={{
                          backgroundImage: `url(${getBandLogoUrl(brand)})`,
                      }}
                  />
                : <div className={style.brandName}>{brand}</div>}
        </div>
        <div className={style.column}>
            <div className={style.price}>{price + '€'}</div>
        </div>
    </div>;
