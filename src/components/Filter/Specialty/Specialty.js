import React from 'react'

import Pill from '../Pill/Pill';

const specialties = [
  {
    title: 'Fear Free Certified',
    details: 'Recommended for recently adopted pets. Fear Free Certified Vets create the ideal environment for a fearful, anxious, or stressed-out pet.'
  },
  {
    title: 'Travel Paperwork'
  },
  {
    title: 'Exotic Animals'
  },
  {
    title: 'Urgent Care'
  },
  {
    title: 'Dental Cleanings'
  },
  {
    title: 'On-site Pharmacy'
  }
];

export default function Specialty() {
  return (
    <Pill pill="All Specialties" showClearBtn>
      {
        specialties.map((specialty, idx) => {
          return <label key={idx}>
            <input type="checkbox" />
            { specialty.title } <br />
            { specialty.details && <small> { specialty.details }</small> }
          </label>
        })
      }
    </Pill>
  )
}
