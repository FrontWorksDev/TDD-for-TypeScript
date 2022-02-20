import Money from "./Money";

export default class Franc extends Money {
  constructor(amount: number, currencyType: string) {
    super(amount, currencyType);
  }

  /**
   * times
   */
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
