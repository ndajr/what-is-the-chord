const contains = (arr, el) => {
  return arr.every(item => item.includes(el))
}

const toUnique = () => {
  return this.filter((curr, index) => index === this.indexOf(curr))
}

const suffix = {
  0: null,
  1: null,
  2: null,
  3: {
    '': [4,7],
    'min': [3,7],
    'dim': [3,6],
    'aug': [4,8]
  },
  4: {
    '7': [4, 7, 10],
    'maj7': [4, 7, 11],
    'm(maj7)': [3, 7, 11],
    'm7': [3, 7, 10],
    'aug(maj7)': [4, 8, 11],
    'aug7': [4, 8, 10],
    'm7(dim5)': [3, 6, 10],
    'dim7': [3, 6, 9],
    '7(dim5)': [4, 6, 10]
  }
}

const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const convertIntegerToNote = integer => chromaticScale[integer]

export const convertNoteToInteger = note => chromaticScale.indexOf(note)

export const interval = (a, b) => b >= a ? b - a : 12 - a + b

const head = arr => arr[0]

const isArrayOfNotes = arr => arr.every(item => typeof(item) === 'number') 

const isChord = arr => arr.length >= 3

export const intervals = arr => {
  if(!isArrayOfNotes(arr)) return false 
  if(!isChord(arr)) return head(arr)

  return arr.map(nota => interval(arr[0], nota))
}

export const chordSuffix = arr => {
  if(!Array.isArray(arr) || !arr.length) return ''

  const arrUnique = toUnique(arr)
  const interval = intervals(arrUnique)
  const searchIndex = suffix[interval.length]
  const returns = searchIndex ? Object.keys(searchIndex).find(value => contains(interval, searchIndex[value])) : ''
  return returns ? returns : ''
}