import { Link } from "gatsby"
import React from "react"

const PrimaryMenu = () => {
  return (
    <ul className="primary-menu">
{/*   keep the old stuff as who knows if this will be messy between different tops
      <li><Link to="/clicks">clicks</Link></li>
      <li><Link to="/code">Code</Link></li>
      <li><Link to="/camera">Camera</Link></li>
      <li><hr /></li> does this work? */}


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