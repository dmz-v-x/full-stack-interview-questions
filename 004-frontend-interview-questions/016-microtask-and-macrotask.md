### Question
Explain `macrotask` and `microtask` in JavaScript. 

### Answer

To understand **macrotasks and microtasks**, we must first understand several foundational concepts in JavaScript:

- JavaScript runtime model
- Single-threaded execution
- Call stack
- Asynchronous APIs
- Event loop
- Task queues

Macrotasks and microtasks are part of how JavaScript manages **asynchronous operations**.

Understanding them is essential for mastering:

- Promises
- async/await
- timers
- browser APIs
- performance optimization

---

### JavaScript is Single Threaded

JavaScript runs on a **single thread**.

This means it can execute **only one operation at a time**.

Example:

    console.log("A")
    console.log("B")
    console.log("C")

Output:

    A
    B
    C

Each line executes one after the other.

But JavaScript still handles things like:

- network requests
- timers
- UI events

How does it do this with one thread?

The answer is the **event loop**.

---

### The JavaScript Runtime Components

The JavaScript runtime consists of several components.

Main parts:

    Call Stack
    Web APIs / Node APIs
    Task Queue
    Microtask Queue
    Event Loop

Understanding these parts is essential.

---

### What is the Call Stack

The **call stack** is where JavaScript executes functions.

Example:

    function a() {
        b()
    }

    function b() {
        console.log("Hello")
    }

    a()

Execution stack:

    a()
    b()
    console.log()

After execution the stack becomes empty.

---

### Blocking Problem

Consider this example:

    console.log("Start")

    setTimeout(function() {
        console.log("Timer finished")
    }, 2000)

    console.log("End")

Output:

    Start
    End
    Timer finished

Even though `setTimeout` appears before `End`, the timer callback runs later.

Why?

Because asynchronous tasks are handled outside the call stack.

---

### Web APIs / Node APIs

Browsers provide **Web APIs** such as:

    setTimeout
    fetch
    DOM events
    geolocation

Node.js provides APIs such as:

    file system
    network operations
    timers

These APIs run asynchronously.

---

### What Happens with setTimeout

Example:

    console.log("Start")

    setTimeout(() => {
        console.log("Timeout")
    }, 0)

    console.log("End")

Execution steps:

1 Call stack runs

    console.log("Start")
    setTimeout()
    console.log("End")

2 Timer moves to Web API environment.

3 After timer completes, callback moves to **task queue**.

4 Event loop moves it to call stack when stack is empty.

Output:

    Start
    End
    Timeout

---

### The Event Loop

The **event loop** continuously checks:

    Is the call stack empty?

If yes, it pulls tasks from queues.

Order of priority:

1 Microtask queue
2 Macrotask queue

This priority is the key concept.

---

### What is a Task

In JavaScript runtime, tasks represent **pieces of work waiting to execute**.

Two types exist:

    Macrotasks
    Microtasks

---

### What is a Macrotask

Macrotasks are **regular tasks scheduled by APIs**.

Examples of macrotasks:

    setTimeout
    setInterval
    setImmediate (Node.js)
    I/O operations
    UI events
    message channel tasks

Macrotasks are processed one at a time.

---

### Example of Macrotask

Example:

    console.log("Start")

    setTimeout(() => {
        console.log("Macrotask")
    }, 0)

    console.log("End")

Output:

    Start
    End
    Macrotask

---

### What is a Microtask

Microtasks are **higher priority tasks that run before macrotasks**.

Microtasks include:

    Promise.then
    Promise.catch
    Promise.finally
    queueMicrotask
    MutationObserver

These run **immediately after the current execution finishes**, before macrotasks.

---

### Example of Microtask

Example:

    console.log("Start")

    Promise.resolve().then(() => {
        console.log("Microtask")
    })

    console.log("End")

Output:

    Start
    End
    Microtask

---

### Microtask vs Macrotask Example

Example:

    console.log("Start")

    setTimeout(() => {
        console.log("Macrotask")
    })

    Promise.resolve().then(() => {
        console.log("Microtask")
    })

    console.log("End")

Output:

    Start
    End
    Microtask
    Macrotask

Because microtasks run first.

---

### Execution Order Rules

Execution order:

1 Synchronous code
2 Microtasks
3 Macrotasks

---

### Microtask Queue

Microtasks are stored in a special queue called:

    Microtask Queue

Sources include:

    Promise.then
    Promise.catch
    queueMicrotask

Example:

    Promise.resolve().then(() => console.log("A"))
    Promise.resolve().then(() => console.log("B"))

Output:

    A
    B

---

### Macrotask Queue

Macrotasks are stored in the **Task Queue**.

Examples:

    setTimeout
    setInterval
    DOM events

Example:

    setTimeout(() => console.log("A"))
    setTimeout(() => console.log("B"))

Output:

    A
    B

---

### Example Combining Both

Example:

    console.log("Start")

    setTimeout(() => console.log("Timeout"))

    Promise.resolve().then(() => console.log("Promise"))

    console.log("End")

Output:

    Start
    End
    Promise
    Timeout

---

### More Complex Example

Example:

    console.log("A")

    setTimeout(() => console.log("B"))

    Promise.resolve()
        .then(() => console.log("C"))
        .then(() => console.log("D"))

    console.log("E")

Output:

    A
    E
    C
    D
    B

Explanation:

1 Sync code:

    A
    E

2 Microtasks:

    C
    D

3 Macrotasks:

    B

---

### Microtasks Can Schedule More Microtasks

Example:

    Promise.resolve().then(() => {

        console.log("A")

        Promise.resolve().then(() => {
            console.log("B")
        })

    })

Output:

    A
    B

All microtasks finish before macrotasks.

---

### Starvation Problem

Too many microtasks can block macrotasks.

Example:

    function loop() {
        Promise.resolve().then(loop)
    }

    loop()

This creates an infinite microtask loop.

Timers may never execute.

---

### queueMicrotask

JavaScript provides a direct way to schedule microtasks.

Example:

    queueMicrotask(() => {
        console.log("Microtask")
    })

This behaves like `Promise.then`.

---

### Example Comparing queueMicrotask

Example:

    console.log("Start")

    queueMicrotask(() => console.log("Micro"))

    setTimeout(() => console.log("Macro"))

    console.log("End")

Output:

    Start
    End
    Micro
    Macro

---

### Async/Await and Microtasks

`async/await` internally uses Promises.

Example:

    async function test() {

        console.log("A")

        await Promise.resolve()

        console.log("B")

    }

    test()

    console.log("C")

Output:

    A
    C
    B

The code after `await` runs as a microtask.

---

### Real World Example

Example:

    fetch("/api")
        .then(res => res.json())
        .then(data => console.log(data))

The `.then()` callbacks are microtasks.

---

### Browser Rendering Interaction

Browsers typically:

1 Execute macrotask
2 Execute all microtasks
3 Render UI

This ensures consistent DOM updates.

---

### Node.js Event Loop Differences

Node.js also has microtasks.

But it includes additional phases:

    timers
    pending callbacks
    idle
    poll
    check
    close callbacks

Microtasks still run between phases.

---

### Summary

Macrotasks and microtasks are queues used by the JavaScript runtime to schedule asynchronous operations.

Macrotasks include:

    setTimeout
    setInterval
    I/O events
    UI events

Microtasks include:

    Promise.then
    Promise.catch
    queueMicrotask
    MutationObserver

Execution order:

    synchronous code
    microtasks
    macrotasks

Understanding this system requires understanding:

- call stack
- event loop
- asynchronous APIs
- task queues

Mastering microtasks and macrotasks helps developers understand **JavaScript execution order and asynchronous behavior deeply**.
