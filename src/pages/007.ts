import gsap from "gsap";

// gsap.to("#freds-container .fred", { y: -100 });
// gsap.to("#freds-container .fred", { y: -100, stagger: 0.1 });

// gsap.to("#freds-container .fred", { y: -100, duration: 5 });
// gsap.to("#freds-container .fred", { y: -100, duration: 5, stagger: 1 });

// gsap.to("#freds-container .fred", { y: -100, duration: 5, stagger: 0.2 });
// gsap.to("#freds-container .fred", { y: -100, duration: 2, stagger: 0.2 });

// gsap.to("#freds-container .fred", {
//   y: -100,
//   duration: 2,
//   stagger: {
//     each: 0.2,
//     // amount: 0.2,
//     from: "center",
//     // from: "end",
//     // from: "edges",
//   },
// });

gsap.to("#freds-container .fred", {
  y: -100,
  duration: 2,
  stagger: {
    each: 0.2,
    from: "end",
    repeat: -1,
    yoyo: true,
    yoyoEase: "back",
  },
});
