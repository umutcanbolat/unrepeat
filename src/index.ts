import { isPrime } from './util.js';

export type UnrepeatResult = Readonly<{
  pattern: string;
  count: number;
}>;

/**
 Finds the smallest pattern that makes up the input string.
 @param text - The string to search for repeats in.
 @returns The repeating pattern and the number of times it occurs.
 */
function unrepeat(text: string): UnrepeatResult {
  const textLength = text.length;

  // Prime-length strings can only repeat as a single character or not at all.
  const startingRepeatCount = isPrime(textLength) ? textLength : 2;

  for (let repeatCount = startingRepeatCount; repeatCount <= textLength; repeatCount++) {
    if (textLength % repeatCount !== 0) {
      continue;
    }

    const pattern = text.slice(0, textLength / repeatCount);

    if (pattern.repeat(repeatCount) === text) {
      if (repeatCount === textLength) {
        return {
          pattern,
          count: repeatCount,
        };
      }

      // The first repeated chunk may still contain a smaller repeated pattern.
      const result = unrepeat(pattern);
      return {
        pattern: result.pattern,
        count: textLength / result.pattern.length,
      };
    }
  }

  return {
    pattern: text,
    count: 1,
  };
}

export default unrepeat;
