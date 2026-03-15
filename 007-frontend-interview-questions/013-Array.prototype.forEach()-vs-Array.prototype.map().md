### Question
Explain `Array.prototype.forEach()` vs `Array.prototype.map()` in JavaScript. 

### Answer

To fully understand:

    Array.prototype.forEach()
    Array.prototype.map()

we must first understand several foundational JavaScript concepts:

- Objects
- Functions
- Prototypes
- Prototype chain
- How arrays work internally
- What `Array.prototype` means
- How methods become available to arrays

Only after understanding these can we properly understand `forEach()` and `map()`.

---

### Everything in JavaScript is an Object

In JavaScript, almost everything behaves like an object.

Examples:

    {}
    []
    function(){}

These are all objects internally.

Example:

    const arr = [1,2,3]

Even though it looks like a simple list, internally it is an **Array object**.

---

### What is an Array

An array is a special type of object designed to store ordered values.

Example:

    const numbers = [10,20,30]

Internally JavaScript treats it like:

    {
        0: 10,
        1: 20,
        2: 30,
        length: 3
    }

But arrays also have special methods like:

    push()
    pop()
    map()
    forEach()

Where do these methods come from?

They come from **Array.prototype**.

---

### What is a Prototype

In JavaScript, every object has a hidden property called:

    [[Prototype]]

This property points to another object.

This object acts as a **template or parent object** from which properties and methods are inherited.

This concept is called **prototypal inheritance**.

Example:

    const arr = [1,2,3]

The array `arr` does not store `map()` directly.

Instead JavaScript looks up the prototype chain:

    arr → Array.prototype → Object.prototype → null

---

### What is Array.prototype

`Array.prototype` is an object that contains **all methods available to arrays**.

Examples of methods stored there:

    map()
    forEach()
    filter()
    reduce()
    push()
    pop()
    slice()
    find()

Example conceptually:

    Array.prototype = {
        map: function(){},
        forEach: function(){},
        push: function(){},
        pop: function(){}
    }

All arrays inherit these methods.

---

### Understanding the Syntax

    Array.prototype.forEach()

Breakdown:

Array

    The constructor function that creates arrays.

prototype

    The object where shared methods are stored.

forEach

    A method stored on that prototype.

Meaning:

    forEach is a method available to all arrays.

Example usage:

    const arr = [1,2,3]

    arr.forEach()

Internally JavaScript finds the method like this:

    arr → Array.prototype → forEach

---

### Example Demonstrating Prototype Access

    const arr = [1,2,3]

    console.log(arr.__proto__ === Array.prototype)

Output:

    true

This confirms arrays inherit from `Array.prototype`.

---

### What is forEach()

`forEach()` is an array method used to **iterate over each element of an array**.

Syntax:

    array.forEach(callback)

Example:

    const numbers = [1,2,3]

    numbers.forEach(function(num) {
        console.log(num)
    })

Output:

    1
    2
    3

---

### How forEach Works Internally

Conceptually `forEach()` behaves like:

    function forEach(callback) {

        for (let i = 0; i < array.length; i++) {
            callback(array[i])
        }

    }

It simply runs the callback for each element.

---

### forEach Example

    const users = ["A","B","C"]

    users.forEach(function(user) {
        console.log("Hello", user)
    })

Output:

    Hello A
    Hello B
    Hello C

---

### Important Behavior of forEach

`forEach()` does NOT return anything.

Example:

    const result = [1,2,3].forEach(n => n * 2)

    console.log(result)

Output:

    undefined

Because `forEach` is designed for **side effects**, not transformations.

---

### What is map()

`map()` is used to **transform an array into a new array**.

Syntax:

    array.map(callback)

Example:

    const numbers = [1,2,3]

    const doubled = numbers.map(function(num) {
        return num * 2
    })

Result:

    [2,4,6]

---

### How map Works Internally

Conceptually:

    function map(callback) {

        const newArray = []

        for (let i = 0; i < array.length; i++) {
            newArray.push(callback(array[i]))
        }

        return newArray

    }

Map creates a **new array**.

---

### Map Example

    const prices = [100,200,300]

    const discounted = prices.map(function(price) {
        return price * 0.9
    })

Result:

    [90,180,270]

---

### Key Difference

forEach

    Executes code for each element.

map

    Creates a new transformed array.

---

### Comparison Example

Using forEach:

    const numbers = [1,2,3]

    const result = []

    numbers.forEach(function(n) {
        result.push(n * 2)
    })

Result:

    [2,4,6]

Using map:

    const result = numbers.map(n => n * 2)

Much cleaner.

---

### Return Value Comparison

forEach

    returns undefined

map

    returns new array

Example:

    console.log([1,2,3].forEach(x => x * 2))

Output:

    undefined

Example:

    console.log([1,2,3].map(x => x * 2))

Output:

    [2,4,6]

---

### Immutability

map does not modify the original array.

Example:

    const nums = [1,2,3]

    const doubled = nums.map(n => n * 2)

nums remains:

    [1,2,3]

---

### Chaining with map

map works well with chaining.

Example:

    const result =
        [1,2,3,4]
        .map(n => n * 2)
        .filter(n => n > 4)

Result:

    [6,8]

forEach cannot be chained.

---

### Real World Example

Example user objects:

    const users = [
        {name:"A", age:20},
        {name:"B", age:25}
    ]

Extract names using map:

    const names = users.map(u => u.name)

Result:

    ["A","B"]

---

### Performance Considerations

Performance differences are usually minimal.

However:

forEach

    better for side effects

map

    better for transformations

---

### Advanced Example

Using map with nested arrays.

    const matrix = [
        [1,2],
        [3,4]
    ]

    const doubled =
        matrix.map(row =>
            row.map(n => n * 2)
        )

Result:

    [[2,4],[6,8]]

---

### Using map with Objects

Example:

    const users = [
        {name:"A",age:20},
        {name:"B",age:30}
    ]

    const ages = users.map(user => user.age)

Result:

    [20,30]

---

### When to Use forEach

Use forEach when:

- Performing side effects
- Logging
- Updating external variables
- Executing operations without returning array

Example:

    arr.forEach(user => sendEmail(user))

---

### When to Use map

Use map when:

- Transforming arrays
- Creating new arrays
- Functional programming patterns
- Data transformation

Example:

    const ids = users.map(u => u.id)

---

### Comparison Table

| Feature | forEach | map |
|------|------|------|
| Returns value | No | Yes |
| Return type | undefined | new array |
| Mutation | Side effects | Pure transformation |
| Chainable | No | Yes |
| Use case | iteration | transformation |

---

### Summary

Understanding this required understanding prototypes.

Key ideas:

    Arrays inherit methods from Array.prototype.

`forEach()`

    Iterates over array elements.

`map()`

    Transforms elements and returns new array.

Mental model:

    forEach → do something
    map → transform something
