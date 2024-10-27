import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/Newsletter/Newsletter';

const Home = () => {
  return (
    <div>
        <Hero/>  
        <Popular/>  
        <NewCollections/>
        <Newsletter/>
    </div>
  )
}

export default Home;