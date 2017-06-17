import React from 'react';

import { connect } from 'react-redux';

import { VisitorTiles as C } from './index';

const mapStateToProps = state => ({
    visitor: state.users[0] || {},
});

const mapDispatchToProps = {};

export const VisitorTiles = connect(mapStateToProps, mapDispatchToProps)(C);
