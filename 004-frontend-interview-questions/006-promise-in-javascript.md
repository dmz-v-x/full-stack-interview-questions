### Question
What is a Promise in JavaScript? Explain everything about Promises from absolute beginner level to advanced level including all methods, states, chaining, error handling, and real-world usage.

### Answer

A **Promise** in JavaScript is an object that represents the **eventual completion (or failure) of an asynchronous operation and its resulting value**.

Promises are used to handle **asynchronous operations** in JavaScript such as:

- API requests
- Database queries
- File reading
- Timers
- Network operations

Promises solve many problems that existed with **callbacks**, especially the problem known as **callback hell**.

To understand Promises properly we must first understand **synchronous vs asynchronous code**.

---

### Synchronous Code

Synchronous code executes **line by line**, one operation at a time.

Example:

    console.log("Start")
    console.log("Middle")
    console.log("End")

Output:

    Start
    Middle
    End

Each line waits for the previous line to finish.

---

### Asynchronous Code

Asynchronous code allows operations to run **in the background without blocking the main thread**.

Example:

    console.log("Start")

    setTimeout(function() {
        console.log("Async task finished")
    }, 2000)

    console.log("End")

Output:

    Start
    End
    Async task finished

The asynchronous task runs later.

---

### The Problem with Callbacks

Before Promises existed, asynchronous code was handled using **callbacks**.

Example:

    function fetchData(callback) {

        setTimeout(function() {
            callback("Data received")
        }, 2000)

    }

    fetchData(function(data) {
        console.log(data)
    })

This works, but when multiple async operations depend on each other, it leads to **callback hell**.

Example:

    loginUser(function(user) {

        getUserPosts(user, function(posts) {

            getPostComments(posts, function(comments) {

                console.log(comments)

            })

        })

    })

This structure becomes difficult to read and maintain.

Promises were introduced to solve this problem.

---

### What is a Promise Conceptually

A Promise represents **a value that will be available in the future**.

Think of ordering food online.

States of the order:

- Pending → Order placed
- Fulfilled → Food delivered
- Rejected → Order failed

A Promise behaves similarly.

---

### Promise States

A Promise has three possible states.

1 Pending  
The operation is still running.

2 Fulfilled  
The operation completed successfully.

3 Rejected  
The operation failed.

State transition:

    Pending → Fulfilled
    Pending → Rejected

Once settled, the state **cannot change again**.

---

### Creating a Promise

A Promise is created using the `Promise` constructor.

Syntax:

    const promise = new Promise(function(resolve, reject) {

    })

The function passed to Promise is called the **executor function**.

Example:

    const promise = new Promise(function(resolve, reject) {

        let success = true

        if (success) {
            resolve("Operation successful")
        } else {
            reject("Operation failed")
        }

    })

---

### Consuming a Promise

Promises are consumed using `.then()` and `.catch()`.

Example:

    promise
        .then(function(result) {
            console.log(result)
        })
        .catch(function(error) {
            console.log(error)
        })

---

### Example: Simulating an API Call

    function fetchUser() {

        return new Promise(function(resolve, reject) {

            setTimeout(function() {

                resolve({ name: "Himanshu", age: 25 })

            }, 2000)

        })

    }

    fetchUser()
        .then(function(user) {
            console.log(user)
        })

Output after 2 seconds:

    { name: "Himanshu", age: 25 }

---

### Promise Resolution

Calling `resolve()` fulfills the Promise.

Example:

    const promise = new Promise(function(resolve) {
        resolve(10)
    })

    promise.then(function(value) {
        console.log(value)
    })

Output:

    10

---

### Promise Rejection

Calling `reject()` marks the Promise as failed.

Example:

    const promise = new Promise(function(resolve, reject) {

        reject("Something went wrong")

    })

    promise.catch(function(error) {
        console.log(error)
    })

Output:

    Something went wrong

---

### Promise Chaining

Promises can be chained using `.then()`.

Example:

    const promise = new Promise(function(resolve) {
        resolve(5)
    })

    promise
        .then(function(num) {
            return num * 2
        })
        .then(function(num) {
            return num + 10
        })
        .then(function(result) {
            console.log(result)
        })

Output:

    20

Explanation:

    5 → 10 → 20

Each `.then()` receives the result of the previous step.

---

### Returning Promises in Chains

Example:

    function getUser() {

        return new Promise(function(resolve) {
            resolve("User data")
        })

    }

    function getPosts() {

        return new Promise(function(resolve) {
            resolve("User posts")
        })

    }

    getUser()
        .then(function(user) {
            console.log(user)
            return getPosts()
        })
        .then(function(posts) {
            console.log(posts)
        })

---

### Error Handling with catch

Example:

    new Promise(function(resolve, reject) {

        reject("Error occurred")

    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })

---

### Error Propagation

Errors automatically move down the chain.

Example:

    Promise.resolve(10)
        .then(function(num) {
            throw new Error("Something broke")
        })
        .then(function() {
            console.log("This will not run")
        })
        .catch(function(err) {
            console.log(err.message)
        })

Output:

    Something broke

---

### finally()

`finally()` runs regardless of success or failure.

Example:

    Promise.resolve("Success")
        .then(function(data) {
            console.log(data)
        })
        .finally(function() {
            console.log("Cleanup task")
        })

Output:

    Success
    Cleanup task

---

### Promise Static Methods

JavaScript provides several static Promise methods.

---

### Promise.resolve()

Creates a resolved Promise.

Example:

    const p = Promise.resolve(100)

    p.then(function(value) {
        console.log(value)
    })

Output:

    100

---

### Promise.reject()

Creates a rejected Promise.

Example:

    const p = Promise.reject("Error")

    p.catch(function(err) {
        console.log(err)
    })

Output:

    Error

---

### Promise.all()

Runs multiple Promises in parallel.

Resolves when **all Promises succeed**.

Example:

    const p1 = Promise.resolve(1)
    const p2 = Promise.resolve(2)
    const p3 = Promise.resolve(3)

    Promise.all([p1, p2, p3])
        .then(function(values) {
            console.log(values)
        })

Output:

    [1, 2, 3]

If any Promise fails, the whole Promise fails.

Example:

    const p1 = Promise.resolve(1)
    const p2 = Promise.reject("Error")
    const p3 = Promise.resolve(3)

    Promise.all([p1, p2, p3])
        .catch(function(err) {
            console.log(err)
        })

Output:

    Error

---

### Promise.allSettled()

Waits for all Promises to complete, regardless of success or failure.

Example:

    const p1 = Promise.resolve(1)
    const p2 = Promise.reject("Error")

    Promise.allSettled([p1, p2])
        .then(function(results) {
            console.log(results)
        })

Output:

    [
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: "Error" }
    ]

---

### Promise.race()

Returns the result of the **first settled Promise**.

Example:

    const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000))
    const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000))

    Promise.race([p1, p2])
        .then(console.log)

Output:

    First

---

### Promise.any()

Resolves when **any Promise succeeds**.

Example:

    const p1 = Promise.reject("Fail")
    const p2 = Promise.resolve("Success")

    Promise.any([p1, p2])
        .then(console.log)

Output:

    Success

---

### Promise Microtask Queue

Promises use the **microtask queue**.

Example:

    console.log("Start")

    Promise.resolve().then(function() {
        console.log("Promise")
    })

    setTimeout(function() {
        console.log("Timeout")
    }, 0)

    console.log("End")

Output:

    Start
    End
    Promise
    Timeout

Promises run before `setTimeout` callbacks.

---

### Promise with async/await

Promises are often used with `async/await`.

Example:

    async function getData() {

        const result = await Promise.resolve("Data received")

        console.log(result)

    }

    getData()

Output:

    Data received

---

### Sequential Promises

Example:

    async function process() {

        const a = await Promise.resolve(5)
        const b = await Promise.resolve(10)

        console.log(a + b)

    }

    process()

Output:

    15

---

### Parallel Promises

Example:

    async function process() {

        const results = await Promise.all([
            Promise.resolve(10),
            Promise.resolve(20),
            Promise.resolve(30)
        ])

        console.log(results)

    }

---

### Real World Example: Fetch API

Example:

    fetch("https://api.example.com/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

---

### Summary

Promises represent the result of an asynchronous operation.

Promise states:

    Pending
    Fulfilled
    Rejected

Key methods:

    then()
    catch()
    finally()

Static methods:

    Promise.resolve()
    Promise.reject()
    Promise.all()
    Promise.allSettled()
    Promise.race()
    Promise.any()

Promises help avoid callback hell and make asynchronous code easier to read and manage.
