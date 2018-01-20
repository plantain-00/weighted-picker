import WeightedPicker from '../dist/nodejs'

it('', () => {
  const items = ['a', 'b', 'c', 'd']
  const weights = [1, 2, 3, 4]
  const picker = new WeightedPicker(items.length, index => weights[index])

  expect(picker.binaryPick(0)).toEqual(0)
  expect(picker.binaryPick(0.99)).toEqual(0)
  expect(picker.binaryPick(1)).toEqual(1)
  expect(picker.binaryPick(2.99)).toEqual(1)
  expect(picker.binaryPick(3)).toEqual(2)
  expect(picker.binaryPick(5.99)).toEqual(2)
  expect(picker.binaryPick(6)).toEqual(3)
  expect(picker.binaryPick(9.99)).toEqual(3)
})
