import React from 'react';
import logo from '../newspaper-background.jpg';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img className='back' src={logo} alt="logo" />
      <div className='content'>
        <b className='head'>Your One-Click Destination for the Latest Daily News</b><br /><br />
        <span className='body'>Stay informed and up-to-date with the latest happenings around the world, all at the ease of a single click. Our comprehensive news platform offers you a seamless experience, providing access to diverse and well-curated news sections, each tailored to your specific interests and needs.</span>
        <br /><br />
        <div class="d-grid gap-2">
          <button class="btn btn-dark" type="button">LOGIN</button>
        </div>
      </div>
    </div>
    
  )
}

export default Home;
