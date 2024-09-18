import gsap from "gsap";

// gsap manipulates inline styles

/* BASICS */

gsap.set("#fred", { opacity: 0 });
gsap.to("#fred", { opacity: 1, duration: 2 });
gsap.to("#fred", { x: 400, scale: 3, rotation: 360, duration: 2, delay: 2 });
gsap.to("#fred", { x: 0, scale: 1, rotation: 0, duration: 2, delay: 4 });
gsap.to("#fred", { x: 0, skewX: 30, duration: 1, delay: 6 });
gsap.to("#fred", { x: 0, skewX: -30, duration: 1, delay: 7 });
gsap.to("#fred", { x: 0, skewX: 0, delay: 8 });
