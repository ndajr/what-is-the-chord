import React from 'react'
import { noteName } from '../app/model'

const notes = []

function Notes() {
	return (
		<ul className="notes">
			{ notes.map(item => <li>{ noteName(item) }</li>) }
		</ul>
	)
}

export default Notes