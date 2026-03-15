### Question
Explain the `new` operator in JavaScript. What exactly does it do? 

### Answer

To fully understand the `new` operator, we must first understand several foundational JavaScript concepts:

- Objects
- Functions
- Constructor functions
- Prototypes
- Prototype chains
- The `this` keyword

The `new` operator is closely connected to how JavaScript creates objects and how prototypal inheritance works.

---

### Everything in JavaScript is Object-Based

JavaScript is an object-oriented language built around **objects and prototypes**.

An object stores key-value pairs.

Example:

    const user = {
        name: "Himanshu",
        age: 25
    }

Objects can also be created using **constructor functions**.

This is where the `new` operator becomes important.

---

### What is a Constructor Function

A constructor function is a normal function that is used to create objects.

Example:

    function Person(name, age) {
        this.name = name
        this.age = age
    }

This function is intended to create new person objects.

But simply calling it normally does not create an object.

Example:

    const p = Person("Himanshu", 25)

This will not behave as expected.

To create objects from constructor functions we use the **new operator**.

---

### Basic Example of new

Example:

    function Person(name, age) {
        this.name = name
        this.age = age
    }

    const user = new Person("Himanshu", 25)

Result:

    { name: "Himanshu", age: 25 }

Here `new` creates a new object using the constructor.

---

### What Exactly Does new Do

When `new` is used with a function, JavaScript performs **four internal steps**.

These steps are the key to understanding `new`.

Steps performed:

1 Create a new empty object

2 Set the prototype of that object

3 Bind `this` to the new object

4 Return the object

Let's examine each step in detail.

---

### Step 1: Create a New Empty Object

When `new` is executed:

    const user = new Person("Himanshu", 25)

JavaScript first creates an empty object.

Conceptually:

    const obj = {}

---

### Step 2: Link Prototype

Next JavaScript links the object to the constructor prototype.

Conceptually:

    obj.__proto__ = Person.prototype

This creates the prototype chain:

    obj → Person.prototype → Object.prototype → null

This is what allows instances to inherit methods.

---

### Step 3: Bind this

Next JavaScript executes the constructor function.

But it binds `this` to the newly created object.

Conceptually:

    Person.call(obj, "Himanshu", 25)

Inside the constructor:

    this.name = name
    this.age = age

becomes:

    obj.name = "Himanshu"
    obj.age = 25

---

### Step 4: Return the Object

Finally JavaScript returns the newly created object.

Equivalent conceptual implementation:

    function myNew(Constructor, ...args) {

        const obj = {}

        obj.__proto__ = Constructor.prototype

        Constructor.apply(obj, args)

        return obj
    }

---

### Full Conceptual Equivalent

Using `new`:

    const user = new Person("Himanshu", 25)

Conceptually equals:

    const obj = {}

    obj.__proto__ = Person.prototype

    Person.call(obj, "Himanshu", 25)

    return obj

---

### Example with Methods

Example:

    function Person(name) {
        this.name = name
    }

    Person.prototype.sayHello = function() {
        console.log("Hello " + this.name)
    }

    const user = new Person("Himanshu")

Now the object can use the prototype method.

Example:

    user.sayHello()

Output:

    Hello Himanshu

---

### Why Prototype Linking is Important

Without prototype linking, objects would not inherit methods.

Prototype chain:

    user
     ↓
    Person.prototype
     ↓
    Object.prototype
     ↓
    null

JavaScript searches up this chain when accessing properties.

---

### Example Showing Prototype Chain

Example:

    const user = new Person("Himanshu")

Check:

    user.__proto__ === Person.prototype

Result:

    true

---

### Using new with Built-in Constructors

JavaScript has many built-in constructors.

Examples:

    new Object()
    new Array()
    new Date()
    new Map()
    new Set()

Example:

    const arr = new Array(1,2,3)

Equivalent shorthand:

    const arr = [1,2,3]

---

### Using new with Classes

ES6 introduced classes which internally use the same mechanism.

Example:

    class Person {

        constructor(name) {
            this.name = name
        }

        greet() {
            console.log("Hello " + this.name)
        }

    }

Creating instance:

    const user = new Person("Himanshu")

Classes still rely on prototypes.

Prototype chain:

    user → Person.prototype → Object.prototype

---

### What Happens if Constructor Returns Something

If a constructor explicitly returns an object, that object is returned instead.

Example:

    function Test() {

        this.a = 1

        return { b: 2 }

    }

    const obj = new Test()

Result:

    { b: 2 }

The returned object overrides the default object.

---

### Returning Primitive Values

If constructor returns primitive values, they are ignored.

Example:

    function Test() {

        this.a = 1

        return 10

    }

    const obj = new Test()

Result:

    { a: 1 }

---

### Forgetting new

Example:

    function Person(name) {
        this.name = name
    }

    const user = Person("Himanshu")

Without `new`, `this` refers to the global object (in non-strict mode).

This can cause bugs.

Example result:

    window.name = "Himanshu"

---

### Detecting Missing new

Some constructors guard against this.

Example:

    function Person(name) {

        if (!(this instanceof Person)) {
            return new Person(name)
        }

        this.name = name
    }

---

### Advanced: Implementing new Manually

Example:

    function myNew(Constructor, ...args) {

        const obj = {}

        Object.setPrototypeOf(obj, Constructor.prototype)

        const result = Constructor.apply(obj, args)

        if (typeof result === "object" && result !== null) {
            return result
        }

        return obj
    }

Usage:

    const user = myNew(Person, "Himanshu")

---

### Real World Usage

The `new` operator is commonly used with:

Classes

    new User()

Data structures

    new Map()
    new Set()

Dates

    new Date()

Regular expressions

    new RegExp()

---

### Summary

The `new` operator creates objects from constructor functions.

It performs four key steps:

1 Create empty object

    {}

2 Link prototype

    obj.__proto__ = Constructor.prototype

3 Bind this

    Constructor.call(obj)

4 Return object

    return obj

This mechanism is fundamental to JavaScript’s **object creation and prototype inheritance system**.

Understanding `new` requires understanding:

- constructors
- prototypes
- prototype chains
- the `this` keyword

These concepts form the core of JavaScript's object model.
