import majorScale from '../data/majorScale'
import dictionary from '../data/dictionary'
import intervals from '../data/intervals'
import { contains, tryParseInt } from './helpers'

export const tonesWithNotes = arrNotes => 
	majorScale
	.map(item => contains({container: item.root, contains: arrNotes, returns: item}))
	.filter(item => item)


export const mainTone = ({notes, fromTone}) => {
	const found = fromTone.filter(item => item.root[0] === notes[0])
	if(!found) return false

	const rootNotes = found[0].root
	const tonic = rootNotes[0]
	return tonic
}

export const getTonic = items => noteName(items[0])


export const noteName = notes => {
	if(typeof(notes) == 'number') {
    return dictionary[notes]
  }

	if(typeof(notes) == 'string') {
		let parse = tryParseInt(notes)
		return typeof(parse) == 'number' ? dictionary[parse] : false
	}
	if(Number.isInteger(notes)) {
		return dictionary[notes]
	}
	if(Array.isArray(notes)) {
		return notes.map(note => dictionary[note])
	}
	return false
}

export const chord = arr => {
	let tones = tonesWithNotes(arr)
	let tone = mainTone({notes: arr, fromTone: tones})
	return noteName(tone)
}

export const possibleRoots = notes =>
	notes.reduce((roots, curr, index, arr) => {
		var remaining = arr.slice()
		remaining.splice(index,1)
        return [...roots, [curr, ...remaining]]
	}, [])

const intervalCalculator = (a, b) => b >= a ? b - a : 12 - a + b

const getIntervals = arr => arr.filter(item => item !== undefined && item !== null).map(nota => intervalCalculator(arr[0], nota))

export const suffix = arr => {
	if(arr === null || arr.length < 3) return ''

	const notes = getIntervals(arr)
	const found = Object.keys(intervals).find(value => {
		let key = intervals[value]
		return notes.$contains(key) === true
	})

	return found
}




// var roots = possibleRoots(arr)
// var main = roots[0]
// var smaller = Math.min(...main)
// var reduced = main.map(item => item - smaller)
// var ascSort = reduced.sort((a, b) => a - b)
// var intervals = ascSort.map(item => intervalo[item])
// console.log(intervals)
