import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const text01 = `export function joinMultipartMessages(messages) {`;
const text02 = `    const test = 'test';`;
const text03 = `    return test;`;
const text04 = `}`;

// typing
gsap
  .timeline({ defaults: { ease: "none" } })
  .to("code .line-1", { duration: 2, text: text01 })
  .to("code .line-2", { duration: 1, text: text02 }, "+=0.8")
  .to("code .line-3", { duration: 0.8, text: text03 }, "+=0.6")
  .to("code .line-4", { duration: 0.1, text: text04 }, "+=0.4");

// glowing
gsap.to("code .line", {
  opacity: 0.75,
  duration: 0.1,
  repeat: -1,
  yoyo: true,
  ease: "none",
});

// const text = new TextPlugin()
