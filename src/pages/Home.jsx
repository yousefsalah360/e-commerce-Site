import React from 'react'
import Hero from '../components/hero'
import { LatestCollection } from '../components/latestCollection'
import { BestSaller } from '../components/bestSaller'
import { Policy } from '../components/policy'
import NewestLetterbox from '../components/newestLetterbox'


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
      <Policy />
      <NewestLetterbox />
    </div>
  )
}

export default Home