import { countSyllables, validSyllables } from "../helpers/syllables";

test('countSyllables returns null if passed nothing', () => {
  const result = countSyllables();
  expect(result).toBeNull();
});

test('countSyllables counts spaces correctly', () => {
  const result = countSyllables('this or that');
  expect(result).toBe(3);
});

test('countSyllables counts syllables of 1 word', () => {
  const result = countSyllables('mountainous');
  expect(result).toBe(3);
});

test('countSyllables counts syllables of multiple words', () => {
  const result = countSyllables('mountainous region');
  expect(result).toBe(5);
});

test('countSyllables trims whitespace', () => {
  const result = countSyllables(' mountainous region ');
  expect(result).toBe(5);
});

test('validSyllables returns false if given no params', () => {
  const result = validSyllables();
  expect(result).toBe(false);
})

test('validSyllables returns false if not given an array of length 3', () => {
  const result = validSyllables([5, 7]);
  expect(result).toBe(false);
})

test('validSyllables returns false if first count is wrong', () => {
  const result = validSyllables([0, 7, 5]);
  expect(result).toBe(false);
})

test('validSyllables returns false if second count is wrong', () => {
  const result = validSyllables([5, 8, 5]);
  expect(result).toBe(false);
})

test('validSyllables returns false if third count is wrong', () => {
  const result = validSyllables([5, 7, 9]);
  expect(result).toBe(false);
})

test('validSyllables returns true if given 5, 7, 5 count', () => {
  const result = validSyllables([5, 7, 5]);
  expect(result).toBe(true);
})
