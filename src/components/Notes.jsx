import React from 'react'
import { noteName } from '../app/model'

import styled from 'styled-components'

const StyledNotes = styled.ul`
	margin-bottom: 5px;
	display: flex;
	align-items: center;
`

const StyledNote = styled.li`
  font-size: 24px;
  padding: 2px 6px;
	min-width: 40px;
	background-color: ${({ theme: { colors } }) => colors.noteBg };
	color: ${({ theme: { colors } }) => colors.noteTxt };
  margin: 3px 4px;
  text-align: center;
`

function Notes() {
	const notes = []
	return (
		<StyledNotes>
			{ notes.map(item => <StyledNote>{ noteName(item) }</StyledNote>) }
		</StyledNotes>
	)
}

export default Notes