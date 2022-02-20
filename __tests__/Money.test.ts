import Money from "../src/Money";

describe("Money modules", () => {
  test("Multiplication", () => {
    const five: Money = Money.doller(5);
    expect(Money.doller(10)).toEqual(five.times(2));
    expect(Money.doller(15)).toEqual(five.times(3));
  });

  test("Equality", () => {
    expect(Money.doller(5).equals(Money.doller(5))).toBeTruthy();
    expect(Money.doller(5).equals(Money.doller(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.doller(5))).toBeFalsy();
  });

  test("FrancMultiplication", () => {
    const five: Money = Money.franc(5);
    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });

  test("Currency", () => {
    expect(Money.doller(1).currency()).toEqual("USD")
    expect(Money.franc(1).currency()).toEqual("CHF")
  })
});
