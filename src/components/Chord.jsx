import React from 'react'
import { getTonic } from '../app/model'
import { chordSuffix } from '../app/main'

function Chord() {
	const notes = []
  
  return (
		<div>
			<div class="chord">
				<span>{ notes.length ? 'Chord: ' + getTonic(notes) : ''}</span>
        <span>{ notes.length ? chordSuffix(notes) : '' }</span>
			</div>
		</div>
	)
}

export default Chord
