import React from 'react';

import style from './SearchContent.module.css';
import Filter from '../../Filter/Filter';
import Vet from '../../Vet/Vet';

export default function SearchContent() {
  return (
    <div className={style.container}>
      <Filter />
      <div className={style.content}>
        <div className={style.header}>
          <h2 className="text-darkBlue">8 vets <span>New York, NY, USA</span></h2>
        </div>
        {
          Array(5).fill('').map((_, idx) => {
            return <Vet key={idx} />
          })
        }
      </div>
    </div>
  )
}
