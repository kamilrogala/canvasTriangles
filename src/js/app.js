window.addEventListener('DOMContentLoaded', () => {
	const canvasEl = document.querySelector('canvas');
	const ctx = canvasEl.getContext('2d');
	const cWidth = canvasEl.width;
	const cHeight = canvasEl.height;
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, cWidth, cHeight);
	ctx.fillStyle = "rgba(205,205,0,.5)";
	ctx.beginPath();
	ctx.moveTo(random(cWidth), random(cHeight));
	ctx.lineTo(random(cWidth), random(cHeight));
	ctx.lineTo(random(cWidth), random(cHeight));
	ctx.closePath();
	ctx.fill();

});

function random(a) {
	return Math.floor(Math.random() * a) + 1;
}
