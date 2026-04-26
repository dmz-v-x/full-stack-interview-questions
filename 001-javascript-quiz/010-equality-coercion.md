### JavaScript Equality Coercion — `==` with `false` and `true`

This is a **classic tricky interview question** that tests:

- Loose equality (`==`)
- Type coercion rules
- Edge cases with arrays, strings, null, undefined, BigInt

---

### The Question

    console.log(0 == false)
    console.log('' == false)
    console.log([] == false)
    console.log(undefined == false)
    console.log(null == false)
    console.log('1' == true)
    console.log(1n == true)
    console.log(' 1     ' == true)

---

### Step 1 — Core Rule of `==`

When comparing with boolean:

    true  → converted to 1  
    false → converted to 0

---

### Step 2 — Evaluate Each Case

---

### 1. `0 == false`

    false → 0

    0 == 0 → true

Output:

    true

---

### 2. `'' == false`

    false → 0  
    '' → 0 (Number conversion)

    0 == 0 → true

Output:

    true

---

### 3. `[] == false`

Step-by-step:

    false → 0  
    [] → '' → 0

    0 == 0 → true

Output:

    true

---

### 4. `undefined == false`

👉 Special rule

    undefined only equals null

Output:

    false

---

### 5. `null == false`

👉 Special rule

    null only equals undefined

Output:

    false

---

### 6. `'1' == true`

    true → 1  
    '1' → 1

    1 == 1 → true

Output:

    true

---

### 7. `1n == true`

    true → 1  
    1n == 1 → true

Output:

    true

---

### 8. `' 1     ' == true`

    true → 1  
    ' 1     ' → 1 (trimmed + converted)

    1 == 1 → true

Output:

    true

---

### Final Output (Order)

    true
    true
    true
    false
    false
    true
    true
    true

---

### Step 3 — Key Takeaways (VERY IMPORTANT)

---

### 1. Boolean always converts to number

    false → 0  
    true → 1

---

### 2. Empty values become 0

    '' → 0  
    [] → '' → 0

---

### 3. `null` and `undefined` are special

    only equal to each other

---

### 4. Strings get trimmed before number conversion

---

### 5. BigInt can compare with number in `==`

---

### Step 4 — Common Interview Traps

---

### Trap 1

    [] == false → true

---

### Trap 2

    '' == false → true

---

### Trap 3

    null == false → false

---

### Step 5 — One-Line Memory Trick

    boolean → number  
    object → primitive → number  
    null/undefined → special


