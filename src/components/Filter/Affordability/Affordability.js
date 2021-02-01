import React from 'react';

import Pill from '../Pill/Pill';

const affordabilities = [
  'Low cost practitioners',
  'Payment plans options',
  'New patient vouchers',
  'Cost estimates up-front'
];

export default function Affordability() {
  return (
    <Pill pill="Affordability">
      {
        affordabilities.map((affordability, idx) => {
          return <label key={idx}>
            <input type="checkbox" />
            { affordability }
          </label>
        })
      }
    </Pill>
  )
}
