import gsap from "gsap";

const demo = document.querySelector("#demo") as HTMLDivElement;
const title = document.querySelector("#title") as HTMLDivElement;
// const freds = document.querySelectorAll("#fred img"); // <- will not work
const time = document.querySelector("#time") as HTMLDivElement;

const timeline = gsap
  .timeline()
  .from(demo, { opacity: 0, duration: 2 })
  .from(title, { scale: 0, ease: "back", duration: 2 }, 1.5)
  .from("#freds img", { y: 200, ease: "back", stagger: 0.1, duration: 1 }, "<-1")
  .add("time") // label
  .from(time, { x: 400 })
  .to(time, { scale: 1.2, repeat: 1, yoyo: true, duration: 0.2 })
  .to(time, { scale: 0.95, repeat: 1, yoyo: true, duration: 0.1 });

// play from label
// timeline.play("time");

/* 
    tweens can take a third argument
    it's called the gsap.Position argument! 

    no argument
    - play the tween as soon as the previous tween finishes
     
    
    number argument
    - play tween at absolute time (in seconds)

    string arguments
    "+=1"
    - play tween one second after the end of the previous tween
    
    "-=1"
    - play tween one second before the end of the previous tween
    
    "<"
    - play tween at the beginning of the previous tween

    "<+1"
    - play tween one second after the beginning of the previous tween
    
    "<-1"
    - play tween one second before the beginning of the previous tween
 
 */
