import React from 'react';

import { connect } from 'react-redux';

import { Map as C } from './index';

import { selectVisitor } from '../../action';

const mapStateToProps = state => ({
    visitors: state.users || [],
    selectedVisitorId: state.selectedVisitorId,
});

const mapDispatchToProps = { selectVisitor };

export const Map = connect(mapStateToProps, mapDispatchToProps)(C);
