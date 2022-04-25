const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const { width: w, height: h } = canvas;

ctx.fillStyle = '#000';
ctx.globalAlpha = 0.02;

const loopy = () => {

  requestAnimationFrame(loopy);

  ctx.save();
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 1;

  const x = Math.random() * w;
  const y = Math.random() * h;
  const radius = Math.random() * 20;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore(); // 이전의 저장 되었던 상태로 되돌아 간다 - 그리기 전에 save() 했으니 빈화면으로 돌아간다
};

requestAnimationFrame(loopy);