import gsap from "gsap";

const timeline = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: "back",
  },
});

function init() {
  timeline
    .from("#demo", {
      // autoAlpha sets opacity to 1 and visibility to inherit
      // use it in combination with visibility hidden to prevent flashing
      autoAlpha: 0,
      ease: "linear",
    })
    .from("h1", { x: 100 })
    .from("h2", { x: -100 }, "<")
    .from("p", { y: 30 }, "-=0.2")
    .from("button", { y: 50 }, "-=0.4")
    .from(
      "#items > g",
      {
        transformOrigin: "50% 50%",
        scale: 0,
        stagger: 0.1,
        // stagger: { each: 0.1, from: "start" },
      },
      "-=0.3"
    );
}

// prevent flashing: ensure the animation will run only after all js has been loaded
window.addEventListener("load", () => {
  init();
});
