import React from 'react'
import styled from 'styled-components/macro'
import BodyString from './BodyString'

const StyledGuitar = styled.form`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`

function Body({ strings, parseNotes }) {
  return (
		<StyledGuitar ref={parseNotes}>
			{strings.map((notes, stringNumber) => 
				<BodyString stringNumber={stringNumber} notes={notes} key={`string-${stringNumber}`}/>
			)}
		</StyledGuitar>
  )
}

export default Body