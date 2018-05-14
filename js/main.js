import { handleStatus } from './utils/promise-helpers.js';

var collection = {};
var elements = document.getElementById("instrumento").elements;


function getNotas() {
	return new Promise(function(resolve, reject) {
		if(elements.length > 0) {
			for (var i = 0; i<elements.length; i++) {
				if(elements[i].checked) {
			    	collection[elements[i].name] = elements[i].value;
				}
			}
	        resolve(collection);
	    }
	    else {
	        reject(Error("quebrou"));
	    }
	}
)};

function startApp() {
	getNotas()
		.then(handleStatus)
		.catch(console.log);
}

Array
    .from(elements)
    .forEach(element => element.addEventListener('click', startApp));