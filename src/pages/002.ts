import gsap from "gsap";

gsap.from("#fred-01", { x: 400, scale: 3, duration: 3 });

gsap.fromTo("#fred-02", { x: 700 }, { x: 200, y: 100, scale: 3, duration: 3 });
