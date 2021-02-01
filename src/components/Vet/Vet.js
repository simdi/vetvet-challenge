import React from 'react';

import style from './Vet.module.css';
import starImage from '../../assets/images/star.svg';

export default function Vet(props) {
  const { practice } = props;

  console.log({ practice });
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img className={style.vetImage} src={practice.images[0]} alt="Vet 1" />
      </div>
      <div className={style.details}>
        <h3 className="text-darkBlue">{ practice.name }</h3>
        <p className={`text-darkBlue ${style.docName}`}>{ practice.address }</p>
        <div className={`text-darkBlue ${style.rateContainer}`}>
          <img src={starImage} alt="Star" />
          <span>{ practice.rating } (200+ rating)</span>
        </div>
        <p className={`text-lightGray ${style.petNeed}`}>
          {
            practice.tags && practice.tags.map((tag, idx) => {
              return <span key={idx}>
                { idx !== 0 && ' | ' } { tag }
              </span>
            })
          }
        </p>
        <a href="/" className={style.viewDetails}>See Details</a>
      </div>
    </div>
  )
}
