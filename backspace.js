let s = "ab#c"
let t = "ad#c"
function backspaceChar(s,t){
    let result1 = []
    let result2 = []

    for(let i of s){
        if(i!=="#"){
            result1.push(i)
        }else{
            result1.pop(i)
        }
    }
    for(let i of t){
        if(i!=="#"){
            result2.push(i)
        }else{
            result2.pop(i)
        }
    }
    return result1.join('')===result2.join('')

}
console.log(backspaceChar(s,t))