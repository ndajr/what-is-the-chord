//================
// array helpers
//================
export const contains = ({ container, contains, returns }) => {
	if(!returns) returns = container

	const found = contains.every(item => container.includes(item))
	return found ? returns : false
}

export const filterValues = items => items.filter(item => item !== null && item !== undefined)

export const arrEquals = (a1,a2) => JSON.stringify(a1) === JSON.stringify(a2)


//================
// dom helpers
//================
const $ = document.querySelector.bind(document)
export default $

export const traverseInputs = () => Array.from(document.querySelectorAll('input'))

export const getCheckedInputs = () => traverseInputs().filter(el => el.checked)

export const uncheckInputs = () => traverseInputs().map(el => el.checked = false)

export const cleanElement = node => node.innerHTML = ''


//================
// type helpers
//================
export const tryParseInt = (str, defaultValue) => {
	if(typeof(str) === 'number') return str

	let retValue = defaultValue
	if(str !== null && str.length > 0 && !isNaN(str)) retValue = parseInt(str)
	return retValue
}