### JavaScript Array & Object Coercion — `+` vs `-` Deep Dive

This is a **very tricky coercion question** that tests:

- How arrays convert to primitives
- How objects behave in `+` vs `-`
- JavaScript parsing quirks (`{}` as block vs object)

---

### The Question

    console.log([] + [])
    console.log([] + 1)
    console.log([[]] + 1)
    console.log([[1]] + 1)
    console.log([[[[2]]]] + 1)
    console.log([] - 1)
    console.log([[]] - 1)
    console.log([[1]] - 1)
    console.log([[[[2]]]] - 1)
    console.log([] + {})
    console.log({} + {})
    console.log({} - {})

---

### Step 1 — Core Rules (MUST KNOW)

---

### Rule 1 — `+` Operator

If any operand becomes string:

    → string concatenation

---

### Rule 2 — `-` Operator

Always converts everything to **number**

---

### Rule 3 — Array → Primitive

Arrays convert using `.toString()`:

    [] → ''
    [[]] → ''
    [[1]] → '1'
    [[[[2]]]] → '2'

---

### Rule 4 — Object → Primitive

    {} → '[object Object]'

---

### Step 2 — Evaluate Each Case

---

### 1. `[] + []`

    '' + '' → ''

Output:

    ""

---

### 2. `[] + 1`

    '' + 1 → '1'

Output:

    "1"

---

### 3. `[[]] + 1`

    [[]] → ''  
    '' + 1 → '1'

Output:

    "1"

---

### 4. `[[1]] + 1`

    [[1]] → '1'  
    '1' + 1 → '11'

Output:

    "11"

---

### 5. `[[[[2]]]] + 1`

    '2' + 1 → '21'

Output:

    "21"

---

### 6. `[] - 1`

    '' → 0  
    0 - 1 → -1

Output:

    -1

---

### 7. `[[]] - 1`

    '' → 0  
    0 - 1 → -1

Output:

    -1

---

### 8. `[[1]] - 1`

    '1' → 1  
    1 - 1 → 0

Output:

    0

---

### 9. `[[[[2]]]] - 1`

    '2' → 2  
    2 - 1 → 1

Output:

    1

---

### 10. `[] + {}`

    '' + '[object Object]'

Output:

    "[object Object]"

---

### 11. `{} + {}`

👉 Inside `console.log`, both `{}` are treated as objects

    '[object Object]' + '[object Object]'

Output:

    "[object Object][object Object]"

---

### 12. `{} - {}`

    '[object Object]' → NaN  
    NaN - NaN → NaN

Output:

    NaN

---

### Final Output (Order)

    ""
    "1"
    "1"
    "11"
    "21"
    -1
    -1
    0
    1
    "[object Object]"
    "[object Object][object Object]"
    NaN

---

### Step 3 — Key Takeaways

---

### 1. Arrays convert using `.toString()`

---

### 2. Empty array becomes empty string

---

### 3. `+` prefers strings

---

### 4. `-` forces numeric conversion

---

### 5. Objects become `[object Object]`

---

### 6. `{}` parsing depends on context

- Inside expressions → object  
- Standalone → may be treated as block

---

### Step 4 — Common Interview Traps

---

### Trap 1

    [] + [] → "" (not [])

---

### Trap 2

    [] - 1 → -1

---

### Trap 3

    {} + {} → depends on parsing context

---

### Step 5 — One-Line Memory Trick

    array → string  
    object → '[object Object]'  
    + → string  
    - → number

---


