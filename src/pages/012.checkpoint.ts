import gsap from "gsap";

const heroTimeline = gsap.timeline({ paused: true });
const replayBtn = document.querySelector("#hero #hero-title button") as HTMLButtonElement;

heroTimeline
  .fromTo("#hero circle", { y: "50dvh" }, { scale: 12, transformOrigin: "50% 50%", stagger: 0.1, ease: "none" })
  .to("#hero circle", { opacity: 0, duration: 0 })
  .to("#hero #hero-text h2", { visibility: "visible", duration: 0 })
  .from("#hero #hero-text h2", { opacity: 0, y: 30, stagger: 0.1 })
  .to("#hero #hero-text h2", { opacity: 0, y: -20, stagger: 0.1 }, "+=1")
  .add("end")
  .to("#hero #hero-title > *", { opacity: 1, stagger: 1, duration: 3 });

window.addEventListener("load", () => {
  heroTimeline.play();
  //   heroTimeline.play("end");
});

replayBtn.onclick = () => {
  heroTimeline.restart();
};
