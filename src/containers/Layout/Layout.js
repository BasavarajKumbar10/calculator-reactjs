import React, { Component} from 'react'

import Output from '../../components/Output/Output'
import NumbersAndOps from '../../components/NumberAndOps/NumberAndOps'
import './Layout.css'

class Layout extends Component {
    render(){
        return(
            <div className="Layout">
                <Output output='100'/>
                <NumbersAndOps />
            </div>
        )
    }
}

export default Layout;