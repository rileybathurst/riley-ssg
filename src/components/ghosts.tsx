import React, { useEffect, useRef } from "react"

/*------------------------------------*\
  #GHOSTS
\*------------------------------------*/

function Presence() {

  // console.log('presence');
  const ref = useRef();

  useEffect(() => {

    const gho = ref.current;
    // console.log(gho.children);
    // console.log(gho.children.children);

    for (let item of gho.children) {
      // console.log(item.offsetHeight);

      if (item.children.length > 0) {
        // console.log(item.children);
        // console.log(item.children[0]);
        // console.log(item.children[0].classList);
        item.children[0].classList.remove('presence');
      }
    }
  });

  return (
    <div
      className="ghost-titles"
      ref={ref}
    >
      <div>{/* stay gold */}</div>

      {/* theres a span inside each div to get the background colors */}
      <div><span className="presence">C</span></div>
      <div><span className="presence">L</span></div>
      <div><span className="presence">I</span></div>
      <div><span className="presence">C</span></div>
      <div><span className="presence">K</span></div>
      <div><span className="presence">S</span></div>
      <div>{/* stay gold */}</div>

      <div>{/* stay gold */}</div>
      <div><span className="presence">C</span></div>
      <div><span className="presence">O</span></div>
      <div><span className="presence">D</span></div>
      <div><span className="presence">E</span></div>
      <div>&nbsp;</div>
      <div><span className="presence">&amp;</span></div>
      <div>{/* stay gold */}</div>

      <div>{/* stay gold */}</div>
      <div><span className="presence">C</span></div>
      <div><span className="presence">A</span></div>
      <div><span className="presence">M</span></div>
      <div><span className="presence">E</span></div>
      <div><span className="presence">R</span></div>
      <div><span className="presence">A</span></div>
      <div>{/* stay gold */}</div>
    </div>
  )

}

const Ghosts = () => (
  <div className="background-primary">
    <Presence />
  </div>
)

export default Ghosts
