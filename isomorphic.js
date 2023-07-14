let s = 'egg'
let t = 'add'

function tocheckisomorphic(s,t){
    if(s.length!==t.length){
        return false
    }

    const obj = {}
    const newSetObj = new Set()
    for(let i=0;i<s.length;i++){
        let charS = s[i]
        let charT = t[i]   
        if(obj[charS]){
            if(obj[charS]!==charT){
                return false
            }
        } else{
            if(newSetObj.has(charT)){
                return false
            }
            obj[charS]=charT
            newSetObj.add(charT)
        }
    }
    return true
}

console.log(tocheckisomorphic(s,t))