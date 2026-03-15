### Question
What are `var`, `let`, and `const` in JavaScript, and how do they work from absolute beginner level to advanced level?

### Answer

`var`, `let`, and `const` are **keywords used to declare variables in JavaScript**.

Variables are containers used to store values such as numbers, strings, objects, arrays, or functions.

Example:

    let age = 25

Here:

- `let` → declaration keyword
- `age` → variable name
- `25` → stored value

JavaScript provides three ways to declare variables:

- `var` (older way)
- `let` (modern)
- `const` (modern constant)

Understanding the differences between these three requires understanding:

- Scope
- Hoisting
- Temporal Dead Zone
- Re-declaration
- Re-assignment
- Block scope
- Global scope
- Closures
- Loop behavior
- Memory model

---

### Global Scope

A variable declared outside any function or block exists in the **global scope**.

Example:

    var a = 10
    let b = 20
    const c = 30

All of these exist globally.

In browsers:

    var x = 5

Attaches to the global object:

    window.x

But:

    let y = 5
    const z = 5

Do NOT attach to `window`.

This is one major difference.

---

### Function Scope

Function scope means the variable exists **only inside a function**.

Example:

    function test() {
        var a = 10
        console.log(a)
    }

    test()

Output:

    10

But:

    console.log(a)

This causes an error because `a` only exists inside the function.

Important:

    var → function scoped

---

### Block Scope

Block scope means the variable exists **only inside curly braces `{}`**.

Blocks include:

- if
- for
- while
- switch
- standalone blocks

Example:

    {
        let x = 10
        const y = 20
    }

Trying to access:

    console.log(x)

Error occurs.

Important rule:

    let and const → block scoped

But:

    {
        var z = 30
    }

    console.log(z)

Output:

    30

Because:

    var ignores block scope

---

### Basic Difference Between var let const

| Feature | var | let | const |
|------|------|------|------|
| Scope | Function | Block | Block |
| Re-declare | Yes | No | No |
| Re-assign | Yes | Yes | No |
| Hoisting | Yes | Yes | Yes |
| TDZ | No | Yes | Yes |
| Global object attach | Yes | No | No |

---

### Re-declaration

Re-declaration means declaring the same variable name again.

Example with `var`:

    var a = 10
    var a = 20

Valid.

Output:

    a = 20

Example with `let`:

    let b = 10
    let b = 20

Error:

    Identifier already declared

Example with `const`:

    const c = 10
    const c = 20

Error occurs.

---

### Re-assignment

Re-assignment means changing the value.

Example:

    let x = 10
    x = 20

Valid.

But with const:

    const y = 10
    y = 20

Error:

    Assignment to constant variable

Because `const` variables cannot be reassigned.

---

### Important Concept: const Objects

`const` does NOT mean immutable.

It means:

    variable binding cannot change

Example:

    const user = {
        name: "Himanshu"
    }

    user.name = "Alex"

This works.

Output:

    { name: "Alex" }

But this fails:

    user = {}

Because the variable reference cannot change.

---

### Hoisting

Hoisting means **JavaScript moves declarations to the top of the scope during compilation**.

Example with `var`:

    console.log(a)

    var a = 10

Output:

    undefined

Why?

Because internally it becomes:

    var a
    console.log(a)
    a = 10

---

### Hoisting with let and const

Example:

    console.log(a)

    let a = 10

Error:

    Cannot access 'a' before initialization

Even though `let` is hoisted, it cannot be used before declaration.

This leads to an important concept.

---

### Temporal Dead Zone (TDZ)

Temporal Dead Zone is the time between:

    variable hoisting
    and
    variable initialization

Example:

    console.log(a)

    let a = 5

Between start of scope and `let a = 5` the variable is in TDZ.

Accessing it causes an error.

This applies to:

    let
    const

But NOT to:

    var

---

### Example Showing TDZ

    {
        console.log(a)

        let a = 10
    }

Error occurs because `a` is in Temporal Dead Zone.

---

### TDZ with const

Example:

    console.log(x)

    const x = 100

Same error occurs.

Additionally:

`const` must always be initialized.

Invalid:

    const a

Valid:

    const a = 10

---

### Loop Behavior with var

Classic interview example.

    for (var i = 1; i <= 3; i++) {

        setTimeout(function() {
            console.log(i)
        }, 1000)

    }

Output:

    4
    4
    4

Because `var` is function scoped and there is only one shared `i`.

---

### Loop Behavior with let

Example:

    for (let i = 1; i <= 3; i++) {

        setTimeout(function() {
            console.log(i)
        }, 1000)

    }

Output:

    1
    2
    3

Why?

Each iteration creates a **new block scoped variable**.

---

### Closures with var

Example:

    function test() {

        for (var i = 1; i <= 3; i++) {

            setTimeout(function() {
                console.log(i)
            }, 1000)

        }

    }

    test()

Output:

    4
    4
    4

Because closure captures the same variable.

---

### Closures with let

Example:

    function test() {

        for (let i = 1; i <= 3; i++) {

            setTimeout(function() {
                console.log(i)
            }, 1000)

        }

    }

    test()

Output:

    1
    2
    3

Each loop iteration creates a new binding.

---

### Shadowing

Shadowing occurs when a variable inside a block has the same name as an outer variable.

Example:

    let a = 10

    {
        let a = 20
        console.log(a)
    }

    console.log(a)

Output:

    20
    10

The inner variable shadows the outer variable.

---

### Illegal Shadowing

Example:

    let a = 10

    {
        var a = 20
    }

This causes an error because `var` tries to overwrite the same scope.

---

### Hoisting Comparison Example

Example:

    var a = 10

    function test() {

        console.log(a)

        var a = 20
    }

    test()

Output:

    undefined

Because internally:

    var a

exists at top of function scope.

---

### Same Example with let

    let a = 10

    function test() {

        console.log(a)

        let a = 20
    }

Error occurs due to TDZ.

---

### Global Object Behavior

Example:

    var x = 10
    let y = 20
    const z = 30

In browser console:

    window.x → 10
    window.y → undefined
    window.z → undefined

Only `var` attaches to global object.

---

### Memory Model

JavaScript stores variables in memory environments.

Example:

    function outer() {

        let a = 10

        function inner() {
            console.log(a)
        }

        return inner
    }

Here `a` lives inside the lexical environment.

`let` and `const` are stored in block environment records.

---

### Best Practices

Modern JavaScript recommends:

Use:

    const by default

Use:

    let when reassignment is needed

Avoid:

    var

Because `var` can cause:

- accidental global variables
- hoisting confusion
- scope bugs

---

### Real World Rule

Typical modern code style:

    const name = "Himanshu"

    let count = 0

    count++

---

### Summary

| Feature | var | let | const |
|------|------|------|------|
| Scope | Function | Block | Block |
| Hoisting | Yes | Yes | Yes |
| TDZ | No | Yes | Yes |
| Re-declare | Yes | No | No |
| Re-assign | Yes | Yes | No |
| Global object attach | Yes | No | No |

Key mental model:

    var → old JavaScript variable
    let → modern mutable variable
    const → modern constant reference

Modern JavaScript development strongly prefers:

    const
    let

and avoids using `var`.
