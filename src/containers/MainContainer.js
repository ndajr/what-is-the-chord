import React from 'react'
import Header from '../components/Header'
import GuitarContainer from './GuitarContainer'
import ChordContainer from './ChordContainer'


function MainContainer() {
  return (
    <div class="box">
      <div class="container">
        <Header title="What is the chord"/>
        <GuitarContainer />
        <ChordContainer />
      </div>
    </div>
  )
}

export default MainContainer
