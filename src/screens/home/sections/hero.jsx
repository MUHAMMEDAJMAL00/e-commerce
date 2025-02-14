import React from 'react'
import Banner from '../components/banner'
import Categories from '../components/categories'
import Goldprice from '../components/goldprice'
import Photosection from '../components/photosection'
import "../styles.scss"
import Goldinformation from '../components/goldinformation'
import Genders from '../components/genders'
import TopProducts from '../components/topmodels'
import Trending from '../components/trending'

const Hero = () => {
  return (
    <div className='hero'>
      <Banner/>
      <Categories/>
          <Goldprice/>
          <Photosection/>
     <Goldinformation/>
     <TopProducts/>
     <Genders/>
     <Trending/>

      
    </div>
  )
}

export default Hero
