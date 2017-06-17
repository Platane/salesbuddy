import React from 'react';

import { connect } from 'react-redux';

import { VerticalVisitorList as C } from './index';

import { selectVisitor } from '../../action';

const mapStateToProps = state => ({
    visitors: state.users || [],
    selectedVisitorId: state.selectedVisitorId,
});

const mapDispatchToProps = {
    selectVisitor,
};

export const VerticalVisitorList = connect(mapStateToProps, mapDispatchToProps)(
    C
);
