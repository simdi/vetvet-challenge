import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from './Index.module.css';
import SearchContent from './SearchContent/SearchContent';
import GoogleMapReact from './Map/Map';
import { getPracticesStart } from '../../store/features/practice';


export default function Search() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPracticesStart());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SearchContent />
      <GoogleMapReact />
    </div>
  )
}
