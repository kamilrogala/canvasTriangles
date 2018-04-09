"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener('DOMContentLoaded', function () {
	//pseudo config
	var trianglesAmount = 10;
	var randomColors = true;
	var defaultTrianglesColor = "rgba(205,205,0,.5)";
	var backgroundColor = "#000";

	var Triangle = function () {
		function Triangle(x1, y1, x2, y2, x3, y3, color) {
			_classCallCheck(this, Triangle);

			this.x1 = x1;
			this.x2 = x2;
			this.x3 = x3;
			this.y1 = y1;
			this.y2 = y2;
			this.y3 = y3;
			this.color = color;
			this.x1V = this.x2V = this.x3V = this.y1V = this.y2V = this.y3V = 1;
		}

		_createClass(Triangle, [{
			key: "drawTriangle",
			value: function drawTriangle() {
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.moveTo(this.x1, this.y1);
				ctx.lineTo(this.x2, this.y2);
				ctx.lineTo(this.x3, this.y3);
				ctx.closePath();
				ctx.fill();
			}
		}, {
			key: "animateTriangle",
			value: function animateTriangle() {
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
		}]);

		return Triangle;
	}();

	function random(maxNumber) {
		return Math.floor(Math.random() * maxNumber) + 1;
	}

	function animateSingleTriangle() {
		requestAnimationFrame(animateSingleTriangle);
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, cWidth, cHeight);
		trianglesArray.forEach(function (singleTriangle) {
			singleTriangle.animateTriangle();
		});
	}
	var canvasEl = document.querySelector('canvas');
	var ctx = canvasEl.getContext('2d');
	var cWidth = canvasEl.width;
	var cHeight = canvasEl.height;
	var trianglesArray = [];

	for (var i = 0; i < trianglesAmount; i++) {

		var color = defaultTrianglesColor;
		if (randomColors) {
			var R = Math.floor(Math.random() * 255) + 1;
			var G = Math.floor(Math.random() * 255) + 1;
			var B = Math.floor(Math.random() * 255) + 1;
			var A = Math.random().toPrecision(2);
			color = "rgba(" + R + ", " + G + ", " + B + ", " + A + ")";
		}

		var newTriangle = new Triangle(random(cWidth), random(cHeight), random(cWidth), random(cHeight), random(cWidth), random(cHeight), color);
		trianglesArray.push(newTriangle);
	}

	animateSingleTriangle();
});
//# sourceMappingURL=app.js.map