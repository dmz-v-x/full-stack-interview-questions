### Question
What is Prototypal Inheritance in JavaScript?

### Answer

Prototypal inheritance is the mechanism in JavaScript that allows objects to inherit properties and methods from other objects. Instead of using classical class-based inheritance like many other programming languages, JavaScript uses a **prototype-based inheritance model**.

Every JavaScript object has an internal link to another object called its **prototype**. When we try to access a property or method on an object, JavaScript first looks at the object itself. If the property is not found, it then looks at the object's prototype, and continues this process up the prototype chain until the property is found or the chain ends.

---

## 1. What is a Prototype?

A **prototype** is an object from which other objects inherit properties and methods.

In JavaScript, every object has an internal hidden property called:

```
[[Prototype]]
```


This can be accessed using:

- `__proto__` (legacy but widely used)
- `Object.getPrototypeOf()`
- `Object.setPrototypeOf()`

Example:

    const obj = {}

    console.log(obj.__proto__ === Object.prototype)
    // true

This means the object `obj` inherits from `Object.prototype`.

---

## 2. Prototype Chain

When JavaScript looks for a property, it searches through a **chain of prototypes**.

Example:

    const person = {
        greet() {
            console.log("Hello")
        }
    }

    const user = {
        name: "Himanshu"
    }

    user.__proto__ = person

    user.greet()

Execution flow:

1. JavaScript checks `user` for `greet`
2. Not found
3. Looks inside `person`
4. Finds `greet`
5. Executes it

Prototype chain:

    user → person → Object.prototype → null

---

## 3. Property Lookup in Prototype Chain

JavaScript follows a specific lookup order when accessing a property.

Example:

    const animal = {
        eats: true
    }

    const rabbit = {
        jumps: true
    }

    rabbit.__proto__ = animal

    console.log(rabbit.eats)

Lookup steps:

1. Check `rabbit`
2. Not found
3. Check `animal`
4. Found → return value

---

## 4. Overriding Prototype Properties

If a property exists on both the object and its prototype, the object's property overrides the prototype property.

Example:

    const animal = {
        sound: "generic"
    }

    const dog = {
        sound: "bark"
    }

    dog.__proto__ = animal

    console.log(dog.sound)

Output:

    bark

Even though `animal.sound` exists, the object property takes priority.

---

## 5. Writing to Prototype Properties

When modifying a property, JavaScript behaves differently.

Example:

    const animal = {
        eats: true
    }

    const rabbit = {}

    rabbit.__proto__ = animal

    rabbit.eats = false

Now:

    rabbit.eats → false
    animal.eats → true

This creates a new property on `rabbit` instead of modifying `animal`.

---

## 6. Methods in Prototype

Prototypes are useful for sharing methods across multiple objects.

Example:

    const userMethods = {
        greet() {
            console.log("Hello user")
        }
    }

    const user1 = {
        name: "Alice"
    }

    const user2 = {
        name: "Bob"
    }

    user1.__proto__ = userMethods
    user2.__proto__ = userMethods

Both objects can now access `greet`.

---

## 7. Constructor Functions and Prototype

Before ES6 classes, JavaScript used **constructor functions** to create objects.

Example:

    function Person(name) {
        this.name = name
    }

    Person.prototype.sayHello = function() {
        console.log("Hello " + this.name)
    }

    const p1 = new Person("Himanshu")
    const p2 = new Person("Rahul")

    p1.sayHello()
    p2.sayHello()

Here:

- `sayHello` is stored once on `Person.prototype`
- All instances share the same method

Prototype chain:

    p1 → Person.prototype → Object.prototype → null

---

## 8. The new Keyword and Prototype

When `new` is used with a constructor function, JavaScript performs several steps.

Example:

    const p = new Person("Himanshu")

Steps performed:

1. Create an empty object
2. Set object's prototype to `Person.prototype`
3. Bind `this` to the new object
4. Execute constructor
5. Return the object

Equivalent conceptually:

    const obj = {}
    obj.__proto__ = Person.prototype
    Person.call(obj, "Himanshu")

---

## 9. Object.create()

`Object.create()` allows creating an object with a specific prototype.

Example:

    const animal = {
        eats: true
    }

    const rabbit = Object.create(animal)

    rabbit.jumps = true

Prototype chain:

    rabbit → animal → Object.prototype → null

---

## 10. Checking Prototype Relationships

JavaScript provides several methods.

### isPrototypeOf()

Checks if an object exists in the prototype chain.

Example:

    animal.isPrototypeOf(rabbit)

---

### Object.getPrototypeOf()

Returns the prototype of an object.

Example:

    Object.getPrototypeOf(rabbit)

---

### Object.setPrototypeOf()

Sets the prototype of an object.

Example:

    Object.setPrototypeOf(rabbit, animal)

---

## 11. Built-in Prototype Chains

JavaScript built-in objects also follow prototype chains.

Example:

    const arr = [1,2,3]

Prototype chain:

    arr → Array.prototype → Object.prototype → null

This is why arrays have methods like:

- map()
- filter()
- push()

Because they exist on `Array.prototype`.

---

## 12. Prototype vs __proto__

Important distinction:

prototype
- Property of constructor functions
- Used when creating new objects

__proto__
- Accessor property on objects
- Points to the object's prototype

Example:

    function A() {}

    const obj = new A()

    A.prototype === obj.__proto__

Result:

    true

---

## 13. Class Syntax and Prototypes

ES6 classes are syntactic sugar over prototypes.

Example:

    class Person {

        constructor(name) {
            this.name = name
        }

        greet() {
            console.log("Hello " + this.name)
        }

    }

Equivalent prototype version:

    function Person(name) {
        this.name = name
    }

    Person.prototype.greet = function() {
        console.log("Hello " + this.name)
    }

Classes still use prototype chains internally.

---

## 14. Prototype Chain End

All prototype chains end with:

    Object.prototype

And finally:

    null

Example:

    Object.getPrototypeOf(Object.prototype)

Result:

    null

This means there is no further prototype.

---

## 15. Why Prototypal Inheritance Exists

Benefits include:

1. Memory efficiency  
   Methods are shared across objects instead of duplicated.

2. Dynamic inheritance  
   Changes in prototype affect all inheriting objects.

3. Flexible object relationships  
   Objects can inherit from other objects directly.

4. Core design of JavaScript object system

---

## 16. Common Pitfalls

### Modifying built-in prototypes

Avoid:

    Array.prototype.myMethod = function(){}

This can break libraries and cause conflicts.

---

### Deep prototype chains

Very long chains slow down property lookup.

---

### Using __proto__ directly

Prefer:

    Object.create()
    Object.getPrototypeOf()
    Object.setPrototypeOf()

---

## 17. Visual Representation

Example chain:

    const animal = { eats: true }

    const rabbit = Object.create(animal)

    const longEar = Object.create(rabbit)

Prototype chain:

    longEar
        ↓
    rabbit
        ↓
    animal
        ↓
    Object.prototype
        ↓
        null

Property lookup flows upward through this chain.

---

## Summary

Prototypal inheritance is JavaScript’s core inheritance model where objects inherit properties and methods from other objects through the prototype chain.

Key concepts:

- Every object has a prototype
- JavaScript searches properties through the prototype chain
- Constructor functions use `.prototype`
- `new` connects objects to prototypes
- `Object.create()` directly creates prototype relationships
- ES6 classes are built on top of prototypes

Understanding prototypal inheritance is essential for mastering how JavaScript objects, classes, and built-in methods work internally.
