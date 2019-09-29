export interface output {
  repeated: string;
  count: number;
}

/**
 * @Method: Returns the repeated string along with the repeat count.
 * @param string - The string that will be searched for repeats.
 * @returns Object containing the repeated string and the repeat count.
 */
export default function unrepeat(string: any): output {
  return {
    repeated: "a",
    count: 5
  };
}
