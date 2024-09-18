import gsap from "gsap";

gsap.to("#fred-01", { x: 400, duration: 3 });
gsap.to("#fred-02", { x: 400, duration: 3, ease: "linear" });
gsap.to("#fred-03", { x: 400, duration: 3, ease: "bounce" }); // out is the default
gsap.to("#fred-04", { x: 400, duration: 3, ease: "bounce.in" });
gsap.to("#fred-05", { x: 400, duration: 3, ease: "bounce.inOut" });
gsap.to("#fred-06", { x: 400, duration: 3, ease: "elastic" });
gsap.to("#fred-07", { x: 400, duration: 3, ease: "back" });
gsap.to("#fred-08", { x: 400, duration: 3, ease: "back(3)" });
