import React, {useState, useEffect} from 'react'
import '../App.css'

const Home = ({per, setPer}) => {
        const [sear, setSear] = useState([])
        

    useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7ac39c4e07msh5dfbf98cc9ef4c6p1d88d0jsneb56318c17df',
            'X-RapidAPI-Host': 'duckduckgo8.p.rapidapi.com'
        }
    };
    
    fetch('https://duckduckgo8.p.rapidapi.com/?q=' + per, options)
        .then(response => response.json())
        .then(response => setSear(response))
        .catch(err => console.error(err));
    }, [per]);

  return (
    <div className='homer'>
        
      <input className='inp' placeholder='Enter' onChange={e => setPer(e.target.value)} />

        {sear?.results?.map(({description, title, url}, index) => {
            return (
                <div className='op' key={index}>
                    <a className='silka' href={url}><p>{title}</p></a>
                    <p className='tile'>{description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Home
