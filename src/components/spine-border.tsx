import React, { useState, useEffect, useRef } from "react"

const SpineBorder = () => {

  const ref = useRef();
  // console.log(ref);

  useEffect(() => {
    const spine = ref.current;
    createObserver();
    let prevRatio = 0.0;

    function createObserver() {
      let observer;

      let options = {
        threshold: buildThresholdList()
      };

      observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(spine);
    }

    // trust the math
    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 5;

      for (let i = 1.0; i <= numSteps; i++) {
        let ratito = i / numSteps;
        thresholds.push(ratito);
      }

      thresholds.push(0);
      return thresholds;
    }

    function handleIntersect(entries) {
      entries.forEach((entry) => {
        // when going out fo frame
        if (entry.intersectionRatio > prevRatio) {
          setRatio(entry.intersectionRatio * 5);
        } else {
          setRatio(entry.intersectionRatio * 5);
        }

        prevRatio = entry.intersectionRatio;
      });
    }

  });

  const [ratio, setRatio] = useState(0);
  // console.log(ratio);

  // starting style
  const spineBorder = {
    marginTop: `${ratio}rem`,
    transition: `2s`,
  }

  return (
    <div
      style={spineBorder}
      ref={ref}
      className="spine-border"
    >{/* stay gold */}</div>
  )
}

export default SpineBorder
