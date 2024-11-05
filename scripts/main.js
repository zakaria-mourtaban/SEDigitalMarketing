const arrowdownhero = document.querySelector(".hero svg");
let previousY = window.scrollY;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
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

gsap.fromTo(
	".levelup > h2",
	{
		fontSize: "7rem",
	},
	{
		fontSize: "3rem",
		duration: 4,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0,0 0.012,-0.018 0.365,0 0.505,0.007 0.546,0.433 0.713,0.685 0.843,0.883 1,1 1,1 "
		),
		scrollTrigger: {
			trigger: ".levelup > h2",
			start: "top 100%",
			toggleActions: "play none none reverse",
		},
	}
);

gsap.fromTo(
	".levelup button",
	{
		opacity: 0,
		y: -50,
	},
	{
		y: 30,
		opacity: 1,
		duration: 6,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0,0 0.012,-0.018 0.365,0 0.505,0.007 0.546,0.433 0.713,0.685 0.843,0.883 1,1 1,1 "
		),
		scrollTrigger: {
			trigger: ".levelup > h2",
			start: "top 100%",
			toggleActions: "play none none reverse",
		},
	}
);

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
