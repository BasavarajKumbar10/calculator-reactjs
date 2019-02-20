import React from 'react'

import Button from '../Button/Button'
import './NumberAndOps.css'

const numberAndOps = props => {
    const NUMS_AND_OPS = ['1','2','3','/',
                        '4','5','6','X',
                        '7','8','9','-',
                        'C','0','+'];

    const buttonsList = NUMS_AND_OPS.map(val => {
        return  <Button value={val}/>
    })
    return (
        <div className="NumberAndOps">
         {buttonsList}
        </div>
    );
}

export default numberAndOps;