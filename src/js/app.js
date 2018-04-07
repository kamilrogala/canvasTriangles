window.addEventListener('DOMContentLoaded', () => {
	class Triangle {
		constructor(x1, y1, x2, y2, x3, y3) {
			this.x1 = x1;
			this.x2 = x2;
			this.x3 = x3;
			this.y1 = y1;
			this.y2 = y2;
			this.y3 = y3;
		}

		drawTriangle() {
			ctx.beginPath();
			ctx.moveTo(this.x1, this.y1);
			ctx.lineTo(this.x2, this.y2);
			ctx.lineTo(this.x3, this.y3);
			ctx.closePath();
			ctx.fill();
		}
	}

	function random(a) {
		return Math.floor(Math.random() * a) + 1;
	}
	const trianglesAmount = 10;
	const canvasEl = document.querySelector('canvas');
	const ctx = canvasEl.getContext('2d');
	const cWidth = canvasEl.width;
	const cHeight = canvasEl.height;
	const trianglesArray = []
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, cWidth, cHeight);
	ctx.fillStyle = "rgba(205,205,0,.5)";

	for (let i = 0; i < trianglesAmount; i++) {
		const newTriangle = new Triangle(
			random(cWidth),
			random(cHeight),
			random(cWidth),
			random(cHeight),
			random(cWidth),
			random(cHeight)
		);
		trianglesArray.push(newTriangle);
	}
	trianglesArray.forEach((singleTriangle) => {
		singleTriangle.drawTriangle();
	});
});
