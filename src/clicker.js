let clicker = 50;
const startTime = Date.now();

// 화면에 랜덤하게 이미지를 위치 시킨다.
const sync = (el, pos) => {
  el.style.left = `${pos.x}px`;
  el.style.top = `${pos.y}px`;
};

const checkGameOver = () => {
  document.querySelector('#remain').innerHTML = clicker;

  if (clicker) return;
  const taken = Math.round((Date.now() - startTime) / 1000);
  alert(`De-rick-ed in ${taken} seconds!`);
};

// click된 이미지를 삭제 한다.
const removeClicker = (e) => {
  e.target.parentNode.removeChild(e.target);
  clicker -= 1;
  checkGameOver();
};

// 이미지를 추가 한다.
const addClicker = () => {
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300,
  };
  const image = new Image();
  image.src = '/res/images/rick.png';
  image.style.position = 'absolute';
  image.addEventListener('click', removeClicker, false);
  document.querySelector('#board').appendChild(image);
  sync(image, pos);
};

for (let i = 0; i < clicker; i += 1) {
  addClicker();
}
