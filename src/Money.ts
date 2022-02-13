import Doller from "./Doller";
import Franc from "./Franc";

export default abstract class Money {
  protected amount: number;
  abstract times(multiplier: number): Money

  constructor(amount: number) {
    this.amount = amount;
  }

  /**
   * equals
   */
  public equals(object: Money): boolean {
    const money = object;

    return this.amount === money.amount && this.constructor.name === money.constructor.name;
  }

  static doller(amount: number): Money {
    return new Doller(amount)
  }

  static franc(amount: number): Money {
    return new Franc(amount)
  }
}
