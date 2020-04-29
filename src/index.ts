import { isPrime } from './util';

interface Unrepeated {
  repeated: string;
  count: number;
}

/**
 * @Method Returns the repeated string along with the repeat count.
 * @param string - The string that will be searched for repeats.
 * @returns Object containing the repeated string and the repeat count.
 */
function unrepeat(text: string): Unrepeated {
  const textLength = text.length;

  // divider: number to attempt dividing the original text
  // initially, the minimum prime number
  let divider = 2;

  // if textLength is a prime number,
  // its repeated string is either a single character, or the text itself.
  // so we will not iterate through it to find out the repeated string.
  if (isPrime(textLength)) {
    divider = textLength;
  }

  // start from the divider and iterate till the text length.
  // i: possible repeats count
  for (let i = divider; i <= textLength; i++) {
    // check if the text can be divided by i without remainder.
    // if there is a reminder, the repeats count cannot be i. So we can skip.
    if (textLength % i === 0) {
      // possible repeated string and its length.
      const repLength = textLength / i;
      const repeated = text.substr(0, repLength);

      // set this flag false if it is not repeated on every step.
      let isRepeated = true;

      // start scanning the original string to find out.
      // if possible repeated string is really repeated along the whole string.
      for (let j = 1; j < i; j++) {
        if (repeated !== text.substr(j * repLength, repLength)) {
          // if there is a mismatch, set isRepeated to false and exit loop.
          isRepeated = false;
          break;
        }
      }

      // if the possible repeated is repeated along the whole text.
      if (isRepeated) {
        // repeat count is equal to the text length, repeated is a single char.
        if (i === textLength) {
          return {
            repeated,
            count: i,
          };
        } else {
          // repeated is the part of the text, call unrepeat again on it.
          const res = unrepeat(repeated);
          return {
            repeated: res.repeated,
            count: textLength / res.repeated.length,
          };
        }
      }
    }
  }

  // if no repeats found, then return the input itself
  return {
    repeated: text,
    count: 1,
  };
}

export = unrepeat;
