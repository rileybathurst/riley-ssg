import React from "react"

import { Link } from "gatsby"

const PrimaryMenu = () => {
  return (
    <ul className="primary-menu">

      <li>
        <Link to="/clicks">
          <span className="category">CLICKS</span>{/* I think spans is the most symantic way of doing this rather than any sort of headings */}
          <span className="screen-reader-text"> - </span> {/* how do screen-reader-texts deal with hypens does this even help */}
          <span className="qualifier">Graphic Design</span>
        </Link>
      </li>

      <li>
        <Link to="/code">
          <span className="category">CODE</span>
          <span className="screen-reader-text"> - </span>
          <span className="qualifier">Development</span>
        </Link>
      </li>

      <li>
        <Link to="/camera">
          <span className="category">CAMERA</span>
          <span className="screen-reader-text"> - </span>
          <span className="qualifier">Photo &amp; Video</span>
        </Link>
      </li>

      <li><hr /></li> {/* I think this is the most symantic way of doing this */}
    </ul>
  )
}

export default PrimaryMenu