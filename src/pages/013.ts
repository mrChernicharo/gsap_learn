import gsap from "gsap";

const timeline = gsap.timeline({
  defaults: {
    opacity: 0,
  },
});

timeline.from("#demo", { autoAlpha: 0 });
