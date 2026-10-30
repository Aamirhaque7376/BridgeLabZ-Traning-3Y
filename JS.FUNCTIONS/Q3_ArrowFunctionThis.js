// Q3: Arrow function and the value of this

const user = {
    name: "Aamir",

    // Arrow functions do not create their own 'this'.
    // They use 'this' from the surrounding (lexical) scope.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

// In a normal function, 'this' refers to the object before the dot
// when the function is called as user.showName().
const correctedUser = {
    name: "Aamir",

    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

correctedUser.showName();

// In Node.js CommonJS files, the top-level 'this' is usually module.exports.
// In a browser script, it may be the global object. In either case,
// it is not the user object, so this.name is generally undefined.
