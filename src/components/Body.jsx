import React from 'react'
import styled from 'styled-components'

const StyledGuitar = styled.form`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`
const StyledInput = styled.input`
	width: 100%;
	height: 38px;
	cursor: pointer;
	margin: 0;
	appearence: none;
	-webkit-appearance: none;
	-moz-appearance: none;

	&:active, 
	&:focus {
		outline:none;
		-moz-outline-style: none;
	}

	&:checked {
		width: 30px;
		height: 30px;
		margin: 0 auto;
		display: block;
		background-color: ${({ theme: { colors } }) => colors.noteSelected };
		border-radius: 50%;
		box-shadow: ${({ theme: { boxShadow } }) => boxShadow.noteSelected };
	}
`
function Body({ body, getNote }) {
  return (
    <div>
    	<StyledGuitar ref={getNote}>
				{body.map((fieldset, bodyId) => 
					<fieldset className="row row--1-13">
						{fieldset.notes.map((note, fieldsetId) => 
							<div className="row__col">
								<StyledInput type="radio" name={fieldset.string} value={note} id={`${bodyId}-${fieldsetId}`} />
							</div>
						)}
					</fieldset>
				)}
			</StyledGuitar>
    </div>
  )
}

export default Body