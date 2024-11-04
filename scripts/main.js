const arrowdownhero = document.querySelector(".hero svg");
let previousY = window.scrollY;
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero svg", {
	y: -3,
	duration: 0.35,
	repeat: -1,
	yoyo: true,
	ease: "power1",
});
[".img1", ".img2", ".img3", ".img4", ".img5"].forEach((img) => {
	gsap.fromTo(
		img,
		{
			maxWidth: "75%",
			boxShadow: "rgba(77, 148, 230, 0) 0px 0px",
		},
		{
			maxWidth: "80%",
			boxShadow:
				"rgba(77, 148, 230, 0.4) -15px 15px, rgba(77, 148, 230, 0.3) -30px 30px, rgba(77, 148, 230, 0.05) -45px 45px",
			duration: 1,
			ease: "linear",
			scrollTrigger: {
				trigger: img,
				start: "top 100%",
				toggleActions: "play none none reverse",
			},
		}
	);
});

//arrow fade
arrowdownhero.style.opacity = 1;
window.addEventListener("scroll", () => {
	if (previousY < window.scrollY) {
		arrowdownhero.style.opacity = Math.max(
			0,
			Number(arrowdownhero.style.opacity) - 0.02
		);
	} else {
		arrowdownhero.style.opacity = Math.min(
			1,
			Number(arrowdownhero.style.opacity) + 2.01
		);
	}
	previousY = window.scrollY;
});
window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};
