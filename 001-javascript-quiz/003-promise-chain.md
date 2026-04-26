### JavaScript Promise Chain — Non-function `.then()` Arguments Deep Dive

This is a **very tricky interview question** that tests:

- How `.then()` handles non-functions
- Value propagation in promise chains
- Promise resolution behavior

---

### The Question

    Promise.resolve(1)
    .then(() => 2)
    .then(3)
    .then((value) => value * 3)
    .then(Promise.resolve(4))
    .then(console.log)

---

### Step 1 — Golden Rule of `.then()`

### `.then()` expects FUNCTIONS

    .then(onFulfilled, onRejected)

---

### If you pass NON-FUNCTION:

👉 It is **ignored**

👉 Value passes through unchanged

---

### Rule

    .then(nonFunction) === .then(value => value)

---

### Step 2 — Start Execution

    Promise.resolve(1)

👉 Initial value:

    1

---

### Step 3

    .then(() => 2)

👉 Function runs

- Ignores previous value
- Returns `2`

Now:

    value = 2

---

### Step 4

    .then(3)

👉 `3` is NOT a function

So this becomes:

    .then(value => value)

👉 Pass-through

Now:

    value = 2

---

### Step 5

    .then((value) => value * 3)

👉 Runs normally

    2 * 3 = 6

Now:

    value = 6

---

### Step 6

    .then(Promise.resolve(4))

👉 This is NOT a function

Important:

- It's a Promise object, not a function
- So it gets ignored

Equivalent to:

    .then(value => value)

Now:

    value = 6

---

### Step 7

    .then(console.log)

👉 This IS a function

So:

    console.log(6)

---

### Final Output

    6

---

### Step 8 — Key Insights (VERY IMPORTANT)

### 1. `.then(3)` does nothing

    ignored → value passes through

---

### 2. `.then(Promise.resolve(4))` does nothing

    NOT executed
    NOT awaited
    completely ignored

---

### 3. Only functions matter in `.then()`

---

### Step 9 — Common Mistakes

### Mistake 1

Thinking:

    .then(3) changes value

❌ Wrong

---

### Mistake 2

Thinking:

    .then(Promise.resolve(4)) replaces value

❌ Wrong

---

### Mistake 3

Thinking:

    Promise inside `.then()` auto-runs

❌ Wrong (unless returned from a function)

---

### Step 10 — One-Line Memory Trick

    If it's not a function, `.then()` ignores it

---

### Step 11 — If It Was Written Like This

    .then(() => Promise.resolve(4))

Then:

👉 Promise is returned  
👉 Chain waits  
👉 value becomes:

    4

---

