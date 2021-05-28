import { arrangeSyllables, countSyllables } from "../helpers/syllables";

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
