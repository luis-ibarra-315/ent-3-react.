import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './styles/residentCard.css';

const ResidentCard = ({info}) => {

    const [resident,getResident] = useFetch();

    useEffect(() => {
    getResident(info);
    },[]); 


    return (
        <article className='resident'>
            <figure className='resident——img'>
            <img src= {resident?.image} alt ='character image'/>
            <figcaptio className='resident——status'>
                <div className={`resident——circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaptio>
            </figure>
            <h2 className='resident——name'>{resident?.name}</h2>
            <hr className='resident——line'/>
            <ul className='resident——list'>
                <li className='resident——item'><span>Specie</span><span>{resident?.species}</span></li>
                <li className='resident——item'><span>Origin</span><span>{resident?.origin.name}</span></li>
                <li className='resident——item'><span>Eppisodes where appear</span><span>{resident?.episode.length}</span></li>
                
            </ul>
        </article>
    )
}

export default ResidentCard;
