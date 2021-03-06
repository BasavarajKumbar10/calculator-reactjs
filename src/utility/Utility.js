
export const doOps = (x, y, operation) => {
    let value = Number(x);
    let intOutput = parseInt(y)
    if(operation != null){
        value = operate(value, intOutput,operation)
    }else{
        value = parseInt(`${(intOutput !== '0')?intOutput:''}${value}`)
    }
    return value

}

const operate = (x, y, operation) => {
    switch(operation){
            case '/': return x / y
            case '*': return x * y
            case '-': return x - y
            case '+': return x + y
            case '%': return x % y
            case 'C': return '0'
            default: 
    }
}