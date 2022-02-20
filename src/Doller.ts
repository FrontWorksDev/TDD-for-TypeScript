import Money from "./Money";

export default class Doller extends Money {
  constructor(amount: number, currencyType: string) {
    super(amount, currencyType);
  }

  /**
   * times
   */
  public times(multiplier: number): Money {
    return Money.doller(this.amount * multiplier);
  }
}
