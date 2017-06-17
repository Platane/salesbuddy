import React from 'react';

import { connect } from 'react-redux';

import { VerticalVisitorList as C } from './index';

const mapStateToProps = state => ({
    visitors: state.users || [],
});

const mapDispatchToProps = {};

export const VerticalVisitorList = connect(mapStateToProps, mapDispatchToProps)(
    C
);
