import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const playBtn = document.querySelector("#sequence .play") as HTMLButtonElement;
const pauseBtn = document.querySelector("#sequence .pause") as HTMLButtonElement;
const reverseBtn = document.querySelector("#sequence .reverse") as HTMLButtonElement;
const resetBtn = document.querySelector("#sequence .reset") as HTMLButtonElement;

const sequenceTime = document.querySelector("#sequenceTime") as HTMLDivElement;
const markerCont = document.querySelector(".markers") as HTMLDivElement;
const timelineRows = Array.from(document.querySelectorAll(".timelineUI-row"));
const sequenceDragger = document.querySelector("#sequence .timelineUI-dragger");
const timelineItems = document.querySelectorAll(".timelineUI-tween");

let sequenceTrackLength = (document.querySelector(".timelineUI") as HTMLDivElement).offsetWidth;

gsap.to(".timelineUI-tween", { opacity: 1 });

function intializeTimeline() {
  const tl = gsap.timeline({
    paused: true,
    onUpdate() {
      gsap.set(sequenceDragger, {
        x: sequenceTrackLength * tl.progress(),
      });
      sequenceTime.textContent = tl.time().toFixed(2);
    },
    onComplete() {
      playBtn.textContent = "restart";
    },
  });

  //   tl.to("#green", { x: sequenceTrackLength, xPercent: -100, duration: 0.5 })
  //     .to("#purple", { x: sequenceTrackLength, xPercent: -100, duration: 1 }, "+=0.5")
  //     .to("#orange", { x: sequenceTrackLength, xPercent: -100, duration: 1.5 }, "-=0.5");

  tl.to("#green", { x: "76vw", duration: 1 })
    .to("#purple", { x: "76vw", duration: 1.5 }, "+=0.5")
    .to("#orange", { x: "76vw", duration: 2 }, "-=0.5");

  tl.getChildren().forEach((child, index) => {
    let timelineBar = timelineItems[index];

    let width = (child.duration() / tl.duration()) * 100;
    let startPosition = (child.startTime() / tl.duration()) * 100;
    let color = (child as any)._targets[0].dataset.color;

    gsap.set(timelineBar, {
      width: `${width}%`,
      marginLeft: `${startPosition}%`,
      backgroundColor: color,
    });
  });

  return tl;
}

let tl = intializeTimeline();

markerCont.innerHTML = "";
for (let i = 0; i < tl.duration() + 1; i++) {
  markerCont.innerHTML += `<div class="secondMarker"></div>`;
}

new Draggable(sequenceDragger, {
  type: "x",
  bounds: { minX: 0, maxX: sequenceTrackLength },
  trigger: "#sequence .timelineUI-dragger div",
  onDrag() {
    tl.progress(this.x / sequenceTrackLength).pause();
  },
});

function reset() {
  tl.restart();
  tl.clear();
  tl = gsap.timeline({
    paused: true,
    onUpdate() {
      gsap.set(sequenceDragger, {
        x: sequenceTrackLength * tl.progress(),
      });
      sequenceTime.textContent = tl.time().toFixed(2);
    },
    onComplete() {
      playBtn.textContent = "restart";
    },
  });
  tl.to("#green", { x: "76vw", duration: 0.5 })
    .to("#purple", { x: "76vw", duration: 1 }, "+=0.5")
    .to("#orange", { x: "76vw", duration: 1.5 }, "-=0.5");
}

playBtn.onclick = () => {
  playBtn.textContent = "play";
  if (tl.progress() < 1) {
    tl.play();
  } else {
    reset();
    tl.play();
  }
};

pauseBtn.onclick = () => {
  tl.pause();
};

reverseBtn.onclick = () => {
  playBtn.textContent = "play";
  tl.reverse();
};

resetBtn.onclick = () => {
  reset();
};

window.addEventListener("resize", () => {
  sequenceTrackLength = (document.querySelector(".timelineUI") as HTMLDivElement).offsetWidth;
  gsap.set(sequenceDragger, {
    x: sequenceTrackLength * tl.progress(),
  });
});
