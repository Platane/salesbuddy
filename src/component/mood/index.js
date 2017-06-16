import React from 'react';

import { Icon } from '../icon';

const color = {
    ok: '#0ff',
};

export const Mood = props =>
    <Icon {...props} color={color[props.mood]} icon={props.mood} />;
