### JavaScript `arguments` Object — Parameter Mapping Deep Dive

This is a **very important interview question** that tests:

- Relationship between parameters and `arguments`
- Behavior when arguments are missing
- How mutation works

---

### The Question

    function log(a,b,c,d) {
      console.log(a,b,c,d)
      arguments[0] = 'bfe'
      arguments[3] = 'dev'
     
      console.log(a,b,c,d)
    }

    log(1,2,3)

---

### Step 1 — Initial Call

    log(1,2,3)

So:

    a = 1  
    b = 2  
    c = 3  
    d = undefined  (no 4th argument)

---

### Step 2 — First console.log

    console.log(a,b,c,d)

Output:

    1 2 3 undefined

---

### Step 3 — Understanding `arguments`

Inside function:

    arguments = {
      0: 1,
      1: 2,
      2: 3
    }

---

### IMPORTANT RULE (Non-strict mode)

👉 Parameters and `arguments` are **linked (mapped)**

BUT:

👉 Only for indices that exist

---

### Step 4 — Modify `arguments[0]`

    arguments[0] = 'bfe'

👉 This updates:

    a = 'bfe'

---

### Step 5 — Modify `arguments[3]`

    arguments[3] = 'dev'

BUT:

👉 There was NO original argument at index 3

So:

- `arguments[3]` gets value `'dev'`
- BUT `d` is NOT linked

---

### Key Insight

    d remains unchanged

---

### Step 6 — Second console.log

    console.log(a,b,c,d)

Now:

    a = 'bfe'  
    b = 2  
    c = 3  
    d = undefined

---

### Final Output

    1,2,3,undefined
    bfe,2,3,undefined

---

### Step 7 — Key Takeaways

---

### 1. `arguments` is array-like

---

### 2. Parameters ↔ arguments are linked (non-strict mode)

ONLY for existing indices

---

### 3. Changing `arguments[i]` updates parameter

---

### 4. BUT new indices do NOT link

---

### Step 8 — Common Interview Trap

---

### Trap

    arguments[3] = 'dev'

❌ Does NOT update `d`

---

### Step 9 — Strict Mode Difference

If `'use strict'`:

👉 NO linking at all

    arguments ↔ parameters are separate

---

### Step 10 — One-Line Memory Trick

    existing index → linked  
    new index → not linked
