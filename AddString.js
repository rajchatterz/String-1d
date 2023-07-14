function addStrings(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const maxLength = Math.max(len1, len2);
    const result = [];
  
    let carry = 0;
    let i = len1 - 1;
    let j = len2 - 1;
  
    while (i >= 0 || j >= 0 || carry !== 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const sum = digit1 + digit2 + carry;
  
      carry = Math.floor(sum / 10);
      result.unshift(sum % 10);
  
      i--;
      j--;
    }
  
    return result.join("");
  }
console.log(addStrings("11","124"))  