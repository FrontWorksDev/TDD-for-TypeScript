import Money from "./Money";

export default class Doller extends Money {
  constructor(amount: number) {
    super(amount)
  }

  /**
   * times
   */
  public times(multiplier: number): Money {
    return new Doller(this.amount * multiplier);
  }
}
