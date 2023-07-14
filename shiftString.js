let s = "abcde"
let goal = "cdeab"

function rotateString(s,goal){
    if(s.length!==goal.length){
        return false
    }
    let result = s+s
    console.log(result)
    return result.includes(goal)
}
console.log(rotateString(s,goal))