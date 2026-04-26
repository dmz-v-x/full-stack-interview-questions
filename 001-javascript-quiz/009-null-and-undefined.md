### JavaScript Equality & Comparison — `null` vs `undefined` Deep Dive

This is a **very tricky interview topic** that tests:

- `==` vs `===`
- Special behavior of `null` and `undefined`
- Comparison operators (`<`, `>`, `<=`, `>=`)
- JSON serialization rules

---

### The Question

    console.log(JSON.stringify([1,2,null,3]))
    console.log(JSON.stringify([1,2,undefined,3]))
    console.log(null === undefined)
    console.log(null == undefined)
    console.log(null == 0)
    console.log(null < 0)
    console.log(null > 0)
    console.log(null <= 0)
    console.log(null >= 0)
    console.log(undefined == 0)
    console.log(undefined < 0)
    console.log(undefined > 0)
    console.log(undefined <= 0)
    console.log(undefined >= 0)

---

### Step 1 — JSON.stringify Behavior

---

### Rule

In arrays:

    undefined → becomes null

---

### 1

    JSON.stringify([1,2,null,3])

Output:

    "[1,2,null,3]"

---

### 2

    JSON.stringify([1,2,undefined,3])

👉 `undefined` becomes `null`

Output:

    "[1,2,null,3]"

---

### Step 2 — Equality (`==` vs `===`)

---

### Rule

    === → strict (no coercion)
    ==  → loose (with coercion)

---

### 3

    null === undefined

👉 different types

Output:

    false

---

### 4

    null == undefined

👉 special rule

Output:

    true

---

### 5

    null == 0

👉 NO coercion to number

Output:

    false

---

### Step 3 — Comparisons with `null`

---

### Important Rule

    null → converted to 0 in comparisons

---

### 6

    null < 0

    0 < 0 → false

---

### 7

    null > 0

    0 > 0 → false

---

### 8

    null <= 0

    0 <= 0 → true

---

### 9

    null >= 0

    0 >= 0 → true

---

### Step 4 — Comparisons with `undefined`

---

### Important Rule

    undefined → NaN

---

### 10

    undefined == 0

Output:

    false

---

### 11

    undefined < 0

    NaN < 0 → false

---

### 12

    undefined > 0

    NaN > 0 → false

---

### 13

    undefined <= 0

    NaN <= 0 → false

---

### 14

    undefined >= 0

    NaN >= 0 → false

---

### Final Output (Order)

    "[1,2,null,3]"
    "[1,2,null,3]"
    false
    true
    false
    false
    false
    true
    true
    false
    false
    false
    false
    false

---

### Step 5 — Key Takeaways (VERY IMPORTANT)

---

### 1. `null == undefined` → true (special case)

---

### 2. `null === undefined` → false

---

### 3. `null` in comparison → behaves like 0

---

### 4. `undefined` in comparison → becomes NaN

---

### 5. NaN compared to anything → always false

---

### 6. JSON.stringify converts `undefined` → null (in arrays)

---

### Step 6 — Common Interview Traps

---

### Trap 1

    null >= 0 → true  
    null > 0 → false

👉 Looks inconsistent but correct

---

### Trap 2

    undefined >= 0 → false

---

### Trap 3

    null == 0 → false  
    BUT  
    null >= 0 → true

---

### Step 7 — One-Line Memory Tricks

---

### Equality

    null == undefined → true

---

### Comparison

    null → 0  
    undefined → NaN

