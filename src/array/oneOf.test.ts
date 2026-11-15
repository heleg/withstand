import { describe, expect, it } from "bun:test";
import { oneOf } from "./oneOf";

describe("oneOf", () => {
  it("returns true for a value in the array", () => {
    const isFruit = oneOf(["apple", "banana", "orange"]);

    expect(isFruit("apple")).toBe(true);
    expect(isFruit("orange")).toBe(true);
  });

  it("returns false for a value outside the array", () => {
    expect(oneOf(["apple", "banana"])("tomato")).toBe(false);
  });

  it("returns false for an empty array", () => {
    expect(oneOf<string>([])("apple")).toBe(false);
  });

  it("filters matching values regardless of their index in the input", () => {
    const shoppingList = ["apple", "banana", "orange"];
    const available = ["banana", "tomato", "potato", "apple", "cherry"];

    const bought = available.filter(oneOf(shoppingList));

    expect(bought).toEqual(["banana", "apple"]);
  });

  it("preserves the order and duplicates of matching values", () => {
    const available = ["banana", "apple", "banana", "tomato"];

    expect(available.filter(oneOf(["apple", "banana"]))).toEqual([
      "banana",
      "apple",
      "banana",
    ]);
  });
});
