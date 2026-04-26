### Question
Explain `async` and `await` in JavaScript from absolute zero to advanced level. 

### Answer

`async` and `await` are modern JavaScript features used to write **asynchronous code in a clean, readable way that looks synchronous**.

They were introduced in **ES2017 (ES8)** and are built on top of **Promises**.

To fully understand `async` and `await`, we must first understand several foundational concepts:

    Synchronous vs asynchronous execution
    JavaScript runtime model
    Event loop
    Call stack
    Promises
    Microtasks

We will build this understanding step by step.

---

### Step 1: Synchronous JavaScript

JavaScript normally executes **synchronously**, meaning one line runs after another.

Example:

    console.log("A")
    console.log("B")
    console.log("C")

Output:

    A
    B
    C

Each line must complete before the next begins.

---

### Step 2: The Problem With Blocking Code

Some operations take time.

Examples:

    network requests
    file reading
    database queries
    timers

If JavaScript waited for each operation to finish before continuing, the entire program would **freeze**.

Example blocking scenario:

    const data = fetchDataFromServer()

    console.log(data)

If the network takes 2 seconds, the entire program pauses.

To solve this, JavaScript uses **asynchronous programming**.

---

### Step 3: Asynchronous JavaScript

Asynchronous code allows operations to run in the background.

Example:

    console.log("Start")

    setTimeout(() => {
        console.log("Timer finished")
    }, 2000)

    console.log("End")

Output:

    Start
    End
    Timer finished

The timer runs later without blocking the main thread.

---

### Step 4: Callbacks

Early asynchronous JavaScript used **callbacks**.

Example:

    function fetchData(callback) {
        setTimeout(() => {
            callback("Data received")
        }, 2000)
    }

    fetchData(function(data) {
        console.log(data)
    })

Callbacks work but can lead to **callback hell**.

Example:

    loginUser(function(user) {
        getPosts(user, function(posts) {
            getComments(posts, function(comments) {
                console.log(comments)
            })
        })
    })

This becomes hard to read and maintain.

---

### Step 5: Promises

Promises were introduced to solve callback problems.

A Promise represents **a value that will exist in the future**.

Example:

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000)
    })

Consuming a promise:

    promise.then(data => {
        console.log(data)
    })

Promises improve readability but chains can still become complex.

Example:

    fetchUser()
        .then(user => getPosts(user))
        .then(posts => getComments(posts))
        .then(comments => console.log(comments))

This leads to the creation of **async/await**.

---

### Step 6: What is `async`

The `async` keyword is used to define an **asynchronous function**.

Example:

    async function greet() {
        return "Hello"
    }

Important behavior:

An async function **always returns a Promise**.

Example:

    const result = greet()

    console.log(result)

Output:

    Promise { "Hello" }

Even though we returned a string, it becomes a Promise.

Equivalent behavior:

    function greet() {
        return Promise.resolve("Hello")
    }

---

### Step 7: What is `await`

The `await` keyword pauses the execution of an async function until a Promise resolves.

Example:

    async function test() {

        const result = await Promise.resolve("Hello")

        console.log(result)

    }

    test()

Output:

    Hello

`await` unwraps the resolved value from the Promise.

---

### Step 8: Basic Example of async/await

Example:

    function fetchData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data received")
            }, 2000)
        })
    }

Using promises:

    fetchData().then(data => {
        console.log(data)
    })

Using async/await:

    async function getData() {
        const data = await fetchData()
        console.log(data)
    }

    getData()

---

### Step 9: Sequential Async Execution

Example:

    async function process() {

        const a = await Promise.resolve(10)
        const b = await Promise.resolve(20)

        console.log(a + b)

    }

    process()

Output:

    30

Each await waits for the previous one to complete.

---

### Step 10: Parallel Execution with Promise.all

Example:

    async function process() {

        const results = await Promise.all([
            Promise.resolve(10),
            Promise.resolve(20),
            Promise.resolve(30)
        ])

        console.log(results)

    }

Output:

    [10, 20, 30]

All promises run simultaneously.

---

### Step 11: Error Handling with try/catch

Async/await allows standard error handling.

Example:

    async function test() {

        try {

            const data = await Promise.reject("Error occurred")

            console.log(data)

        } catch(error) {

            console.log(error)

        }

    }

    test()

Output:

    Error occurred

---

### Step 12: Await Only Works Inside Async Functions

Incorrect usage:

    const data = await fetchData()

Error:

    await is only valid in async functions

Correct usage:

    async function run() {
        const data = await fetchData()
    }

---

### Step 13: Top-Level Await

Modern JavaScript allows `await` at the module level.

Example:

    const data = await fetch("/api")

But this only works in **ES modules**.

---

### Step 14: Await with Fetch API

Example:

    async function loadUsers() {

        const response = await fetch("https://api.example.com/users")

        const users = await response.json()

        console.log(users)

    }

    loadUsers()

This is common in real-world applications.

---

### Step 15: Await in Loops

Example:

    async function process() {

        const items = [1,2,3]

        for (const item of items) {

            const result = await Promise.resolve(item * 2)

            console.log(result)

        }

    }

Each iteration waits for the previous one.

---

### Step 16: Async Functions Return Promises

Example:

    async function getNumber() {
        return 5
    }

Equivalent to:

    function getNumber() {
        return Promise.resolve(5)
    }

---

### Step 17: Async Functions in Arrow Syntax

Example:

    const fetchData = async () => {
        return "Hello"
    }

---

### Step 18: Async Methods in Classes

Example:

    class UserService {

        async getUser() {
            return "User data"
        }

    }

    const service = new UserService()

    service.getUser().then(console.log)

---

### Step 19: Microtask Queue Behavior

Async/await internally uses **Promises**, which means they run in the **microtask queue**.

Example:

    console.log("Start")

    async function test() {
        console.log("Inside async")
    }

    test()

    console.log("End")

Output:

    Start
    Inside async
    End

---

### Step 20: Async/Await vs Promise Chains

Promise version:

    fetchUser()
        .then(user => getPosts(user))
        .then(posts => console.log(posts))

Async version:

    async function load() {
        const user = await fetchUser()
        const posts = await getPosts(user)
        console.log(posts)
    }

Async/await is more readable.

---

### Step 21: Real World Example

Example API request:

    async function getUsers() {

        const response = await fetch("/api/users")

        const users = await response.json()

        return users

    }

    getUsers().then(console.log)

---

### Step 22: Advantages of async/await

Benefits include:

    cleaner syntax
    easier debugging
    better error handling
    avoids callback hell
    easier sequential logic

---

### Step 23: Limitations of async/await

Potential issues include:

    sequential execution if not careful
    requires promises
    cannot be used in older JavaScript environments without transpilation

---

### Summary

`async` and `await` provide a modern way to work with asynchronous code in JavaScript.

Key points:

    async functions always return Promises

    await pauses execution until a Promise resolves

    async/await is built on top of Promises

    try/catch is used for error handling

These features make asynchronous code easier to write, read, and maintain compared to traditional callbacks and promise chains.
