import React, { useEffect, useState } from "react";
import BubbleSortAnimations from "./algos/Bubblesort";

const ANIMATION_SPEED = 1;
export default function Visualiser() {
  const [mainarr, setMainarr] = useState([]);

  const createNewArray = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(getRandomArbitrary(5, 500));
    }
    setMainarr([...arr]);
  };

  const bubbleSort = () => {
    const newarr = [...mainarr];

    const anim = BubbleSortAnimations(mainarr);

    const arraybar = document.getElementsByClassName("vis-element");

    for (let i = 0; i < anim.length; i++) {
      const [b1, b2] = anim[i];
      const h1 = newarr[b1];
      const h2 = newarr[b2];
      newarr[b1] = h2;
      newarr[b2] = h1;

      const newarraybar = [...arraybar]
        newarraybar.map((bar) => bar.style.backgroundColor ="turquoise")
      

      setTimeout(() => {
        arraybar[b1].style.height = `${h2}px`;
        arraybar[b1].innerHTML = h2;
        arraybar[b2].innerHTML = h1;
        arraybar[b2].style.height = `${h1}px`;
        arraybar[b1].style.backgroundColor = "green"
        arraybar[b2].style.backgroundColor = "green"
      }, i * 300 * ANIMATION_SPEED);
      setMainarr([...newarr]);

      newarraybar.map((bar) => bar.style.backgroundColor ="turquoise")
    }
  };

  return (
    <div className="main">
      <div className="header">
        <button onClick={createNewArray}>create new array</button>
        <button onClick={bubbleSort}>bubble sort</button>
      </div>
      <div className="vis-box">
        {mainarr.map((value, index) => (
          <div
            className="vis-element"
            key={index}
            style={{ height: `${value}px` ,backgroundColor: "turquoise"}}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
