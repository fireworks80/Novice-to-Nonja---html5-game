const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// ctx.strokeStyle = 'black';
// ctx.fillStyle = 'red';

// ctx.fillRect(300, 200, 50, 50);
// ctx.strokeRect(300, 200, 50, 50);

// ctx.beginPath();
// ctx.arc(325, 170, 25, 0, Math.PI * 2, false);
// ctx.fill();
// ctx.stroke();

// const deg2Rad = (deg) => (Math.PI / 180) * deg;
// const rad2Deg = (rad) => (180 / Math.PI) * red;

const { width: w, height: h } = canvas;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = '#555';

// let x, y, radius;

// for (let i = 0; i < 550; i += 1) {
//   x = Math.random() * w;
//   y = Math.random() * h;
//   radius = Math.random() * 3;

//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//   ctx.fill();
// }

// text
// ctx.fontSize = '20pt courier';
// const center = w / 2;
// ctx.textAlign = 'center';

// for (let i = 0; i < 11; i += 1) {
//   ctx.fillText("if you're in the game", center, i * 40);
// }

// ctx.strokeText('strokes the word', center, h - 30);

// img
// const img = new Image();
// img.src = 'res/images/rick.png';
// img.addEventListener('load', draw, false);

// function draw() {
//   for (let i = 0; i < 100; i += 1) {
//     const x = Math.random() * w - 50;
//     const y = Math.random() * h - 100;
//     ctx.drawImage(img, x, y);
//   }
// }

// const img = new Image();
// img.src = 'res/images/snowflake.png';
// img.addEventListener('load', draw, false);

// function draw() {
//   for (let i = 0; i < 100; i += 1) {
//     let x = Math.random() * w;
//     let y = Math.random() * h;
//     let scale = Math.random();

//     ctx.drawImage(img, x, y, w * scale, h * scale);
//   }
// }

// transformation
// function draw() {
//   for (let i = 0; i < 100; i += 1) {
//     const x = Math.random() * w;
//     const y = Math.random() * h;
//     ctx.fillRect(x, y, 50, 50);
//   }
// }

// ctx.fillStyle = 'black';
// draw();

// ctx.save();
// ctx.fillStyle = 'red';
// draw();
// ctx.restore();

// draw();

ctx.translate(w / 2, h / 2);

for (let ring = 1; ring < 28; ring++) {
  ctx.fillStyle = `hsl(${ring * 25}, 90%, 50%)`;
  for (let dots = 0; dots < ring * 6; dots++) {
    ctx.rotate((Math.PI * 2) / (ring * 6));
    ctx.beginPath();
    ctx.arc(0, ring * 15, 7, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
