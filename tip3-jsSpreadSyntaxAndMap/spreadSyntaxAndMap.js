function contamination(text, char){
    return [...text].map((c) => char).join("")
  }

  console.log(contamination("MixOfLetters12345", '1'));
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
console.log(contamination("UpperCaseTEST2", 'x'));
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
console.log(contamination("dewlifjbrklgbrehwfbewjhkfbewkfewfbkjewfewfewferwfklewrbfklewrbfekljwbfkewbfkewbfewbfoghruipwgwufghuirpwfgierupigfuirw3pt4379tg3pr77gp9ugfuherpufruwfigrwgfiurfgwriufrwufbgwrpougebipfberifpreiufipuerferwibufbegiurwubigfrbeiuwfiberuwfbiuerbuifrbewuifbuierwbufbuiwrbeuifbuiebuwbfebiwfbiubewfbiuebiubeiuwfewbifebiebiuwfbifbiufbiuwbiubfiuebwiubiufbuifwbuifewbifbiw;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg", '.'));
console.log(contamination(";bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg;bwefwb;ib;feb;fe;fb;eb;fefbewbfiewfuipg4eugf4ugipf2egifeufeugi2ugifeg", '-'));
console.log(contamination("MixOfLetters12345", '9'));
console.log(contamination("dfrghtgfddfrghtgfddfrghtgfddfrghtgfddfrghtgfddfrghtgfd", '--'));
console.log(contamination("hello world", '#'));
console.log(contamination("                                                                                                                                                                                                                                                  ", '.'));
console.log(contamination("987654321", '0'));