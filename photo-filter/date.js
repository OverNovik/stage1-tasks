const nextPicBtn = document.querySelector('.btn-next')
const fileInput = document.querySelector('input[type="file"]')
const img = document.querySelector('img')

let i = 0;

const allImages = getImages();

function getImages() {
  const baseUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
  const dayParts = ['day', 'night', 'evening', 'morning'];
  const imagesUrls = [];

  dayParts.forEach(dayPart => {
    const dayPartUrl = `${baseUrl}${dayPart}/`;
    for (let i = 1; i < 21; i++) {
      const photoImageName = i > 9 ? `${i}.jpg` : `0${i}.jpg`;
      imagesUrls.push(`${dayPartUrl}${photoImageName}`);
    }
  })
  return imagesUrls
};

function viewBgImage(src) {
  const body = document.querySelector('body')

  img.src = src;
};

function changeImageHandler() {
  const index = i % allImages.length;
  const imageSrc = allImages[index];
  
  viewBgImage(imageSrc);
  i++;
  activeBtn()
};

nextPicBtn.addEventListener('click', changeImageHandler);

fileInput.addEventListener('change', (e) => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onloadend = (e) => {
    img.src = reader.result;
  }
  reader.readAsDataURL(file);
})
// function setRandomImage(greetingText, color, time) {
//     const currentImages = imagesMap[time];
//     const greeting = document.getElementById('greeting');

//     greeting.textContent = greetingText;
//     document.body.style.img = `url(${currentImages[Math.floor(Math.random() * currentImages.length)]})`;
//     document.body.style.color = color;
// };