### Question
What is the `this` keyword in JavaScript? Explain it from absolute basics to advanced level with examples.

### Answer

The `this` keyword in JavaScript refers to the **object that is currently executing the function**.

Unlike many other programming languages, the value of `this` in JavaScript **depends on how a function is called**, not where the function is defined.

This makes `this` one of the most important and sometimes confusing concepts in JavaScript.

---

### 1. Basic Idea of `this`

`this` refers to **the object that is calling the function**.

Example:

    const person = {
      name: "Himanshu",
      greet() {
        console.log(this.name)
      }
    }

    person.greet()

Output:

    Himanshu

Explanation:

    person.greet()

Here the object `person` is calling the function, so:

    this = person

Therefore:

    this.name → person.name

---

### 2. Why `this` Exists

`this` allows an object to access its own properties.

Without `this`:

    const user = {
      name: "Alex",
      greet() {
        console.log(name)
      }
    }

This fails because `name` is not defined in the function scope.

Correct approach:

    const user = {
      name: "Alex",
      greet() {
        console.log(this.name)
      }
    }

Now the object can refer to its own property.

---

### 3. `this` in Global Context

When `this` is used outside any function, it refers to the **global object**.

In browsers:

    this → window

Example:

    console.log(this)

Output in browser:

    Window {...}

In Node.js:

    this → module.exports

So behavior differs slightly depending on environment.

---

### 4. `this` Inside a Regular Function

In a normal function call:

    function show() {
      console.log(this)
    }

    show()

In browsers (non-strict mode):

    this → window

So the output will be the global object.

---

### 5. `this` in Strict Mode

If strict mode is enabled:

    "use strict"

    function show() {
      console.log(this)
    }

    show()

Output:

    undefined

Reason:

Strict mode prevents automatic binding to the global object.

---

### 6. `this` Inside Object Methods

When a function is called as an object method, `this` refers to that object.

Example:

    const car = {
      brand: "Tesla",
      start() {
        console.log(this.brand)
      }
    }

    car.start()

Output:

    Tesla

Because:

    this → car

---

### 7. Losing `this` (Common Problem)

Example:

    const user = {
      name: "Himanshu",
      greet() {
        console.log(this.name)
      }
    }

    const fn = user.greet

    fn()

Output:

    undefined

Explanation:

    fn()

This is now a normal function call.

So:

    this → global object

And `name` is not found.

---

### 8. Nested Objects and `this`

Example:

    const obj = {
      name: "Outer",
      inner: {
        name: "Inner",
        greet() {
          console.log(this.name)
        }
      }
    }

    obj.inner.greet()

Output:

    Inner

Explanation:

The calling object is:

    obj.inner

So:

    this → obj.inner

---

### 9. `this` in Arrow Functions

Arrow functions **do not have their own `this`**.

They inherit `this` from their **surrounding lexical scope**.

Example:

    const obj = {
      name: "Himanshu",
      greet: () => {
        console.log(this.name)
      }
    }

    obj.greet()

Output:

    undefined

Explanation:

Arrow functions do not bind `this`.

So `this` comes from outer scope, usually the global object.

---

### 10. Correct Use of Arrow Functions

Arrow functions are useful when you want to inherit `this`.

Example:

    const obj = {
      name: "Himanshu",
      greet() {

        const arrow = () => {
          console.log(this.name)
        }

        arrow()
      }
    }

    obj.greet()

Output:

    Himanshu

Explanation:

The arrow function inherits `this` from `greet()`.

---

### 11. `this` Inside Event Handlers

Example:

    button.addEventListener("click", function() {
      console.log(this)
    })

Here:

    this → button element

Because the button triggered the event.

Arrow version:

    button.addEventListener("click", () => {
      console.log(this)
    })

Now:

    this → outer scope

Not the button.

---

### 12. Explicit Binding Using `call()`

JavaScript allows manually setting `this`.

Example:

    function greet() {
      console.log(this.name)
    }

    const user = {
      name: "Himanshu"
    }

    greet.call(user)

Output:

    Himanshu

Explanation:

    call() sets this manually

---

### 13. Explicit Binding Using `apply()`

`apply()` works like `call()` but arguments are passed as an array.

Example:

    function greet(age) {
      console.log(this.name, age)
    }

    const user = {
      name: "Himanshu"
    }

    greet.apply(user, [25])

Output:

    Himanshu 25

---

### 14. Explicit Binding Using `bind()`

`bind()` creates a new function with a permanently bound `this`.

Example:

    function greet() {
      console.log(this.name)
    }

    const user = {
      name: "Himanshu"
    }

    const boundFn = greet.bind(user)

    boundFn()

Output:

    Himanshu

---

### 15. `this` in Constructor Functions

Example:

    function Person(name) {
      this.name = name
    }

    const p1 = new Person("Himanshu")

Here:

    this → newly created object

Equivalent conceptually to:

    const obj = {}
    obj.name = "Himanshu"

---

### 16. `this` with Classes

Example:

    class Person {

      constructor(name) {
        this.name = name
      }

      greet() {
        console.log(this.name)
      }

    }

    const p = new Person("Himanshu")

    p.greet()

Output:

    Himanshu

Here:

    this → class instance

---

### 17. Four Rules of `this`

JavaScript determines `this` using four rules.

### 1 Default Binding

Normal function call.

    show()

Result:

    this → global object

---

### 2 Implicit Binding

Method call.

    obj.method()

Result:

    this → obj

---

### 3 Explicit Binding

Using:

    call
    apply
    bind

Result:

    this → manually specified object

---

### 4 New Binding

Constructor call.

    new Person()

Result:

    this → newly created object

---

### 18. Advanced Example

Example:

    const obj = {
      name: "JavaScript",
      greet() {

        function inner() {
          console.log(this.name)
        }

        inner()
      }
    }

    obj.greet()

Output:

    undefined

Because:

    inner()

is a normal function call.

Fix using arrow function:

    const obj = {
      name: "JavaScript",
      greet() {

        const inner = () => {
          console.log(this.name)
        }

        inner()
      }
    }

    obj.greet()

Output:

    JavaScript

---

### 19. Summary

The value of `this` depends on **how a function is called**.

| Situation | Value of `this` |
|----------|----------------|
| Global scope | Global object |
| Regular function | Global object / undefined (strict) |
| Object method | Calling object |
| Arrow function | Lexical `this` |
| call/apply/bind | Explicit object |
| Constructor (`new`) | New instance |

---

### Final Key Idea

JavaScript does not determine `this` when a function is written.

It determines `this` when the function is **called**.

Important rule:

    The call-site determines the value of this
