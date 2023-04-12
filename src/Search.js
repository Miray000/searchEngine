import React, {useState, useEffect} from 'react'
import './App.css'





const Search = ({per}) => {
    

  const [posts, setPosts] = useState([])
    
   
 
  useEffect(() => {
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7ac39c4e07msh5dfbf98cc9ef4c6p1d88d0jsneb56318c17df',
        'X-RapidAPI-Host': 'duckduckgo-image-search.p.rapidapi.com'
      }
    };
    
    fetch('https://duckduckgo-image-search.p.rapidapi.com/search/image?q=' + per, options)
      .then(response => response.json())
      .then(response => setPosts(response))
      .catch(err => console.error(err));
}, [per]);
   



  return (
    <div>
     
      

      <div className='ceny'>
      {posts?.results?.map(({image, title, thumbnail}, index) => {
        return(
          <div className='many' key={index}>
            
            <img className='mage' src={image} alt=""/>
           <a className='pos' href={thumbnail}> <p className='dop'>{title}</p></a>
            
          </div>
        )
      })}
      </div>
   
     
    </div>
   
    
  )
}

export default Search
