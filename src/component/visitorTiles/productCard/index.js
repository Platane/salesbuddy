import React from 'react';

import style from './style.css';

import { Icon } from '../../icon';

/*
id_product(pin): 61
location(pin): "1"
category(pin): "speaker"
transport(pin): "fixe"
utilisation(pin): "music"
price(pin): "549,99"
budget(pin): "500-1000"
product_name(pin): "Enceinte Bluetooth Marshall Woburn Black"
brand(pin): "Marshall"
img_url(pin): "http://static.fnac-static.com/multimedia/Images/FR/NR/8c/48/60/6310028/1505-1/tsp20140926112403/Enceinte-Bluetooth-Marshall-Woburn-Black.jpg"
desc(pin): ""
rate(pin): 5
createdAt(pin): "2017-06-17T04:34:02.000Z"
updatedAt(pin): "2017-06-17T04:34:02.000Z"

*/

const brandLogo = {
    'b&o': require('../../../asset/brand/bo.jpg'),
    beats: require('../../../asset/brand/beats.jpg'),
    bose: require('../../../asset/brand/bose.png'),
    harman: require('../../../asset/brand/harman.png'),
    lg: require('../../../asset/brand/lg.png'),
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
