import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const playBtn = document.querySelector("#sequence .play") as HTMLButtonElement;
const pauseBtn = document.querySelector("#sequence .pause") as HTMLButtonElement;
const reverseBtn = document.querySelector("#sequence .reverse") as HTMLButtonElement;
const updateBtn = document.querySelector("#sequence .update") as HTMLButtonElement;

const sequenceTime = document.querySelector("#sequenceTime") as HTMLDivElement;
const markerCont = document.querySelector(".markers") as HTMLDivElement;
const timelineRows = Array.from(document.querySelectorAll(".timelineUI-row"));
const sequenceDragger = document.querySelector("#sequence .timelineUI-dragger");
const timelineItems = document.querySelectorAll(".timelineUI-tween");

let sequenceTrackLength = (document.querySelector(".timelineUI") as HTMLDivElement).offsetWidth;

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

  tl.to("#green", { x: sequenceTrackLength, duration: 0.5 })
    .to("#purple", { x: sequenceTrackLength, duration: 1 }, "+=0.5")
    .to("#orange", { x: sequenceTrackLength, duration: 1.5 }, "-=0.5");

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

  markerCont.innerHTML = "";

  for (let i = 0; i < tl.duration() + 1; i++) {
    markerCont.innerHTML += `<div class="secondMarker"></div>`;
  }

  gsap.to(".timelineUI-tween", { opacity: 1 });

  let sequenceDraggable = new Draggable(sequenceDragger, {
    type: "x",
    bounds: { minX: 0, maxX: sequenceTrackLength },
    trigger: "#sequence .timelineUI-dragger div",
    onDrag() {
      tl.progress(this.x / sequenceTrackLength).pause();
    },
  });

  return tl;
}

let tl = intializeTimeline();

playBtn.onclick = () => {
  playBtn.textContent = "play";
  if (tl.progress() < 1) {
    tl.play();
  } else {
    tl.restart();
  }
};

pauseBtn.onclick = () => {
  tl.pause();
};

reverseBtn.onclick = () => {
  playBtn.textContent = "play";
  tl.reverse();
};

updateBtn.onclick = () => {
  tl = intializeTimeline();
};

window.addEventListener("resize", () => {
  sequenceTrackLength = (document.querySelector(".timelineUI") as HTMLDivElement).offsetWidth;
  //   tl.getChildren().forEach((track) => {
  //     console.log(track);
  //     track.vars.x = sequenceTrackLength;
  //   });
});

// window.addEventListener('click', () => {

// })
