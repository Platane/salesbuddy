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

const SearchRow = ({ search }) =>
    <Row label="Search">

        {search.category &&
            <Tile size={4} label="Research">
                <IconCard icon={search.category} label={search.category} />
            </Tile>}

        {search.transport &&
            <Tile size={4} label="Format">
                <IconCard icon={search.transport} label={search.transport} />
            </Tile>}

        {search.utilisation &&
            <Tile size={4} label="Usage">
                <IconCard
                    icon={search.utilisation}
                    label={search.utilisation}
                />
            </Tile>}

        {search.budget &&
            <Tile size={4} label="Budget">
                <PriceCard price={search.budget} />
            </Tile>}
    </Row>;

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

        {visitor.searches &&
            visitor.searches[0] &&
            <SearchRow
                search={visitor.searches[visitor.searches.length - 1]}
            />}

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
