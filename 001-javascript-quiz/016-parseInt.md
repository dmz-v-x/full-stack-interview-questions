### JavaScript `map(parseInt)` Trap — Index Becomes Radix Deep Dive

This is a **very famous interview question** that tests:

- How `Array.prototype.map` works
- How `parseInt` works
- Why combining them creates bugs

---

### The Question

    console.log(['0'].map(parseInt))
    console.log(['0','1'].map(parseInt))
    console.log(['0','1','1'].map(parseInt))
    console.log(['0','1','1','1'].map(parseInt))

---

### Step 1 — Core Problem

---

### `map` passes 3 arguments

    array.map((value, index, array) => {})

So:

    parseInt(value, index)

---

### Step 2 — `parseInt` Signature

    parseInt(string, radix)

- `string` → value to parse
- `radix` → base (VERY IMPORTANT)

---

### Step 3 — Evaluate Each Case

---

### 1. `['0'].map(parseInt)`

Calls:

    parseInt('0', 0)

👉 radix 0 → auto-detect → base 10

Result:

    [0]

---

### 2. `['0','1'].map(parseInt)`

Calls:

    parseInt('0', 0) → 0
    parseInt('1', 1) → NaN (invalid base)

Result:

    [0, NaN]

---

### 3. `['0','1','1'].map(parseInt)`

Calls:

    parseInt('0', 0) → 0
    parseInt('1', 1) → NaN
    parseInt('1', 2) → 1 (binary)

Result:

    [0, NaN, 1]

---

### 4. `['0','1','1','1'].map(parseInt)`

Calls:

    parseInt('0', 0) → 0
    parseInt('1', 1) → NaN
    parseInt('1', 2) → 1
    parseInt('1', 3) → 1

Result:

    [0, NaN, 1, 1]

---

### Final Output (Order)

    [0]
    [0,NaN]
    [0,NaN,1]
    [0,NaN,1,1]

---

### Step 4 — Why This Happens

---

### map does this:

    parseInt(value, index)

---

### But parseInt expects:

    parseInt(value, radix)

---

### So index accidentally becomes radix

---

### Step 5 — Radix Rules

- radix must be between 2 and 36
- radix 1 → invalid → NaN

---

### Step 6 — Common Interview Trap

---

### Trap

    ['1','2','3'].map(parseInt)

❌ Not:

    [1,2,3]

---

### Actual:

    [1, NaN, NaN]

---

### Step 7 — Correct Way

---

### Use Number

    ['1','2','3'].map(Number)

---

### Or explicit parseInt

    ['1','2','3'].map(x => parseInt(x, 10))

---

### Step 8 — One-Line Memory Trick

    map gives index → parseInt treats it as radix
