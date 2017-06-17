import React from 'react';

import style from './style.css';

import { UserCard } from './userCard';
import { StatusCard } from './statusCard';
import { ProductCard } from './productCard';
import { IconCard } from './iconCard';
import { PriceCard } from './priceCard';

const Row = props =>
    <div className={style.row}>
        <div className={style.rowLabel}>{props.label}</div>
        <div className={style.rowContent}>{props.children}</div>
    </div>;

const Tile = props =>
    <div className={style['tile' + props.size]}>
        <div className={style.tileLabel}>{props.label}</div>
        <div className={style.tileContent}>{props.children}</div>
    </div>;

const moodLabel = ['happy', 'neutral', 'sad'];

export const VisitorTiles_ = ({ visitor }) =>
    <div className={style.container}>

        <Row label="Profil">
            <Tile size={2} label="Visitor">
                <UserCard {...visitor} />
            </Tile>
            <Tile size={4} label="Status">
                <StatusCard {...visitor} />
            </Tile>
            <Tile size={4} label="Mood">
                <IconCard
                    mood={visitor.search && visitor.search.emotion}
                    label={
                        moodLabel[visitor.search && visitor.search.emotion] ||
                        null
                    }
                />
            </Tile>
        </Row>

        {visitor.search &&
            <Row label="Search">

                {visitor.search.category &&
                    <Tile size={4} label="Research">
                        <IconCard
                            icon={visitor.search.category}
                            label={visitor.search.category}
                        />
                    </Tile>}

                {visitor.search.type2 &&
                    <Tile size={4} label="Format">
                        <IconCard
                            icon={visitor.search.type2}
                            label={visitor.search.type2}
                        />
                    </Tile>}

                {visitor.search.location &&
                    visitor.search.location.category &&
                    <Tile size={4} label="Usage">
                        <IconCard
                            icon={
                                visitor.search.location &&
                                visitor.search.location.category
                            }
                            label={
                                visitor.search.location &&
                                visitor.search.location.category
                            }
                        />
                    </Tile>}

                {visitor.search.price &&
                    <Tile size={4} label="Budget">
                        <PriceCard price={visitor.search.price} />
                    </Tile>}
            </Row>}

        {(visitor.matching_products || []).map((product, i) =>
            <Row
                key={product.id_product}
                label={i == 0 ? 'Recommandations' : ''}
            >
                <Tile size={1}>
                    <ProductCard {...product} />
                </Tile>
            </Row>
        )}
    </div>;

export const VisitorTiles = props =>
    props.visitor ? <VisitorTiles_ {...props} /> : null;
