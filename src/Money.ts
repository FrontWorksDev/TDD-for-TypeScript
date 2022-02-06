export default class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  /**
   * equals
   */
  public equals(object: Money): boolean {
    const money = object;

    return this.amount === money.amount;
  }
}
