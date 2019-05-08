import React from 'react'
import styled from 'styled-components/macro'
import InputRadio from './InputRadio'

const StyledGuitar = styled.form`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`

function Body({ bodyData, parseNotes }) {
  return (
		<StyledGuitar ref={parseNotes}>
			{bodyData.map((fieldset, bodyId) => 
				<fieldset className="row row--1-13" key={`body-${bodyId}`}>
					{fieldset.notes.map((note, fieldsetId) => 
						<InputRadio 
							bodyId={bodyId} 
							fieldset={fieldset} 
							fieldsetId={fieldsetId} 
							note={note} 
						/>	
					)}
				</fieldset>
			)}
		</StyledGuitar>
  )
}

export default Body