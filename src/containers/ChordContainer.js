import React from 'react'
import Notes from '../components/Notes'
import Chord from '../components/Chord'
import CleanButton from '../components/CleanButton'
import ChordBoard from '../components/ChordBoard'

function ChordContainer() {
  const notes = []

  const cleanNotes = (e) => {
    e.preventDefault()
    console.log('Button clicked')
  }

  return (
    <ChordBoard>
      <Notes notes={notes} />
      <Chord notes={notes} />
      <CleanButton cleanNotes={cleanNotes} />
    </ChordBoard>
  )
}

export default ChordContainer
