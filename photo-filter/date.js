const nextPicBtn = document.querySelector('.btn-next')
const fileInput = document.querySelector('input[type="file"]')
const img = new Image();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const download = document.querySelector('.btn-save');
let i = 0;

const allImages = getImages();

function getImages() {
  const baseUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
  const dayParts = ['day', 'night', 'evening', 'morning'];
  const imagesUrls = [];

  dayParts.forEach(dayPart => {
    const today = new Date();
    const hour = today.getHours();
    if (hour < 12 && hour > 6 || hour === 6) {
      dayPart = 'morning';
  } else if (hour < 18 && hour > 12 || hour === 12) {
      dayPart = 'day';
  } else if (hour < 24 && hour > 18 || hour === 18){
      dayPart = 'evening';
  } else {
      dayPart = 'night';
  }
    const dayPartUrl = `${baseUrl}${dayPart}/`;
    for (let i = 1; i < 21; i++) {
      const photoImageName = i > 9 ? `${i}.jpg` : `0${i}.jpg`;
      imagesUrls.push(`${dayPartUrl}${photoImageName}`);
    }
  })
  return imagesUrls;
};

function changeImageHandler() {
  const index = i % allImages.length;
  const imageSrc = allImages[index];
  
  drawImage(imageSrc);
  i++;
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

function drawImage(src) {
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = src;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = img.style.filter
    ctx.drawImage(img, 0, 0);
  };
}

download.addEventListener('click', () => {
  const dataUrl = canvas.toDataURL("image/jpeg");
  drawImage();
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = dataUrl;
  link.click();
  link.delete;
});

changeImageHandler();