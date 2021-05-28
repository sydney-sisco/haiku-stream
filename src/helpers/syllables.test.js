import { arrangeSyllables } from "../helpers/syllables";

const words = []


test("arrangeSyllables returns an array", () => {
  const result = arrangeSyllables();
  expect(Array.isArray(result)).toBe(true);
});
