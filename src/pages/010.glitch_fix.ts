import gsap from "gsap";

const circle = document.querySelector("#circle") as HTMLDivElement;
const circleBG = document.querySelector("#bg") as HTMLDivElement;

function runAnimation() {
  //   gsap.from(circleBG, { scale: 0.5, duration: 1, ease: "circ" }); // <- glitch situation
  gsap.fromTo(circleBG, { scale: 0.5, duration: 1 }, { scale: 1, ease: "circ" });

  console.log(gsap.getProperty(circleBG, "scale")); // <- initial scale gets smaller and smaller if we're using .from
}

circle.onmouseenter = runAnimation;
circle.onmouseleave = runAnimation;
