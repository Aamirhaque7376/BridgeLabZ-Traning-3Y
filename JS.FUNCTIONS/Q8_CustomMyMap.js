// Q8: Implement a custom array method named myMap()

// Add myMap to Array.prototype so arrays can use it.
// A non-enumerable property keeps it out of normal for...in enumeration.
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError("myMap called on null or undefined");
        }

        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const source = Object(this);
        const result = new Array(source.length);

        for (let index = 0; index < source.length; index++) {
            // Match built-in map(): skip array holes.
            if (index in source) {
                result[index] = callback.call(
                    thisArg,
                    source[index],
                    index,
                    source
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true
});

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (number) {
    return number * 2;
});

console.log("Original:", numbers);
console.log("Using myMap():", doubledNumbers);

// Arrow function example:
console.log([1, 2, 3].myMap(number => number * 2));
