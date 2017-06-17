import React from 'react';

import style from './style.css';

import * as icons from './icons';

export const Icon = ({ size, color, icon }) =>
    !icons[icon]
        ? null
        : <svg
              viewBox={icons[icon].viewBox}
              style={{ width: size, height: size }}
          >
              <path d={icons[icon].path} fill={color} />
          </svg>;
