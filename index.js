console.clear();
const subcontainer = document.querySelector(".subcontainer");

const randomZposition = () => {
	const randomNumber = Math.floor(Math.random() * 2000) + 1;

	return randomNumber % 2 === 0 ? randomNumber : -randomNumber;
};

const randomBlur = (zPosition) => {
	let positivePositionValue = Math.abs(zPosition);
	let positionString = positivePositionValue.toString().padStart(4, "0");
	let stringArr = positionString.split("");
	stringArr.splice(2, 0, ".");
	let finalString = stringArr.join("");
	return finalString;
};

const createCircle = () => {
	const circle = document.createElement("div");
	let position = randomZposition();
	circle.classList.add("circle");
	circle.style.top = `${Math.floor(Math.random() * window.innerHeight) + 1}px`;
	circle.style.left = `${Math.floor(Math.random() * window.innerWidth) + 1}px`;
	circle.style.setProperty("--z-position", `${position}px`);
	circle.style.setProperty("--blur-value", `${randomBlur(position)}px`);
	circle.style.setProperty("--hue", `${Math.floor(Math.random() * 361)}`);
	subcontainer.appendChild(circle);
};

for (let i = 0; i < 350; i++) {
	createCircle();
}
