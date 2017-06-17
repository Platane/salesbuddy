import React from 'react';

import { connect } from 'react-redux';

import { Content as C } from './index';

const mapStateToProps = state => ({
    mainContent: state.mainContent,
});

const mapDispatchToProps = {};

export const Content = connect(mapStateToProps, mapDispatchToProps)(C);
