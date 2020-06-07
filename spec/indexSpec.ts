import test from 'ava'

import WeightedPicker from '../src'

test('binaryPick', (t) => {
  const items = ['a', 'b', 'c', 'd']
  const weights = [1, 2, 3, 4]
  const picker = new WeightedPicker(items.length, index => weights[index])

  t.is(picker.binaryPick(0), 0)
  t.is(picker.binaryPick(0.99), 0)
  t.is(picker.binaryPick(1), 1)
  t.is(picker.binaryPick(2.99), 1)
  t.is(picker.binaryPick(3), 2)
  t.is(picker.binaryPick(5.99), 2)
  t.is(picker.binaryPick(6), 3)
  t.is(picker.binaryPick(9.99), 3)
})

test('one item, 0 weight', (t) => {
  const items = ['a']
  const weights = [0]
  const picker = new WeightedPicker(items.length, index => weights[index])

  t.is(picker.pickOne(), -1)
})

test('one item, positive weight', (t) => {
  const items = ['a']
  const weights = [1]
  const picker = new WeightedPicker(items.length, index => weights[index])

  t.is(picker.pickOne(), 0)
})

test('two item, 0 weight', (t) => {
  const items = ['a', 'b']
  const weights = [0, 0]
  const picker = new WeightedPicker(items.length, index => weights[index])

  t.is(picker.pickOne(), -1)
})
