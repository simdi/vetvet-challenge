import React, { useContext } from 'react';

import style from './SearchContent.module.css';
import Filter from '../../Filter/Filter';
import Vet from '../../Vet/Vet';
import { AppContext } from '../../../App';

export default function SearchContent() {
  const practices = useContext(AppContext);

  return (
    <div className={style.container}>
      <Filter />
      { practices.loading && <div>Loading...</div> }
      {
        practices.data && practices.data.length > 0 && (
          <div className={style.content}>
            <div className={style.header}>
              <h2 className="text-darkBlue">{practices.data.length} vets <span>New York, NY, USA</span></h2>
            </div>
            
            {
              practices.data.map((practice, idx) => {
                return <Vet practice={practice} key={idx} />
              })
            }
          </div>
        )
      }
    </div>
  )
}
