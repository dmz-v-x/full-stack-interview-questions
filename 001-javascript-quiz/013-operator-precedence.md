### JavaScript Chained Comparisons — `==`, `<`, `>` Deep Dive

This is a **classic JavaScript trap question** that tests:

- Left-to-right evaluation
- Boolean coercion
- How comparison operators actually work

---

### The Question

    console.log(0 == 1 == 2)
    console.log(2 == 1 == 0)
    console.log(0 < 1 < 2)
    console.log(1 < 2 < 3)
    console.log(2 > 1 > 0)
    console.log(3 > 2 > 1)

---

### Step 1 — MOST IMPORTANT RULE

### JavaScript evaluates left → right

    a < b < c  ≠  (a < b && b < c)

Instead:

    (a < b) → boolean → converted to number → compared again

---

### Step 2 — Boolean Conversion

    true  → 1  
    false → 0

---

### Step 3 — Evaluate Each Case

---

### 1. `0 == 1 == 2`

Step-by-step:

    0 == 1 → false  
    false == 2 → 0 == 2 → false

Output:

    false

---

### 2. `2 == 1 == 0`

Step-by-step:

    2 == 1 → false  
    false == 0 → 0 == 0 → true

Output:

    true

---

### 3. `0 < 1 < 2`

Step-by-step:

    0 < 1 → true  
    true < 2 → 1 < 2 → true

Output:

    true

---

### 4. `1 < 2 < 3`

Step-by-step:

    1 < 2 → true  
    true < 3 → 1 < 3 → true

Output:

    true

---

### 5. `2 > 1 > 0`

Step-by-step:

    2 > 1 → true  
    true > 0 → 1 > 0 → true

Output:

    true

---

### 6. `3 > 2 > 1`

Step-by-step:

    3 > 2 → true  
    true > 1 → 1 > 1 → false

Output:

    false

---

### Final Output (Order)

    false
    true
    true
    true
    true
    false

---

### Step 4 — Why This Feels Wrong

Because we expect:

    3 > 2 > 1 → true

But JavaScript does:

    (3 > 2) → true → 1  
    1 > 1 → false

---

### Step 5 — Key Takeaways

---

### 1. Comparisons are NOT chained logically

---

### 2. They are evaluated left → right

---

### 3. Booleans get converted to numbers

---

### 4. `true = 1`, `false = 0`

---

### Step 6 — Common Interview Trap

---

### Trap

    0 < 1 < 2 → true (but for wrong reason)

---

### Step 7 — Correct Way to Write

    (a < b) && (b < c)

Example:

    (3 > 2) && (2 > 1)

---

### Step 8 — One-Line Memory Trick

    JS does math, not logic chaining

