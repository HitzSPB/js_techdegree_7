import React from 'react'

const Picture = (props) => {
  return (
    <li>
    <img src={props.url} alt="" />
  </li>
  )
}

export default Picture