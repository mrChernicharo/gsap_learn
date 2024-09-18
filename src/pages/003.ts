import gsap from "gsap";

gsap.to("#fred-01", { x: 600, duration: 2 });
gsap.to("#fred-02", { x: 600, duration: 2, delay: 3 });
gsap.to("#fred-03", { x: 600, duration: 2, repeat: 1 });
gsap.to("#fred-04", { x: 600, duration: 2, repeat: -1 });
gsap.to("#fred-05", { x: 600, duration: 2, repeat: 1, yoyo: true });
gsap.to("#fred-06", { x: 600, duration: 2, repeat: -1, yoyo: true });
