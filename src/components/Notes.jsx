import React from 'react'
import { getNamedChord } from '../helpers'

import styled from 'styled-components/macro'

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

function Notes({ notes }) {
	return (
		<StyledNotes>
			{notes.map((item, i) => 
				<StyledNote key={i}>{ getNamedChord(item) }</StyledNote>) 
			}
		</StyledNotes>
	)
}

export default Notes