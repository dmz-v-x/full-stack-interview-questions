### Question
What is a Closure in JavaScript and how does it work from absolute beginner level to advanced level?

### Answer

A **closure** in JavaScript is created when a **function remembers and can access variables from its outer scope even after that outer function has finished executing**.

Closures are one of the most important concepts in JavaScript because they power many patterns such as:

- Data privacy
- Function factories
- Currying
- Memoization
- Module patterns
- Callbacks and asynchronous code

To understand closures, we must first understand **scope** and **lexical environment**.

---

### Step 1: Understanding Scope

Scope defines **where variables are accessible in a program**.

JavaScript has several scopes:

- Global scope
- Function scope
- Block scope (let/const)

Example:

    let globalVar = "I am global"

    function test() {
        let localVar = "I am local"
        console.log(globalVar)
        console.log(localVar)
    }

    test()

Output:

    I am global
    I am local

But:

    console.log(localVar)

This will throw an error because `localVar` exists only inside the function.

---

### Step 2: Nested Functions

Closures depend on **nested functions**.

Example:

    function outer() {

        let outerVariable = "I am from outer"

        function inner() {
            console.log(outerVariable)
        }

        inner()
    }

    outer()

Output:

    I am from outer

Why?

Because the inner function can access variables from its parent function.

This is called **lexical scope**.

---

### Step 3: Returning Functions

Closures become interesting when a function returns another function.

Example:

    function outer() {

        let message = "Hello from closure"

        function inner() {
            console.log(message)
        }

        return inner
    }

    const fn = outer()

    fn()

Output:

    Hello from closure

Important observation:

The function `outer()` finished executing.

But `inner()` still remembers the variable `message`.

This is a **closure**.

---

### Step 4: Formal Definition of Closure

A closure is:

    A function that remembers variables from its lexical scope
    even when the function is executed outside that scope.

Structure:

    function outer() {
        let variable = value

        function inner() {
            use(variable)
        }

        return inner
    }

The inner function **closes over** the variable.

Hence the name **closure**.

---

### Step 5: Closure with Multiple Variables

Example:

    function outer() {

        let a = 10
        let b = 20

        function inner() {
            console.log(a + b)
        }

        return inner
    }

    const fn = outer()

    fn()

Output:

    30

The returned function still remembers `a` and `b`.

---

### Step 6: Closure Creating Private Variables

Closures are often used to create **private variables**.

Example:

    function counter() {

        let count = 0

        return function() {
            count++
            console.log(count)
        }

    }

    const increment = counter()

    increment()
    increment()
    increment()

Output:

    1
    2
    3

Why this works:

`count` is stored inside the closure and cannot be accessed directly.

Trying this:

    console.log(count)

Will fail.

This makes `count` **private**.

---

### Step 7: Multiple Independent Closures

Example:

    function counter() {

        let count = 0

        return function() {
            count++
            return count
        }

    }

    const counter1 = counter()
    const counter2 = counter()

    console.log(counter1())
    console.log(counter1())
    console.log(counter2())

Output:

    1
    2
    1

Each function has its own closure environment.

---

### Step 8: Closure with Parameters

Example:

    function multiplier(x) {

        return function(y) {
            return x * y
        }

    }

    const double = multiplier(2)
    const triple = multiplier(3)

    console.log(double(5))
    console.log(triple(5))

Output:

    10
    15

Explanation:

The value `x` is stored in the closure.

---

### Step 9: Function Factories Using Closures

Closures allow functions to **generate other functions**.

Example:

    function createGreeting(greeting) {

        return function(name) {
            console.log(greeting + " " + name)
        }

    }

    const sayHello = createGreeting("Hello")
    const sayHi = createGreeting("Hi")

    sayHello("Himanshu")
    sayHi("Alex")

Output:

    Hello Himanshu
    Hi Alex

---

### Step 10: Closure with setTimeout

Closures are often used with asynchronous code.

Example:

    function delayedMessage(message) {

        setTimeout(function() {
            console.log(message)
        }, 1000)

    }

    delayedMessage("Hello after 1 second")

The callback function remembers the variable `message`.

This is a closure.

---

### Step 11: Classic Interview Problem (Loop + Closure)

Example:

    for (var i = 1; i <= 3; i++) {

        setTimeout(function() {
            console.log(i)
        }, 1000)

    }

Output:

    4
    4
    4

Why?

Because `var` has function scope and all callbacks share the same `i`.

---

### Step 12: Fixing the Loop Closure Problem

Solution using `let`.

    for (let i = 1; i <= 3; i++) {

        setTimeout(function() {
            console.log(i)
        }, 1000)

    }

Output:

    1
    2
    3

Each iteration creates a new block scope.

---

### Step 13: Another Fix Using Closure

Example:

    for (var i = 1; i <= 3; i++) {

        (function(i) {

            setTimeout(function() {
                console.log(i)
            }, 1000)

        })(i)

    }

Output:

    1
    2
    3

Here an **Immediately Invoked Function Expression (IIFE)** creates a closure.

---

### Step 14: Memoization Using Closures

Closures can cache expensive results.

Example:

    function memoizedAdd() {

        const cache = {}

        return function(num) {

            if (cache[num]) {
                console.log("From cache")
                return cache[num]
            }

            console.log("Calculating")

            const result = num + 10

            cache[num] = result

            return result
        }

    }

    const add = memoizedAdd()

    add(5)
    add(5)

Output:

    Calculating
    From cache

The cache persists because of closure.

---

### Step 15: Module Pattern Using Closures

Closures allow creation of modules.

Example:

    const counterModule = (function() {

        let count = 0

        return {

            increment() {
                count++
            },

            getCount() {
                return count
            }

        }

    })()

    counterModule.increment()
    counterModule.increment()

    console.log(counterModule.getCount())

Output:

    2

Here `count` is private.

---

### Step 16: Closure with Event Handlers

Example:

    function attachButton(buttonId, message) {

        const button = document.getElementById(buttonId)

        button.addEventListener("click", function() {
            console.log(message)
        })

    }

The event handler remembers `message`.

This is a closure.

---

### Step 17: Memory Behavior of Closures

Normally, variables are destroyed after a function finishes.

But closures prevent garbage collection.

Example:

    function outer() {

        let largeData = new Array(1000000)

        return function() {
            console.log("Using closure")
        }

    }

Here `largeData` remains in memory because of closure.

This is why closures must be used carefully.

---

### Step 18: Visual Model of Closure

Example:

    function outer() {

        let x = 10

        function inner() {
            console.log(x)
        }

        return inner
    }

    const fn = outer()

Memory model:

    fn
     ↓
    inner()
     ↓
    [[Closure]]
     ↓
    { x: 10 }

Even though `outer()` finished executing, `x` remains accessible.

---

### Step 19: Real World Uses of Closures

Closures power many real-world patterns:

- Data encapsulation
- Event handlers
- Asynchronous callbacks
- Function factories
- Memoization
- Module pattern
- Currying

Many JavaScript libraries heavily rely on closures.

---

### Step 20: Summary

A closure is created when:

    A function remembers variables from its outer scope
    even after the outer function has finished executing.

Key points:

- Closures rely on lexical scope
- Inner functions can access outer variables
- Variables remain in memory through closure
- Closures enable powerful programming patterns

Simple mental model:

    Function + Lexical Environment = Closure

Closures are one of the **core pillars of JavaScript** and are essential for writing advanced JavaScript applications.
