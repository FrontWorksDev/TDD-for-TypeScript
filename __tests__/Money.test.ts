import Doller from "../src/Doller";
import Franc from "../src/Franc";

describe("Money modules", () => {
  test("Multiplication", () => {
    const five = new Doller(5);
    expect(new Doller(10)).toEqual(five.times(2));
    expect(new Doller(15)).toEqual(five.times(3));
  });

  test("Equality", () => {
    expect(new Doller(5).equals(new Doller(5))).toBeTruthy();
    expect(new Doller(5).equals(new Doller(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });

  test("FrancMultiplication", () => {
    const five = new Franc(5);
    expect(new Franc(10)).toEqual(five.times(2));
    expect(new Franc(15)).toEqual(five.times(3));
  });
});
