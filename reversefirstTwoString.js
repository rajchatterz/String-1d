let s = 'abcdefg'
let k=2
let result = []
for(let i=0;i<k;i++){
    result.push(s[i])
}
result.reverse().join('')
for(let i =2;i<s.length;i++){
    result.push(s[i])
}
console.log(result.join(''))