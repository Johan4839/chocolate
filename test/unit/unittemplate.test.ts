import { breakChocolate } from "../../src/template";

describe("We need to break a chocolate bar into smaller pieces", () => {
  it("We start small with a 2x1 bar which takes 1 breake to cut into 1x1 pieces ", () => {
    expect(breakChocolate(2, 1)).toEqual(1);
  });
});
