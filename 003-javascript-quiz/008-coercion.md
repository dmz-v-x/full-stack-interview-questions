### JavaScript Type Coercion — Full Deep Dive (Boolean, Number, String)

This is a **very important interview topic** that tests:

- Type coercion rules
- Truthy / falsy values
- Implicit conversions in operators

---

### The Question

    console.log(Boolean('false'))
    console.log(Boolean(false))
    console.log('3' + 1)
    console.log('3' - 1)
    console.log('3' - ' 02 ')
    console.log('3' * ' 02 ')
    console.log(Number('1'))
    console.log(Number('number'))
    console.log(Number(null))
    console.log(Number(false))

---

### Step 1 — Core Rules (MUST KNOW)

---

### Rule 1 — Boolean Conversion

Falsy values:

    false, 0, '', null, undefined, NaN

Everything else → truthy

---

### Rule 2 — `+` Operator

If ANY operand is string:

👉 **String concatenation**

---

### Rule 3 — `-`, `*`, `/`

👉 Always convert to **Number**

---

### Rule 4 — `Number()` conversion

    invalid → NaN
    null → 0
    false → 0

---

### Step 2 — Evaluate Each Line

---

### 1. `Boolean('false')`

👉 Non-empty string = truthy

Output:

    true

---

### 2. `Boolean(false)`

👉 Already falsy

Output:

    false

---

### 3. `'3' + 1`

👉 String + number → string concatenation

    '3' + '1' = '31'

Output:

    '31'

---

### 4. `'3' - 1`

👉 `-` forces number conversion

    3 - 1 = 2

Output:

    2

---

### 5. `'3' - ' 02 '`

👉 Both converted to numbers

    3 - 2 = 1

Output:

    1

---

### 6. `'3' * ' 02 '`

👉 `*` forces number conversion

    3 * 2 = 6

Output:

    6

---

### 7. `Number('1')`

👉 Valid number string

Output:

    1

---

### 8. `Number('number')`

👉 Invalid number

Output:

    NaN

---

### 9. `Number(null)`

👉 Special rule

Output:

    0

---

### 10. `Number(false)`

👉 false → 0

Output:

    0

---

### Final Output (Order)

    true
    false
    '31'
    2
    1
    6
    1
    NaN
    0
    0

---

### Step 3 — Key Takeaways

---

### 1. Non-empty string is ALWAYS truthy

---

### 2. `+` prefers strings

---

### 3. `-`, `*`, `/` prefer numbers

---

### 4. `Number(null) = 0`

---

### 5. Invalid number → NaN

---

### Step 4 — Common Mistakes

---

### Mistake 1

Thinking:

    Boolean('false') → false

❌ Wrong

---

### Mistake 2

Thinking:

    '3' - '2' → '1'

❌ Wrong → it's number

---

### Mistake 3

Forgetting spaces are ignored in numbers:

    ' 02 ' → 2

---

### Step 5 — One-Line Memory Tricks

---

### Boolean

    empty → false, rest → true

---

### Operators

    + → string
    others → number


