import React from 'react'
import styled from 'styled-components'

const Fret = styled.div`
	width: 3px;
	height: 250px;
	background-color: ${({ theme: { colors } }) => colors.fretColor1 };
	border-right: ${({ theme: { colors } }) => `2px solid ${colors.fretColor2}` };
	position: relative;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 2px;
		background-color: ${({ theme: { colors } }) => colors.fretColor3 };
	}
`

const FirstFret = styled.div`
	position: relative;
	width: 100%;

	&:before {
		content: '';
		background-color: ${({ theme: { colors } }) => colors.firstFretColor1 };
		position: absolute;
		right: 0;
		top: 0;
		width: 10%;
		height: 100%;
		box-shadow: ${({ theme: { boxShadow } }) => boxShadow.firstFret };
	}
`

function Frets() {
	const MAX_NUMBER_FRETS = 13
	const frets = [...Array(MAX_NUMBER_FRETS).keys()]

  return (
		<div className="frets">
			<div className="row row--1-13">
				{frets.map((item, i) => 
					<div className="row__col">
						{ i === 0 ? <FirstFret /> : <Fret /> }
					</div>
				)}
			</div>
		</div>
  )
}

export default Frets