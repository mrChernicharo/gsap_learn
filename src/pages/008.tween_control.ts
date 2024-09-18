import gsap from "gsap";

const playBtn = document.querySelector("#play") as HTMLButtonElement;
const pauseBtn = document.querySelector("#pause") as HTMLButtonElement;
const reverseBtn = document.querySelector("#reverse") as HTMLButtonElement;
const restartBtn = document.querySelector("#restart") as HTMLButtonElement;

const fredTween = gsap.to("#fred", {
  duration: 3,
  x: 600,
  ease: "linear",
  /* tween doesn't play by default */
  paused: true,
});

playBtn.onclick = () => fredTween.play();
pauseBtn.onclick = () => fredTween.pause();
reverseBtn.onclick = () => fredTween.reverse();
restartBtn.onclick = () => fredTween.restart();
