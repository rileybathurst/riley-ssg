import { Link } from "gatsby"
import React from "react"

const PrimaryMenu = () => {
  return (
    <ul>
      <li><Link to="/clicks">clicks</Link></li>
      <li><Link to="/code">Code</Link></li>
      <li><Link to="/camera">Camera</Link></li>
      <li><hr /></li> {/* does this work? */}
    </ul>
  )
}

export default PrimaryMenu