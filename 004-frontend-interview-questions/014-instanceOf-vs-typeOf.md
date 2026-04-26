### Question
How does `instanceof` work in JavaScript? What is the difference between `instanceof` and `typeof`? 

### Answer

To understand:

    instanceof
    typeof

we must first understand several fundamental JavaScript concepts:

- What types are in JavaScript
- Primitive vs objects
- Constructors
- Prototypes
- Prototype chains
- How JavaScript checks types internally

Only after understanding these foundations can we properly understand how `typeof` and `instanceof` work.

---

### JavaScript Data Types

JavaScript has two broad categories of data types.

Primitive types

    number
    string
    boolean
    undefined
    null
    symbol
    bigint

Non-primitive types (objects)

    object
    array
    function
    date
    regex
    map
    set

Example:

    let num = 10
    let name = "Himanshu"
    let arr = [1,2,3]
    let obj = {a:1}

The first two are primitives.

The last two are objects.

---

### What is `typeof`

`typeof` is an **operator** used to determine the type of a value.

Syntax:

    typeof value

Example:

    typeof 10

Output:

    "number"

Example:

    typeof "hello"

Output:

    "string"

Example:

    typeof true

Output:

    "boolean"

---

### typeof with Variables

Example:

    let age = 25

    console.log(typeof age)

Output:

    number

---

### typeof Primitive Examples

Example:

    typeof 42
    typeof "hello"
    typeof true
    typeof undefined
    typeof Symbol()

Outputs:

    number
    string
    boolean
    undefined
    symbol

---

### typeof with Objects

Example:

    typeof {}

Output:

    object

Example:

    typeof []

Output:

    object

Example:

    typeof new Date()

Output:

    object

Because arrays and dates are objects internally.

---

### typeof with Functions

Example:

    function greet() {}

    typeof greet

Output:

    function

Functions are a special kind of object.

---

### Famous JavaScript Quirk

Example:

    typeof null

Output:

    object

This is a historical bug in JavaScript that cannot be fixed for compatibility reasons.

---

### Limitations of typeof

Because `typeof` only returns a few strings, it cannot differentiate between many object types.

Example:

    typeof []

Output:

    object

Example:

    typeof {}

Output:

    object

We cannot distinguish arrays from objects using `typeof`.

To solve this, JavaScript provides `instanceof`.

---

### What is instanceof

`instanceof` checks whether an object **belongs to a specific constructor or class**.

Syntax:

    object instanceof Constructor

Example:

    const arr = [1,2,3]

    arr instanceof Array

Output:

    true

---

### Basic Example

Example:

    const date = new Date()

    console.log(date instanceof Date)

Output:

    true

Because the object was created using the `Date` constructor.

---

### Understanding Constructors

Constructors are functions used to create objects.

Example:

    function Person(name) {
        this.name = name
    }

    const user = new Person("Himanshu")

Now:

    user instanceof Person

Output:

    true

---

### Why instanceof Works

When an object is created using `new`, JavaScript links the object to the constructor’s prototype.

Example:

    const arr = new Array()

Prototype chain:

    arr
     ↓
    Array.prototype
     ↓
    Object.prototype
     ↓
    null

`instanceof` checks if the constructor’s prototype exists in the object's prototype chain.

---

### How instanceof Works Internally

Conceptually:

    obj instanceof Constructor

means:

    check if Constructor.prototype exists in obj's prototype chain

Example:

    arr instanceof Array

JavaScript checks:

    arr.__proto__ === Array.prototype

If not found:

    arr.__proto__.__proto__

Continue until `null`.

---

### Example Showing Prototype Chain

Example:

    const arr = []

Check:

    arr.__proto__ === Array.prototype

Result:

    true

Therefore:

    arr instanceof Array → true

---

### Another Example

Example:

    arr instanceof Object

Output:

    true

Because the prototype chain contains:

    Array.prototype
     ↓
    Object.prototype

So arrays are also instances of Object.

---

### Custom Constructor Example

Example:

    function Animal() {}

    const dog = new Animal()

Check:

    dog instanceof Animal

Output:

    true

Also:

    dog instanceof Object

Output:

    true

Because Object.prototype is in the chain.

---

### instanceof with Classes

Example:

    class Car {}

    const tesla = new Car()

    tesla instanceof Car

Output:

    true

Classes internally use prototypes.

---

### instanceof Fails with Primitives

Example:

    let num = 10

    num instanceof Number

Output:

    false

Because primitives are not objects.

However:

    let num = new Number(10)

    num instanceof Number

Output:

    true

But using wrapper objects is generally discouraged.

---

### typeof vs instanceof

Key difference:

`typeof`

    checks primitive type.

`instanceof`

    checks prototype relationship.

---

### Example Comparison

Example:

    const arr = [1,2,3]

    typeof arr

Output:

    object

Example:

    arr instanceof Array

Output:

    true

---

### Another Example

Example:

    function test() {}

Check:

    typeof test

Output:

    function

Check:

    test instanceof Function

Output:

    true

Both work but in different ways.

---

### When to Use typeof

Use `typeof` when checking:

    primitive types
    numbers
    strings
    booleans
    undefined
    functions

Example:

    if (typeof value === "string")

---

### When to Use instanceof

Use `instanceof` when checking:

    arrays
    custom classes
    dates
    regex
    objects from constructors

Example:

    if (value instanceof Array)

---

### Real World Example

Example:

    function print(value) {

        if (typeof value === "string") {
            console.log("String value")
        }

        if (value instanceof Array) {
            console.log("Array value")
        }

    }

---

### instanceof Edge Case with Different Realms

Example:

Arrays created in different windows or iframes may fail `instanceof`.

Example:

    arr instanceof Array

May return false if the array comes from another iframe.

Better check:

    Array.isArray(arr)

---

### Safer Array Check

Instead of:

    arr instanceof Array

Use:

    Array.isArray(arr)

Example:

    Array.isArray([1,2,3])

Output:

    true

---

### Custom instanceof Behavior

JavaScript allows customizing `instanceof` behavior using:

    Symbol.hasInstance

Example:

    class Even {

        static [Symbol.hasInstance](num) {
            return num % 2 === 0
        }

    }

Check:

    4 instanceof Even

Output:

    true

---

### Summary

`typeof`

    identifies primitive types.

Returns strings like:

    "number"
    "string"
    "boolean"
    "undefined"
    "function"
    "object"

`instanceof`

    checks prototype chain relationships.

Works with:

    arrays
    classes
    constructor functions
    objects

Comparison:

| Feature | typeof | instanceof |
|------|------|------|
| Checks primitive type | Yes | No |
| Checks prototype chain | No | Yes |
| Works with objects | Limited | Yes |
| Return type | String | Boolean |

Understanding `typeof` and `instanceof` requires understanding:

- JavaScript types
- Constructors
- Prototypes
- Prototype chains

These operators help determine the type and structure of values in JavaScript programs.
