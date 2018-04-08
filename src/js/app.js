window.addEventListener('DOMContentLoaded', () => {
	//pseudo config
	const trianglesAmount = 10;
	const randomColors = true;
	const defaultTrianglesColor = "rgba(205,205,0,.5)";
	const backgroundColor = "#000";

	class Triangle {
		constructor(x1, y1, x2, y2, x3, y3, color) {
			this.x1 = x1;
			this.x2 = x2;
			this.x3 = x3;
			this.y1 = y1;
			this.y2 = y2;
			this.y3 = y3;
			this.color = color;
			this.x1V = this.x2V = this.x3V = this.y1V = this.y2V = this.y3V = 1;
		}

		drawTriangle() {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.moveTo(this.x1, this.y1);
			ctx.lineTo(this.x2, this.y2);
			ctx.lineTo(this.x3, this.y3);
			ctx.closePath();
			ctx.fill();
		}
		animateTriangle() {
			ctx.fillStyle = this.color;

			if (this.x1 == cWidth || this.x1 == 0) {
				this.x1V = -this.x1V;
			}
			if (this.x2 == cWidth || this.x2 == 0) {
				this.x2V = -this.x2V;
			}
			if (this.x3 == cWidth || this.x3 == 0) {
				this.x3V = -this.x3V;
			}

			if (this.y1 == cHeight || this.y1 == 0) {
				this.y1V = -this.y1V;
			}
			if (this.y2 == cHeight || this.y2 == 0) {
				this.y2V = -this.y2V;
			}
			if (this.y3 == cHeight || this.y3 == 0) {
				this.y3V = -this.y3V;
			}
			this.x1 -= this.x1V;
			this.x2 -= this.x2V;
			this.x3 -= this.x3V;
			this.y1 -= this.y1V;
			this.y2 -= this.y2V;
			this.y3 -= this.y3V;
			this.drawTriangle();
		}
	}

	function random(maxNumber) {
		return Math.floor(Math.random() * maxNumber) + 1;
	}

	function animateSingleTriangle() {
		requestAnimationFrame(animateSingleTriangle);
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, cWidth, cHeight);
		trianglesArray.forEach((singleTriangle) => {
			singleTriangle.animateTriangle();
		});
	}
	const canvasEl = document.querySelector('canvas');
	const ctx = canvasEl.getContext('2d');
	const cWidth = canvasEl.width;
	const cHeight = canvasEl.height;
	const trianglesArray = []

	for (let i = 0; i < trianglesAmount; i++) {

		let color = defaultTrianglesColor;
		if (randomColors) {
			const R = Math.floor(Math.random() * 255) + 1;
			const G = Math.floor(Math.random() * 255) + 1;
			const B = Math.floor(Math.random() * 255) + 1;
			const A = (Math.random()).toPrecision(2);
			color = `rgba(${R}, ${G}, ${B}, ${A})`;
		}

		const newTriangle = new Triangle(
			random(cWidth),
			random(cHeight),
			random(cWidth),
			random(cHeight),
			random(cWidth),
			random(cHeight),
			color
		);
		trianglesArray.push(newTriangle);
	}

	animateSingleTriangle();

});
