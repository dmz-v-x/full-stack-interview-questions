### JavaScript Increment Operators — Pre vs Post (`++a` vs `a++`)

This is a **fundamental but tricky interview concept** that tests:

- Pre-increment vs Post-increment
- Expression evaluation order
- Value vs side-effect understanding

---

### The Question

    let a = 1
    const b = ++a
    const c = a++
    console.log(a)
    console.log(b)
    console.log(c)

---

### Step 1 — Core Concepts (MUST KNOW)

---

### Pre-increment (`++a`)

👉 First **increase value**  
👉 Then **return updated value**

    ++a → (a = a + 1) → return new value

---

### Post-increment (`a++`)

👉 First **return current value**  
👉 Then **increase value**

    a++ → return old value → then (a = a + 1)

---

### Step 2 — Dry Run (Line by Line)

---

### Initial

    a = 1

---

### Line 1

    const b = ++a

👉 Pre-increment

Step:
- a becomes 2
- returns 2

So:

    a = 2
    b = 2

---

### Line 2

    const c = a++

👉 Post-increment

Step:
- returns current value → 2
- then a becomes 3

So:

    c = 2
    a = 3

---

### Step 3 — Final Values

    a = 3
    b = 2
    c = 2

---

### Step 4 — Output

    3
    2
    2

---

### Step 5 — Visualization

---

### Timeline

    Start: a = 1

    ++a → a = 2 → b = 2
    a++ → c = 2 → a = 3

---

### Step 6 — Common Mistakes

---

### Mistake 1

Thinking:

    a++ returns updated value

❌ Wrong

---

### Mistake 2

Mixing both behaviors

---

### Correct Understanding

    ++a → update first
    a++ → return first

---

### Step 7 — One-Line Memory Trick

    Pre → change then use  
    Post → use then change

---

### Step 8 — Interview Insight

If nested:

    let x = 1
    let y = x++ + ++x

👉 Always evaluate carefully step-by-step


