### JavaScript Promise Identity — Same vs New Promise Objects Deep Dive

This is a **very advanced interview question** that tests:

- Promise resolution behavior
- Promise flattening
- Identity vs value equality
- `.then()` always returning new promises

---

### The Code

    const p1 = Promise.resolve(1)
    const p2 = new Promise((resolve) => resolve(p1))
    const p3 = Promise.resolve(p1)
    const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))
    const p5 = p4.then(() => p4)

    console.log(p1 == p2)
    console.log(p1 == p3)
    console.log(p3 == p4)
    console.log(p4 == p5)

---

### Step 1 — Core Rules (VERY IMPORTANT)

---

### Rule 1 — Promise identity

    == compares reference (same object)

---

### Rule 2 — Promise.resolve(promise)

    returns SAME promise

---

### Rule 3 — resolve(promise)

    "adopts" the state (does NOT return same object)

---

### Rule 4 — `.then()`

    ALWAYS returns a NEW promise

---

### Step 2 — Evaluate Each Variable

---

### p1

    Promise.resolve(1)

👉 A resolved promise

---

### p2

    new Promise(resolve => resolve(p1))

👉 resolves with p1  
👉 BUT p2 is a NEW promise

So:

    p2 ≠ p1

---

### p3

    Promise.resolve(p1)

👉 Special behavior:

    returns SAME promise

So:

    p3 === p1

---

### p4

    p2.then(() => new Promise(resolve => resolve(p3)))

👉 `.then()` creates NEW promise  
👉 return value is another promise → gets flattened

So:

    p4 is NEW promise (not p3)

---

### p5

    p4.then(() => p4)

👉 `.then()` ALWAYS returns NEW promise

Even if returning same promise:

    p5 ≠ p4

---

### Step 3 — Comparisons

---

### 1. `p1 == p2`

    different objects

Output:

    false

---

### 2. `p1 == p3`

    same object

Output:

    true

---

### 3. `p3 == p4`

    different objects

Output:

    false

---

### 4. `p4 == p5`

    different objects

Output:

    false

---

### Final Output

    false
    true
    false
    false

---

### Step 4 — Key Insights

---

### 1. `Promise.resolve(p)` returns SAME promise

---

### 2. `resolve(p)` creates NEW promise

---

### 3. `.then()` ALWAYS creates NEW promise

---

### 4. Promise identity ≠ resolved value

---

### Step 5 — Common Interview Traps

---

### Trap 1

Thinking:

    Promise.resolve(p1) creates new promise

❌ Wrong

---

### Trap 2

Thinking:

    returning same promise keeps identity

❌ Wrong

---

### Step 6 — One-Line Memory Trick

    resolve(p) → adopt  
    Promise.resolve(p) → reuse  
    then() → always new

