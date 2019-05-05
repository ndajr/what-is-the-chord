import React from 'react'

const frets = ['fret first', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret', 'fret']

function Frets() {
  return (
		<div className="frets">
			<div className="row row--1-13">
				{frets.map(item => 
					<div className="row__col">
						<div className={item}></div>
					</div>
				)}
			</div>
		</div>
  )
}

export default Frets