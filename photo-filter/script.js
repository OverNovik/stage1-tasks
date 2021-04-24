
const inputs = document.querySelectorAll('.filters input');
const outputs = document.querySelectorAll('.filters output');
const fullscreenBtn = document.querySelector('.fullscreen');
const resetBtn = document.querySelector('.btn-reset');



function handleUpdate(e) {
  const suffix = e.target.dataset.sizing || '';

	setFilter(e.target.name, e.target.value + suffix);
	e.target.nextElementSibling.innerHTML = e.target.value;
}

resetBtn.addEventListener('click', () => {
	inputs.forEach(input => {
		let resetValue = 0;

		if (input.name === 'saturate') {
			resetValue = 100;
		}
		const suffix = input.dataset.sizing || '';

		setFilter(input.name, resetValue + suffix)
		input.value = resetValue
		input.nextElementSibling.innerHTML = resetValue;
	})
})

function setFilter(name, value) {
	document.documentElement.style.setProperty(`--${name}`, value);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));
 
fullscreenBtn.addEventListener('click', () => {
  if(document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  if(document.fullscreenEnabled) document.exitFullscreen();
});
