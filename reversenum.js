const reverseNumber = (num) => {
    // Convert the number to a string.
    const strNum = num.toString();
  
    // Reverse the string.
    const reversedStrNum = strNum.split('').reverse().join('');
  
    // Convert the reversed string back to a number.
    const reversedNum = parseInt(reversedStrNum);
  
    // Return the reversed number.
    return reversedNum;
  };
  const num = 12345;

  const reversedNum = reverseNumber(num);
  
  console.log(reversedNum); // 54321
  