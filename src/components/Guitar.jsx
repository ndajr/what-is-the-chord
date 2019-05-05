import React from 'react'
import './Guitar.css'
import Body from './Body'
import Frets from './Frets'
import Dots from './Dots'
import Strings from './Strings'
import Notes from './Notes'
import Chord from './Chord'
import CleanButton from './CleanButton'

function App() {
  return (
    <main>
      <div className="main">
        <div className="container-hard row">
          <div className="row--relative">
            <div className="guitar-neck">
              <Frets />
              <Dots />
              <Strings />
            </div>

            <Body />
          </div>
        </div>
      </div>
      <div className="output">
        <div className="container">
        <div className="row row--xs-center row--1-2 row--pad">
          <div className="row__col row__xs-12">
            <div className="row row--1">
              <div className="row__col">
                <Notes />
              </div>
              <div className="row__col">
                <Chord />
              </div>
            </div>
          </div>
          <div className="row__col row__xs-12">
            <CleanButton />
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default App
