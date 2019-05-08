import React from 'react'
import styled from 'styled-components/macro'

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

function InputRadio({ bodyId, fieldset, fieldsetId, note }) {
  return (
    <div className="row__col" key={`fieldset-${fieldsetId}`}>
      <StyledInput type="radio" name={fieldset.string} value={note} id={`${bodyId}-${note}`} />
    </div>
  )
}

export default InputRadio