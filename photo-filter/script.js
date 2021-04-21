
const inputs = document.querySelectorAll('.filters input');
const outputs = document.querySelectorAll('.filters output');
const fullscreenBtn = document.querySelector('.fullscreen');


function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

fullscreenBtn.addEventListener('click', () => {
    if(document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    if(document.fullscreenEnabled) document.exitFullscreen();
});