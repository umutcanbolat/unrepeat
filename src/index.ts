export interface Output {
  repeated: string;
  count: number;
}

/**
 * @Method: Returns the repeated string along with the repeat count.
 * @param string - The string that will be searched for repeats.
 * @returns Object containing the repeated string and the repeat count.
 */
export default function unrepeat(text: string): Output {
  // i: possible repeats count
  // start from the minimum prime number and iterate till the text length.
  for (let i = 2; i <= text.length; i++) {
    // check if the text can be divided by i without remainder.
    // if there is a reminder, the repeats count cannot be i. So we can skip.
    if (text.length % i === 0) {
      // possible repeated string and its length.
      const repLength = text.length / i;
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
        if (i === text.length) {
          return {
            repeated,
            count: i,
          };
        } else {
          // repeated is the part of the text, call unrepeat again on it.
          const res = unrepeat(repeated);
          return {
            repeated: res.repeated,
            count: text.length / res.repeated.length,
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
