import React from 'react';

import { connect } from 'react-redux';

import { Map as C } from './index';

import { selectVisitor } from '../../action';

const positions = Array.from({ length: 30 }).map(() => {
    const r = Math.random() * 30;
    const a = Math.random() * Math.PI * 2;

    return {
        x: 155 + Math.cos(a) * r,
        y: 410 + Math.sin(a) * r * 3,
    };
});

const mapStateToProps = state => ({
    visitors: state.users || [],
    positions,
    selectedVisitorId: state.selectedVisitorId,
});

const mapDispatchToProps = { selectVisitor };

export const Map = connect(mapStateToProps, mapDispatchToProps)(C);
