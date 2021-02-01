import React from 'react';

import style from './Vet.module.css';
import vetImage from '../../assets/images/pexels-international-fund-for-animal-welfare.svg';
import starImage from '../../assets/images/star.svg';

export default function Vet() {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img className={style.vetImage} src={vetImage} alt="Vet 1" />
      </div>
      <div className={style.details}>
        <h3 className="text-darkBlue">Bond Vet - Upper East side</h3>
        <p className={`text-darkBlue ${style.docName}`}>Dr. Name</p>
        <div className={`text-darkBlue ${style.rateContainer}`}>
          <img src={starImage} alt="Star" />
          <span>4.7 (200+ rating)</span>
        </div>
        <p className={`text-lightGray ${style.petNeed}`}>Urgent Care | Diagnostic Tests | Dental Cleanings | Travel Paperwork | Surgery</p>
        <a href="/" className={style.viewDetails}>See Details</a>
      </div>
    </div>
  )
}
