import React from 'react';

import style from './MoreFilter.module.css';
import Pill from '../Pill/Pill';

const languages = [
  'English',
  'Spanish',
  'Arabic'
];

const others = [
  'Referral not required',
  'At home visit'
]

export default function MoreFilter() {
  return (
    <Pill pill="More Filters" showClearBtn>
      <div>
        <b>Languages</b>
        <div className={style.languageContainer}>
          {
            languages.map((language, idx) => {
              return <label key={idx}>
                <input type="checkbox" />
                { language }
              </label>
            })
          }
        </div>
      </div>
      {
        others.map((other, idx) => {
          return <label key={idx}>
            <input type="checkbox" />
            { other }
          </label>
        })
      }
    </Pill>
  )
}
