import KeyControls from '../../lib/KeyControls.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const { width: w, height: h } = canvas;
const controls = new KeyControls();
console.log(ctx);
// Game setup code
let x = w / 2;
let y = h / 2;
let color = 0;
const MAX_COLOR_VALUE = 360;
const SPEED = 3;

function loopy() {
  requestAnimationFrame(loopy);

  // gaem logic code
  x += controls.x * SPEED;
  y += controls.y * SPEED;
  console.log(color);
  if (!controls.action) {
    color += 10;
  }

  if (color > MAX_COLOR_VALUE) color -= MAX_COLOR_VALUE;

  // draw the rectangle
  ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
  ctx.fillRect(x, y, 50, 50);
}

requestAnimationFrame(loopy);
