export default class Money {
  protected amount: number;
  protected currencyType: string;

  constructor(amount: number, currencyType: string) {
    this.amount = amount;
    this.currencyType = currencyType;
  }

  currency(): String {
    return this.currencyType;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currencyType)
  }


  /**
   * equals
   */
  public equals(object: Money): boolean {
    const money = object;

    return (
      this.amount === money.amount &&
      this.currency() === money.currency()
    );
  }

  static doller(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
