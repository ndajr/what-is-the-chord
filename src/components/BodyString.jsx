import React from 'react'
import BodyInput from './BodyInput'

function BodyString({ stringNumber, notes }) {
  return (
		<fieldset className="row row--1-13" key={`body-${stringNumber}`} id={notes.stringNumber}>
			{notes.map((note, noteNumber) => 
				<BodyInput 
					stringNumber={stringNumber} 
					note={note}
					key={`${stringNumber}-${noteNumber}`}
				/>	
			)}
		</fieldset>	
  )
}

export default BodyString