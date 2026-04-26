### JavaScript Unary `+` & Type Coercion — Deep Dive

This is a **very tricky coercion question** that tests:

- Unary `+` operator
- Number conversion
- String vs number behavior
- Special values (`true`, `null`, `undefined`)

---

### The Question

    console.log(1 + 2)
    console.log(1 + + 2)
    console.log(1 + + + 2)
    console.log(1 + '2')
    console.log(1 + + '2')
    console.log('1' + 2)
    console.log('1' + + 2)
    console.log(1 + true)
    console.log(1 + + true)
    console.log('1' + true)
    console.log('1' + + true)
    console.log(1 + null)
    console.log(1 + + null)
    console.log('1' + null)
    console.log('1' + + null)
    console.log(1 + undefined)
    console.log(1 + + undefined)
    console.log('1' + undefined)
    console.log('1' + + undefined)
    console.log('1' + + + undefined)

---

### Step 1 — Core Rules (MUST KNOW)

---

### Rule 1 — Unary `+`

    +value → converts to Number

Examples:

    +'2' → 2  
    +true → 1  
    +null → 0  
    +undefined → NaN

---

### Rule 2 — `+` Operator

If any operand is string:

    → string concatenation

Otherwise:

    → numeric addition

---

### Step 2 — Evaluate Each Case

---

### 1. `1 + 2`

    3

---

### 2. `1 + + 2`

    +2 → 2  
    1 + 2 → 3

---

### 3. `1 + + + 2`

    +(+2) → 2  
    1 + 2 → 3

---

### 4. `1 + '2'`

    → string concatenation

    '12'

---

### 5. `1 + + '2'`

    +'2' → 2  
    1 + 2 → 3

---

### 6. `'1' + 2`

    → string

    '12'

---

### 7. `'1' + + 2`

    +2 → 2  
    '1' + 2 → '12'

---

### 8. `1 + true`

    true → 1  
    1 + 1 → 2

---

### 9. `1 + + true`

    +true → 1  
    1 + 1 → 2

---

### 10. `'1' + true`

    → string

    '1true'

---

### 11. `'1' + + true`

    +true → 1  
    '1' + 1 → '11'

---

### 12. `1 + null`

    null → 0  
    1 + 0 → 1

---

### 13. `1 + + null`

    +null → 0  
    1 + 0 → 1

---

### 14. `'1' + null`

    '1null'

---

### 15. `'1' + + null`

    +null → 0  
    '1' + 0 → '10'

---

### 16. `1 + undefined`

    undefined → NaN  
    1 + NaN → NaN

---

### 17. `1 + + undefined`

    +undefined → NaN  
    1 + NaN → NaN

---

### 18. `'1' + undefined`

    '1undefined'

---

### 19. `'1' + + undefined`

    +undefined → NaN  
    '1' + NaN → '1NaN'

---

### 20. `'1' + + + undefined`

    +(+undefined) → NaN  
    '1' + NaN → '1NaN'

---

### Final Output (Order)

    3
    3
    3
    "12"
    3
    "12"
    "12"
    2
    2
    "1true"
    "11"
    1
    1
    "1null"
    "10"
    NaN
    NaN
    "1undefined"
    "1NaN"
    "1NaN"

---

### Step 3 — Key Takeaways

---

### 1. Unary `+` forces number conversion

---

### 2. Multiple `+` still just convert

---

### 3. String + anything → string

---

### 4. `null → 0`, `true → 1`

---

### 5. `undefined → NaN`

---

### Step 4 — Common Interview Traps

---

### Trap 1

    1 + + '2' → 3 (not "12")

---

### Trap 2

    '1' + + true → "11"

---

### Trap 3

    +undefined → NaN

---

### Step 5 — One-Line Memory Trick

    unary + → number  
    binary + → string if any string


