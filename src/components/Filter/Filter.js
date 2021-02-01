import React, { useState } from 'react';
import style from './Filter.module.css';
import sortImage from '../../assets/images/sort.svg';
import Distance from './Distance/Distance';
import Specialty from './Specialty/Specialty';
import Affordability from './Affordability/Affordability';
import MoreFilter from './MoreFilter/MoreFilter';
import Service from './Service/Service';

const sortOptions = [
  'Distance',
  'Next available appointment',
  'Best Rated',
  'Most Recently updated',
  'Alphabetical'
];

export default function Filter() {
  const [showSortOption, setShowSortOption] = useState(false);
  return (
    <div className={style.container}>
      <Specialty />
      <Distance />
      <Service />
      <Affordability />
      <MoreFilter />
      <div className={style.sortContainer}>
        <div className={style.sort} onClick={() => setShowSortOption(!showSortOption)}>
          <img src={sortImage} alt="Filter" />
          <div>Sort by</div>
        </div>
        {
          showSortOption && <div className={`sortOption ${style.sortOption}`}>
            <section className={style.sortOptionContent}>
              {
                sortOptions.map((sortOption, idx) => {
                  return <label key={idx}>
                    <input type="checkbox" />
                    { sortOption }
                  </label>
                })
              }
            </section>
          </div>
        }
      </div>
    </div>
  )
}
