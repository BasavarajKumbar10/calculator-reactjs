import React from 'react'

import Button from '../Button/Button'
import './NumberAndOps.css'

const numberAndOps = props => {
    const NUMS_AND_OPS = ['1','2','3','/',
                        '4','5','6','*',
                        '7','8','9','-',
                        'C','0','+'];

    const NUMS_AND_OPS_PATTERN = ['C','+/-','%','/',
                                    '7','8','9','*',
                                    '4','5','6','-',
                                    '1','2','3','+',
                                    '0','.','='];

    const buttonsList = NUMS_AND_OPS_PATTERN.map(val => {
        return  <Button key={val} value={val} onSelect={() => props.clicked(val)}/>
    })

    return (
        <div className="NumberAndOps">
         {buttonsList}
        </div>
    );
}

export default numberAndOps;