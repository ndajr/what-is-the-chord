const startApp = () => {getNotas().then(console.log).catch(console.log)};
const elements = document.querySelectorAll('input');
const element = document.getElementById("instrumento");
element.addEventListener('change', startApp);

function getNotas() {
	let collection = {};
  
	return new Promise((resolve, reject) => {
  	if (!elements.length) return reject(Error('quebrou'));
 
    elements.forEach((item, index) => {
    	if (item.checked) collection[item.name] = item.value;
    });
 
    resolve(collection);
  });
}
