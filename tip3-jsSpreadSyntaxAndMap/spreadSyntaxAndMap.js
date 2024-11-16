function contamination(text, char){
    return [...text].map((c) => char).join("")
  }

console.log(contamination("abc", 'z'));
console.log(contamination("", 'z'));
console.log(contamination("hello world", '*'));
console.log(contamination("12345", '0'));
console.log(contamination("Test", 'T'));
console.log(contamination("a", 'b'));
console.log(contamination("abcdefghijk", 'x'));
console.log(contamination("Contamination", 'c'));
console.log(contamination(" ", '-'));
console.log(contamination("UpperCaseTEST", 'L'));
console.log(contamination("xyz123", '1'));
console.log(contamination("!@#$%^", '?'));
console.log(contamination("Long text input!", '!'));
console.log(contamination("   ", '+'));
console.log(contamination("Special\nChars", '-'));
console.log(contamination("EdgeCase", ''));
console.log(contamination("Repeat", 'r'));
console.log(contamination("Multiple    spaces", '.'));
console.log(contamination("Symbols!@#$%", '9'));
console.log(contamination("MixOfLetters12345", 'X'));
console.log(contamination("MixOfLetters12345", '2'));

  