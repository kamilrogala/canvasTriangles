window.addEventListener('DOMContentLoaded', () => {
	const trianglesAmount = 10;
	const canvasEl = document.querySelector('canvas');
	const ctx = canvasEl.getContext('2d');
	const cWidth = canvasEl.width;
	const cHeight = canvasEl.height;
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, cWidth, cHeight);
	ctx.fillStyle = "rgba(205,205,0,.5)";
	for (let i = 0; i < trianglesAmount; i++) {
		drawTriangle();
	}

	function random(a) {
		return Math.floor(Math.random() * a) + 1;
	}

	function drawTriangle() {
		ctx.beginPath();
		ctx.moveTo(random(cWidth), random(cHeight));
		ctx.lineTo(random(cWidth), random(cHeight));
		ctx.lineTo(random(cWidth), random(cHeight));
		ctx.closePath();
		ctx.fill();
	}
});
