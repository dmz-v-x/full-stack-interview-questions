### JavaScript `typeof` vs `instanceof` — Primitives vs Objects Deep Dive

This is a **very important interview topic** that tests:

- Difference between primitives and objects
- `typeof` behavior
- `instanceof` behavior
- Wrapper objects (`new Number`, `new Boolean`)

---

### The Question

    console.log(typeof null)
    console.log(null instanceof Object) 
    console.log(typeof 1)
    console.log(1 instanceof Number)
    console.log(1 instanceof Object)
    console.log(Number(1) instanceof Object)
    console.log(new Number(1) instanceof Object)
    console.log(typeof true)
    console.log(true instanceof Boolean)
    console.log(true instanceof Object)
    console.log(Boolean(true) instanceof Object)
    console.log(new Boolean(true) instanceof Object)
    console.log([] instanceof Array)
    console.log([] instanceof Object)
    console.log((() => {}) instanceof Object)

---

### Step 1 — Core Concepts (MUST KNOW)

---

### Primitive Types

    number, string, boolean, null, undefined, bigint, symbol

---

### Objects

    arrays, functions, objects, wrapper objects

---

### Rule 1 — `typeof`

Returns type as string

---

### Rule 2 — `instanceof`

Checks:

    "is this object created from this constructor?"

👉 Only works with **objects**

---

### Step 2 — Evaluate Each Case

---

### 1. `typeof null`

👉 Historical bug

Output:

    "object"

---

### 2. `null instanceof Object`

👉 null is NOT an object

Output:

    false

---

### 3. `typeof 1`

👉 primitive number

Output:

    "number"

---

### 4. `1 instanceof Number`

👉 primitive, not object

Output:

    false

---

### 5. `1 instanceof Object`

Output:

    false

---

### 6. `Number(1) instanceof Object`

👉 returns primitive

Output:

    false

---

### 7. `new Number(1) instanceof Object`

👉 wrapper object

Output:

    true

---

### 8. `typeof true`

Output:

    "boolean"

---

### 9. `true instanceof Boolean`

👉 primitive

Output:

    false

---

### 10. `true instanceof Object`

Output:

    false

---

### 11. `Boolean(true) instanceof Object`

👉 primitive

Output:

    false

---

### 12. `new Boolean(true) instanceof Object`

👉 wrapper object

Output:

    true

---

### 13. `[] instanceof Array`

👉 array object

Output:

    true

---

### 14. `[] instanceof Object`

👉 arrays are objects

Output:

    true

---

### 15. `(() => {}) instanceof Object`

👉 functions are objects

Output:

    true

---

### Final Output (Order)

    "object"
    false
    "number"
    false
    false
    false
    true
    "boolean"
    false
    false
    false
    true
    true
    true
    true

---

### Step 3 — Key Takeaways

---

### 1. `typeof null === "object"` (JS bug)

---

### 2. Primitives are NOT instances

    1 instanceof Number → false

---

### 3. Wrapper objects ARE instances

    new Number(1) → true

---

### 4. Arrays & functions are objects

---

### 5. `instanceof` works only with objects

---

### Step 4 — Common Interview Traps

---

### Trap 1

    typeof null → "object"

---

### Trap 2

    1 instanceof Number → false

---

### Trap 3

    true instanceof Boolean → false

---

### Step 5 — One-Line Memory Trick

    primitive → typeof  
    object → instanceof
