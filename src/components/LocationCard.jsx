import React from 'react';
import './styles/locationCard.css';

const LocationCard = ({info}) => {



  return (
    <article className='location'>
      <h2 className='location——name'>{info?.name}</h2>

      <ul className='location——list'>
        <li className='location——item'><span>Type: </span><span>{info?.type}</span></li>
        <li className='location——item'><span>Dimension: </span><span>{info?.dimension}</span></li>
        <li className='location——item'><span>Population: </span><span>{info?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationCard;
