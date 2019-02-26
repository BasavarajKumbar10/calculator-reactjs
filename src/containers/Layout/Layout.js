import React, { Component, lazy, Suspense} from 'react'

import './Layout.css'
import { doOps } from '../../utility/Utility'

const NumberAndOps = lazy(() => import('../../components/NumberAndOps/NumberAndOps'));
const Output = lazy(() => import('../../components/Output/Output'));

class Layout extends Component {
    state = {
        output: 0,
        x:0,
        y:0,
        operation:null
    }

    clicked = (val) => {
        console.log(val,'befoer',this.state.x, this.state.y, this.state.output, this.state.operation)
        
        if(val === 'C'){
            this.setState({
                operation: null,
                output: 0,
                x:0,
                y:0
            })
            return
        }

        if(val === '='){
            if(this.state.x !== 0 && this.state.y !== 0){
                const output = doOps(this.state.x, this.state.y, this.state.operation);
                this.setState({
                    operation: null,
                    output,
                    x:output,
                    y:0
                })
            }
            
            return
        }
        

        if(isNaN(val)){
            if(this.state.x !== 0 && this.state.y !== 0){
                const output = doOps(this.state.x, this.state.y, this.state.operation);
                this.setState({
                    operation: null,
                    output,
                    x:output,
                    y:0
                })
            }else{
                this.setState({
                    operation: val
                })
            }
        }else{
            let value
            let isX 
            if(this.state.output === 0 && !this.state.operation){
                value = parseInt(`${this.state.x}${val}`)
                isX = true
            }else{
                value = parseInt(`${this.state.y}${val}`)
                isX = false
            }
            this.setState(prevState => ({
                output: value,
                x:(isX? value : prevState.x),
                y:(isX? prevState.y : value)
            }))
        }
        
    }

    render(){
        console.log('after',this.state.x, this.state.y, this.state.output, this.state.operation)

        return(
            <div className="Layout">
            <Suspense fallback={<div>Loading...</div>}>
                <Output output={this.state.output}/>
                
                <NumberAndOps clicked={this.clicked}/>
            </Suspense>
            </div>
        )
    }
}

export default Layout;