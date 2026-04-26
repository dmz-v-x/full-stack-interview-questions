### JavaScript Promise Chain — `.then`, `.catch`, `.finally` Full Execution Deep Dive

This is a **high-level interview question** that tests:

- Value propagation in promise chains
- Nested promises
- `catch` behavior
- `finally` behavior (VERY IMPORTANT)

---

### The Question

    Promise.resolve(1)
    .then((val) => {
      console.log(val)
      return val + 1
    }).then((val) => {
      console.log(val)
    }).then((val) => {
      console.log(val)
      return Promise.resolve(3)
        .then((val) => {
          console.log(val)
        })
    }).then((val) => {
      console.log(val)
      return Promise.reject(4)
    }).catch((val) => {
      console.log(val)
    }).finally((val) => {
      console.log(val)
      return 10
    }).then((val) => {
      console.log(val)
    })

---

### Step 1 — Start Value

    Promise.resolve(1)

👉 Initial value:

    1

---

### Step 2 — First `.then`

    .then((val) => {
      console.log(val)
      return val + 1
    })

Execution:

    console.log(1)
    return 2

Now:

    value = 2

---

### Step 3 — Second `.then`

    .then((val) => {
      console.log(val)
    })

Execution:

    console.log(2)

Important:

👉 No return → returns `undefined`

Now:

    value = undefined

---

### Step 4 — Third `.then`

    .then((val) => {
      console.log(val)
      return Promise.resolve(3)
        .then((val) => {
          console.log(val)
        })
    })

Execution:

    console.log(undefined)

Now inner promise runs:

    console.log(3)

Important:

👉 Inner `.then()` does NOT return anything

So:

    inner promise resolves with undefined

Now:

    value = undefined

---

### Step 5 — Next `.then`

    .then((val) => {
      console.log(val)
      return Promise.reject(4)
    })

Execution:

    console.log(undefined)

Then:

    return Promise.reject(4)

Now:

👉 Chain becomes rejected with:

    4

---

### Step 6 — `.catch`

    .catch((val) => {
      console.log(val)
    })

Execution:

    console.log(4)

Important:

👉 No return → resolves with `undefined`

Now:

    value = undefined

---

### Step 7 — `.finally` (VERY IMPORTANT)

    .finally((val) => {
      console.log(val)
      return 10
    })

Execution:

    console.log(undefined)

CRITICAL RULE:

👉 `finally` IGNORES return value

So:

    value remains unchanged → undefined

---

### Step 8 — Last `.then`

    .then((val) => {
      console.log(val)
    })

Execution:

    console.log(undefined)

---

### Final Output (Order)

    1
    2
    undefined
    3
    undefined
    4
    undefined
    undefined

---

### Step 9 — Key Concepts You MUST Remember

---

### 1. If `.then()` does not return → value becomes `undefined`

---

### 2. Returning a Promise

    return Promise.resolve(x)

👉 Chain waits  
👉 value becomes `x` (or resolved value)

---

### 3. Nested `.then()` without return

    Promise.resolve(3).then(() => {})

👉 resolves with `undefined`

---

### 4. `catch` converts rejection → resolved

Unless you throw again

---

### 5. `finally` behavior (VERY IMPORTANT)

    .finally(() => something)

👉 Does NOT change value  
👉 Return is ignored

---

### Rule

    finally passes through original value

---

### 6. If `finally` throws → THEN it affects chain

---

### Step 10 — One-Line Memory Tricks

---

### `.then`

    return decides next value

---

### `.catch`

    handles error → continues chain

---

### `.finally`

    runs always → DOES NOT change value

