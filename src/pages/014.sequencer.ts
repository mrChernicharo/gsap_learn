import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

let width = (document.querySelector(".timelineUI") as HTMLDivElement).offsetWidth;
let sequenceTrackLength = width;

const tl = gsap.timeline({ onUpdate: sequenceUpdateDragger, paused: true });
tl.to("#green", { x: width, xPercent: -100, duration: 2 })
  .to("#purple", { x: width, xPercent: -100, duration: 1 })
  .to("#orange", { x: width, xPercent: -100, duration: 1 });

gsap.to(".timelineUI-tween", { opacity: 1 });
const sequenceTime = document.querySelector("#sequenceTime") as HTMLDivElement;
const markerCont = document.querySelector(".markers") as HTMLDivElement;
markerCont.innerHTML = "";
const sequenceDragger = document.querySelector("#sequence .timelineUI-dragger");
let timelineItems = document.querySelectorAll(".timelineUI-tween");
let children = tl.getChildren();
let time = tl.duration();

for (let i = 0; i < time + 1; i++) {
  markerCont.innerHTML += `<div class="secondMarker"></div>`;
}

function sequenceUpdateDragger() {
  gsap.set(sequenceDragger, {
    x: sequenceTrackLength * tl.progress(),
  });
  sequenceTime.textContent = tl.time().toFixed(2);
}

let sequenceDraggable = new Draggable(sequenceDragger, {
  type: "x",
  bounds: { minX: 0, maxX: sequenceTrackLength },
  trigger: "#sequence .timelineUI-dragger div",
  onDrag: function () {
    tl.progress(this.x / sequenceTrackLength).pause();
  },
});

children.forEach((child, index) => {
  let timelineBar = timelineItems[index];
  let duration = child.duration();
  let startTime = child.startTime();
  let width = (duration / time) * 100;
  let startPosition = (startTime / time) * 100;
  let color = (child as any)._targets[0].dataset.color;

  gsap.set(timelineBar, {
    width: `${width}%`,
    marginLeft: `${startPosition}%`,
    backgroundColor: color,
  });
});

const playBtn = document.querySelector("#sequence .play") as HTMLButtonElement;
playBtn.onclick = () => {
  if (tl.progress() < 1) {
    tl.play();
  } else {
    tl.restart();
  }
};

function onResize() {}
window.addEventListener("resize", onResize);
