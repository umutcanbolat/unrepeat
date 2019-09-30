export interface output {
  repeated: string;
  count: number;
}

/**
 * @Method: Returns the repeated string along with the repeat count.
 * @param string - The string that will be searched for repeats.
 * @returns Object containing the repeated string and the repeat count.
 */
export default function unrepeat(text: string): output {
  // start from the minimum prime number and iterate till the text length
  for (let i = 2; i <= text.length; i++) {
    // check if text can be divided by i without remainder
    if (text.length % i === 0) {
      // possible repeated string and its length
      const repLength = text.length / i;
      const repeated = text.substr(0, repLength);

      // set this flag false if it is not repeated on every step
      let isRepeated = true;

      // start scanning the original string
      for (let j = 1; j < i; j++) {
        if (repeated !== text.substr(j * repLength, repLength)) {
          isRepeated = false;
          break;
        }
      }

      if (isRepeated) {
        // repeated is the text itself
        if (i === text.length) {
          return {
            repeated,
            count: i,
          };
        } else {
          // repeated is the part of the text, call unrepeat recursively
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
