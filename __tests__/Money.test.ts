import Doller from '../src/Money'

describe('Money modules', () => {
  test('Multiplication', () => {
    const five = new Doller(5)
    expect(new Doller(10)).toEqual(five.times(2))
    expect(new Doller(15)).toEqual(five.times(3))
  })

  test('Equality', () => {
    expect(new Doller(5).equals(new Doller(5))).toBeTruthy()
    expect(new Doller(5).equals(new Doller(6))).toBeFalsy()
  })
})
