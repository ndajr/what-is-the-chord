import React from 'react'
import body from '../data/body'

function Body() {
  return (
    <div>
    	<form id="js-instrument" className="guitar">
				{body.map(fieldset => 
					<fieldset className="row row--1-13">
						{fieldset.notes.map(note => 
							<div className="row__col">
								<input type="radio" name={fieldset.string} value={note} />
							</div>
						)}
					</fieldset>
				)}
			</form>
    </div>
  )
}

export default Body