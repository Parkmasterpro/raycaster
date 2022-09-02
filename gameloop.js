		function forever() {
			setCanvasInfo();
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
			game();

			window.requestAnimationFrame(forever);
		};
