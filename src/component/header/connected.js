import React from 'react';

import { connect } from 'react-redux';

import { Header as C } from './index';

import { setMainContent } from '../../action';

const mapStateToProps = state => ({
    mainContent: state.mainContent,
});

const mapDispatchToProps = {
    setMainContent,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(C);
