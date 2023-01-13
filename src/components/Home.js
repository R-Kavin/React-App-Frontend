import React from 'react'
import Doc1 from '../Media/Doc1.jpg'
import '../App.css'


const Home = () => {
  return (
    <div className='home'>
      <img className='image' src={Doc1} ></img>
      <div className='home2'>
         <h3>Doctor App</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus repellendus tempore maiores vel ut, quas sequi tempora consequuntur nisi provident quasi incidunt atque optio, ipsa officiis id autem pariatur</p>
      </div>
      
    </div>
  )
}

export default Home
