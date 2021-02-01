import React from 'react';
import style from './Index.module.css';
import SearchContent from './SearchContent/SearchContent';
import Map from './Map/Map';


export default function Search() {
  return (
    <div className={style.container}>
      <SearchContent />
      <Map />
    </div>
  )
}
