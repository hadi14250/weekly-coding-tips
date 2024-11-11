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
  
