import React from 'react'
import Guitar from '../components/Guitar'
import Body from '../components/Body'
import Frets from '../components/Frets'
import Dots from '../components/Dots'
import Strings from '../components/Strings'
import body from '../data/body'

function GuitarContainer() {
  const NUMBER_FRETS = 13
  const NUMBER_STRINGS = 6
  const frets = [...Array(NUMBER_FRETS).keys()]
  const strings = [...Array(NUMBER_STRINGS).keys()]

  const nodeToArray = nodes => {
    const initialState = [-1, -1, -1, -1, -1, -1]
  
    const chordMap = nodes.reduce((acc, node) => {
      const [string, note] = node.id.split('-')
      acc[string] = parseInt(note)
      return acc
    }, initialState)
  
    return chordMap.reverse()
  }
  
  const traverseInputs = () => Array.from(document.querySelectorAll('input'))
  
  const getCheckedInputs = (inputs) => inputs.filter(el => el.checked)
  
  const parseNotes = () => {
    const inputs = traverseInputs()
		const checkedInputs = getCheckedInputs(inputs)
    const response = nodeToArray(checkedInputs)
    console.log('response', response)
    return response
  }

  const getNote = el => el.addEventListener('change', () => {
		return parseNotes()
	})

  return (
    <Guitar>
      <Frets frets={frets} />
      <Dots frets={frets} />
      <Strings strings={strings} />
      <Body body={body} getNote={getNote} />
    </Guitar>
  )
}

export default GuitarContainer
