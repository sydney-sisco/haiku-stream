import { hyphenateSync } from "hyphen/en";

const syllables = [5, 7, 5];

export async function arrangeSyllables(words){

  const arranged = { 
    0: {
      text: '',
      syllableCount: 0
    },
    1: {
      text: '',
      syllableCount: 0
    },
    2: {
      text: '',
      syllableCount: 0
    },
    complete: false,
  }

  console.log('function input:', words);

  // split on new line character and assign each line
  const lines = words.trim().split('\n');

  for (const [i, line] of lines.entries()) {
    arranged[i].text = hyphenateSync(line, { hyphenChar: "%" });
  }
  

  // hyphenate(text, { hyphenChar: "%" })

  return arranged;
};

// http://writeahaiku.com/

export function countSyllables(line){

  // return null if empty string or whitespace
  if (!line || line.trim() === '') {
    return null;
  }

  const hyphenated = hyphenateSync(line.trim(), { hyphenChar: "%" })

  console.log('see:', hyphenated);

  let syllableCount = 1;
  for (const char of hyphenated) {
    if (char === ' ' || char === '%')
      syllableCount++;
  }

  return syllableCount;
}

export function validSyllables(counts) {
  if(!counts) {
    return false;
  }

  if(counts.length !== 3) {
    return false;
  }

  if(counts[0] !== 5 || counts[1] !== 7 || counts[2] !== 5) {
    return false;
  }

  return true;
}
