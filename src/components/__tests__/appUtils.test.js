import { assignUniqueID } from "../Utils/appUtils";

describe("<appUtils /> Component:", () => {
  it("Validate 'assignUniqueID' should always return unique number with less than 10 iterations.", () => {
    const uniqueNumbers = [];
    for (let i = 0; i < 10; i++) uniqueNumbers.push(assignUniqueID());

    // Assertion
    expect(new Set([...uniqueNumbers]).size).toBe(uniqueNumbers.length);
  });

  it("Validate 'assignUniqueID' should always return unique number with greater than 50 iterations.", () => {
    const uniqueNumbers = [];
    for (let i = 0; i < 51; i++) uniqueNumbers.push(assignUniqueID());

    // Assertion
    expect(new Set([...uniqueNumbers]).size).toBe(uniqueNumbers.length);
  });
});
