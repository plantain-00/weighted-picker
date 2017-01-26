[![Dependency Status](https://david-dm.org/plantain-00/weighted-picker.svg)](https://david-dm.org/plantain-00/weighted-picker)
[![devDependency Status](https://david-dm.org/plantain-00/weighted-picker/dev-status.svg)](https://david-dm.org/plantain-00/weighted-picker#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/weighted-picker.svg?branch=master)](https://travis-ci.org/plantain-00/weighted-picker)
[![npm version](https://badge.fury.io/js/weighted-picker.svg)](https://badge.fury.io/js/weighted-picker)
[![Downloads](https://img.shields.io/npm/dm/weighted-picker.svg)](https://www.npmjs.com/package/weighted-picker)

# weighted-picker
A library to pick a random item from weighted array.

#### install

`npm i weighted-picker`

#### usage

```ts
import { WeightedPicker } from "weighted-picker";

const items = [
    { name: "a", weight: 1 },
    { name: "b", weight: 2 },
    { name: "c", weight: 3 },
    { name: "d", weight: 4 },
];
const picker = new WeightedPicker(items.length, index => items[index].weight);
let index = picker.pickOne();
index = picker.pickOne();
index = picker.pickOne();
```

or

```ts
import { WeightedPicker } from "weighted-picker";

const items = ["a", "b", "c", "d"];
const weights = [1, 2, 3, 4];
const picker = new WeightedPicker(items.length, index => weights[index]);
let index = picker.pickOne();
index = picker.pickOne();
index = picker.pickOne();
```
