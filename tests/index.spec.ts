import root from "../src";
import type { Parent, Literal } from "unist";
describe("It works", () => {
  it("succeed", () => {
    expect(root.children[0].type).toBe("heading");
    expect((root.children[0] as Parent).children[0].type).toBe("text");
    expect(((root.children[0] as Parent).children[0] as Literal).value).toBe(
      "Hello"
    );
  });
});
