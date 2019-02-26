import React from 'react'

import './Button.css'

const button = (props) => (
    <button className="Button" onClick={props.onSelect}>{props.value}</button>
)

export default button;