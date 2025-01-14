function palindrome(str) {
  const newStr = str.toLowerCase().replace(/\W|_/g, '');
  const palinStr = newStr.split('').reverse().join('');

  return newStr === palinStr
}

palindrome("eye");