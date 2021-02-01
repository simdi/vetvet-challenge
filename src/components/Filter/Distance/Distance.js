import React from 'react';

import style from './Distance.module.css';
import Pill from '../Pill/Pill';

export default function Distance() {
  return (
    <Pill pill="Distance">
      <div className={style.distanceUnitContainer}>
        <div>5mi</div>
        <div>100mi</div>
      </div>
      <input type="range" name="volume" min="5" max="100" />
    </Pill>
  )
}
