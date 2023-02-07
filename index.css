* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,
body {
	height: 100%;
}

body {
	background-color: black;
	overflow: hidden;
}

.container {
	height: 100%;
	perspective: 2000px;
}

.subcontainer {
	height: 100%;
	position: relative;
	transform-style: preserve-3d;
	animation: rotate 30s linear infinite;
}

.circle {
	--blur-value: 0px;
	--z-position: 0px;
	--hue: 0;
	width: 45px;
	aspect-ratio: 1;
	border-radius: 100%;
	position: absolute;
	background-color: magenta;
	background-image: radial-gradient(
		circle at 65% 15%,
		white 1px,
		hsl(var(--hue), 70%, 65%) 3%,
		hsl(var(--hue), 70%, 35%) 60%,
		hsl(var(--hue), 70%, 65%) 100%
	);
	transform: translateZ(var(--z-position)) rotateY(0deg);
  animation: rotateY 30s linear infinite;
	filter: blur(var(--blur-value));
}

@keyframes rotateY {
	from {
		transform: translateZ(var(--z-position)) rotateY(0deg);
	}

	to {
		transform: translateZ(var(--z-position)) rotateY(-360deg);
	}
}

@keyframes rotate {
	from {
		transform: rotateY(0deg);
	}
	to {
		transform: rotateY(360deg);
	}
}
