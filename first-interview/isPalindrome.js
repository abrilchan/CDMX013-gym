const isPalindrome = (stringWordsInput) => {
    let stringWords = stringWordsInput.replace(/\s/g, '');
    return stringWords === [...stringWords].reverse().join('') ? true : false
  }