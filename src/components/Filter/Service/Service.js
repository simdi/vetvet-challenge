import React from 'react';

import style from './Service.module.css';
import Pill from '../Pill/Pill';

export default function Service() {
  return (
    <Pill pill="Distance">
      <div className={style.serviceContainer}>
        <div className="pt-1">Show only practices that are open for 24 hour service.</div>
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </Pill>
  )
}
