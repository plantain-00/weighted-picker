/**
 * @public
 */
export default class WeightedPicker {
    private values: number[] = [];
    constructor(private count: number, getWeight: (index: number) => number) {
        if (typeof count !== "number" || count < 0 || isNaN(count)) {
            this.count = 0;
        }

        for (let i = 0; i < this.count; i++) {
            let weight = getWeight(i);
            if (typeof weight !== "number" || weight < 0 || isNaN(weight)) {
                weight = 0;
            }
            if (i === 0) {
                this.values.push(weight);
            } else {
                this.values.push(weight + this.values[this.values.length - 1]);
            }
        }
    }
    public pickOne() {
        if (this.count === 0) {
            return -1;
        }
        if (this.count === 1) {
            return 0;
        }
        const randomValue = Math.random() * this.values[this.values.length - 1];

        return this.binaryPick(randomValue);
    }
    public binaryPick(value: number) {
        if (value < this.values[0]) {
            return 0;
        }
        let left = 0;
        let right = this.values.length - 1;
        while (left < right) {
            const middle = Math.floor((left + right) / 2);
            if (value < this.values[middle]) {
                right = middle - 1;
            } else if (value >= this.values[middle + 1]) {
                left = middle + 1;
            } else {
                return middle + 1;
            }
        }
        return right + 1;
    }
}
