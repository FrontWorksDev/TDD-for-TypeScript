import Money from '../src/Money'

describe('Money modules', () => {
  test('Multiplication', () => {
    const five = new Money(5)
    five.times(2)
    expect(five.amount).toEqual(10)
    five.times(3)
  })
})
