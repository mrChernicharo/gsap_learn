import gsap from "gsap";

const timeline = gsap
  .timeline({
    defaults: { ease: "none", repeat: 500, yoyo: true },
  })
  .to(".rect-1", { x: 1800, duration: 45 })
  .to(".rect-2", { x: 1600, duration: 50 }, 0)
  .to(".rect-3", { x: 1500, duration: 65 }, 0)
  .timeScale(4)
  .time(160);
