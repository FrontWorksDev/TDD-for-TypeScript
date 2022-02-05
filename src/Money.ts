export default class Doller {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  /**
   * times
   */
  public times(multiplier: number): Doller {
    return new Doller(this.amount * multiplier);
  }

  /**
   * equals
   */
  public equals(object: Doller): boolean {
    const dollar = object;

    return this.amount === dollar.amount;
  }
}
