import React from 'react'
import { getTonic } from '../app/model'
import { chordSuffix } from '../app/main'

import styled from 'styled-components'

const StyledChord = styled.div`
	font-size: 27px;
	margin-bottom: 20px;
`

function Chord() {
	const notes = []
  
  return (
		<div>
			<StyledChord>
				<span>{ notes.length ? 'Chord: ' + getTonic(notes) : ''}</span>
        <span>{ notes.length ? chordSuffix(notes) : '' }</span>
			</StyledChord>
		</div>
	)
}

export default Chord
