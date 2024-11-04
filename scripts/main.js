const arrowdownhero = document.querySelector(".hero svg");
let previousY = window.scrollY;
gsap.to(".hero svg", {
	y: -20,
	duration: 0.35,
	repeat: -1,
	yoyo: true,
	ease: "power1",
});

//arrow fade
arrowdownhero.style.opacity = 1;
window.addEventListener("scroll", () => {
	console.log(arrowdownhero.style.opacity);
	if (previousY < window.scrollY) {
		arrowdownhero.style.opacity = Math.max(
			0,
			Number(arrowdownhero.style.opacity) - 0.02
		);
	} else {
		arrowdownhero.style.opacity = Math.min(
			1,
			Number(arrowdownhero.style.opacity) + 0.01
		);
	}
	previousY = window.scrollY;
});
window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};
