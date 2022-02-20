import Doller from "./Doller";
import Franc from "./Franc";

export default abstract class Money {
  protected amount: number;
  protected currencyType: string;
  abstract times(multiplier: number): Money;

  constructor(amount: number, currencyType: string) {
    this.amount = amount;
    this.currencyType = currencyType;
  }

  currency(): String {
    return this.currencyType;
  }

  /**
   * equals
   */
  public equals(object: Money): boolean {
    const money = object;

    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static doller(amount: number): Money {
    return new Doller(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}
