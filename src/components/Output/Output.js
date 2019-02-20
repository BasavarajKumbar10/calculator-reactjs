import React from 'react'

import './Output.css'

const output = props => {

    return(
        <div className="Output">
            <h3 className="OutputText">{props.output}</h3>
        </div>
    );
}

export default output;