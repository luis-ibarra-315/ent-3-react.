
import { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {

   const randomId = Math.floor(Math.random() * 126) + 1;
   const [inputValue, setInputValue] = useState(randomId);
   const [location, getLocation, isLoading, hasError] = useFetch();

   useEffect(() => {
      const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
      getLocation(url);
   }, [inputValue]);

   const textInput = useRef();

   const handleSubmit = (event) => {
      event.preventDefault();
      setInputValue(textInput.current.value.trim().toLowerCase());
      textInput.current.value = ' ';
   };

   return (
      
      <div className='app'>
         {
            isLoading ?
               <h2>loading...</h2>
               :
               <>
                  <article className='app_img'>
                <img src = '/imgs/Rick and morty.jpeg'alt='photimagen the title'/>
                  </article>
                  <form className='app——form' onSubmit={handleSubmit}>
                     <input className='app——input' type='text' ref={textInput} />
                     <button className='app——btn'>search</button>
                  </form>
                  {
                     hasError || !+inputValue ?
                        <h2> ❌ hey! you must provide an id from 1 to 126 😒</h2>
                        :
                        <>
                           <LocationCard
                              info={location}
                           />
                           <div className ='app——container'>
                              {
                                 location?.residents.map(character => (
                                    <ResidentCard
                                       Key={character}
                                       info={character}
                                    />
                                 ))
                              }
                           </div>
                        </>
                  }
              </>    
         }
      
      </div>
   )
}

export default App;


