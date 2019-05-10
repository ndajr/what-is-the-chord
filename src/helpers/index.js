import dictionary from '../data/dictionary'

export const traverseInputs = () => Array.from(document.querySelectorAll('input'))

export const getCheckedInputs = (inputs) => inputs.filter(el => el.checked)

export const uncheckAllInputs = () => traverseInputs().map(el => el.checked = false)

export const nodeToArray = nodes => {
  const initialState = [-1, -1, -1, -1, -1, -1]

  const chordMap = nodes.reduce((acc, node) => {
    const [string, note] = node.id.split('-')
    acc[string] = parseInt(note)
    return acc
  }, initialState)

  return chordMap.reverse()
}

export const head = arr => arr[0]

export const tail = arr => arr[arr.length-1] 

export const getNamedTonic = note => {
  return dictionary[note] || ''
}

export const getNamedChord = noteNumber => {
  return dictionary[noteNumber]
}

export const getNamedChordList = (arr) => {
  return arr.map(getNamedChord)
}

export const numberInRangeUpTo12 = i => {
  if(i === 0) return 0
  const restBy12 = i % 12
  const response = restBy12 === 0 ? 12 : restBy12
  return response
}