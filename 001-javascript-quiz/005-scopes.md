### JavaScript Scope — `var` vs `let` in Async Loops (setTimeout)

This is a **classic interview question** that tests:

- Scope (`var` vs `let`)
- Closures
- Event loop timing

---

### The Question

    for (var i = 0; i < 5; i++) {
      setTimeout(() => console.log(i), 0)
    }

    for (let i = 0; i < 5; i++) {
      setTimeout(() => console.log(i), 0)
    }

---

### Step 1 — First Understand `setTimeout`

    setTimeout(() => console.log(i), 0)

👉 Does NOT run immediately  
👉 Goes into **Macro Task Queue**

So:

👉 Loop finishes FIRST  
👉 Then callbacks run

---

### Step 2 — `var` Behavior

### Code

    for (var i = 0; i < 5; i++) {
      setTimeout(() => console.log(i), 0)
    }

---

### Key Concept

### `var` is FUNCTION scoped (not block scoped)

👉 Only ONE shared `i`

---

### Loop Execution

    i = 0 → schedule callback
    i = 1 → schedule callback
    i = 2 → schedule callback
    i = 3 → schedule callback
    i = 4 → schedule callback

After loop ends:

    i = 5

---

### Now setTimeout runs

All callbacks execute:

    console.log(i)

But `i` is:

    5

---

### Output

    5
    5
    5
    5
    5

---

### Step 3 — Why This Happens

👉 Closures capture **reference**, not value

All callbacks refer to SAME `i`

---

### Step 4 — `let` Behavior

### Code

    for (let i = 0; i < 5; i++) {
      setTimeout(() => console.log(i), 0)
    }

---

### Key Concept

### `let` is BLOCK scoped

👉 New `i` is created for EACH iteration

---

### Loop Execution

Each iteration has its own copy:

    i = 0 → separate binding
    i = 1 → separate binding
    i = 2 → separate binding
    i = 3 → separate binding
    i = 4 → separate binding

---

### When setTimeout runs

Each callback prints its OWN `i`

---

### Output

    0
    1
    2
    3
    4

---

### Step 5 — Final Combined Output

    5
    5
    5
    5
    5
    0
    1
    2
    3
    4

---

### Step 6 — Timeline Visualization

### Phase 1 (Synchronous)

Both loops run completely:

    var loop → finishes → i = 5
    let loop → finishes

---

### Phase 2 (Async)

All setTimeout callbacks execute:

    var → 5 5 5 5 5
    let → 0 1 2 3 4

---

### Step 7 — Interview Gold Insights

---

### 1. `var` → ONE shared variable

---

### 2. `let` → NEW variable per iteration

---

### 3. Closures capture variable, not value

---

### 4. Async runs AFTER loop finishes

---

### Step 8 — Fix for `var` (Classic Trick)

If interviewer asks:

👉 “How to fix var version?”

---

### Solution 1 — IIFE

    for (var i = 0; i < 5; i++) {
      ((i) => {
        setTimeout(() => console.log(i), 0)
      })(i)
    }

---

### Solution 2 — use `let`

    for (let i = 0; i < 5; i++) {
      setTimeout(() => console.log(i), 0)
    }

---

### Step 9 — One-Line Memory Trick

    var → shared → same value
    let → separate → correct values

