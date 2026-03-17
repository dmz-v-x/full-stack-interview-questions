### JavaScript `this` — Ultimate Edge Case (Functions, Arrow, IIFE, call/apply)

This is a **top-tier interview question** that tests:

- `this` binding rules
- Arrow vs normal functions
- IIFE behavior
- call/apply impact
- Returned functions

---

### The Code

    const obj = {
      a: 1,
      b: function() {
        console.log(this.a)
      },
      c() {
        console.log(this.a)
      },
      d: () => {
        console.log(this.a)
      },
      e: (function() {
        return () => {
          console.log(this.a);
        }
      })(),
      f: function() {
        return () => {
          console.log(this.a);
        }
      }
    }

---

### Step 1 — Core Rules (MUST KNOW)

---

### Rule 1 — Normal function

    this → depends on call-site

---

### Rule 2 — Method call

    obj.fn() → this = obj

---

### Rule 3 — Arrow function

    this → lexical (fixed at creation)

---

### Rule 4 — call/apply

    changes this ONLY for normal functions

---

### Step 2 — Evaluate Each Line

---

### 1. `console.log(obj.a)`

Output:

    1

---

### 2. `obj.b()`

👉 method call

Output:

    1

---

### 3. `(obj.b)()`

👉 still method call

Output:

    1

---

### 4. `const b = obj.b; b()`

👉 detached function

    this = global

Output:

    undefined

---

### 5. `obj.b.apply({a:2})`

👉 explicitly set this

Output:

    2

---

### 6. `obj.c()`

👉 shorthand method

Output:

    1

---

### 7. `obj.d()`

👉 arrow → lexical this (global)

Output:

    undefined

---

### 8. `(obj.d)()`

👉 still arrow

Output:

    undefined

---

### 9. `obj.d.apply({a:2})`

👉 ignored (arrow)

Output:

    undefined

---

### 10. `obj.e()`

👉 arrow created inside IIFE

Important:

- IIFE runs immediately
- `this` inside IIFE = global
- arrow captures global

Output:

    undefined

---

### 11. `(obj.e)()`

Output:

    undefined

---

### 12. `obj.e.call({a:2})`

👉 ignored (arrow)

Output:

    undefined

---

### 13. `obj.f()()`

Step:

    obj.f() → returns arrow with this=obj  
    arrow uses obj

Output:

    1

---

### 14. `(obj.f())()`

Same as above

Output:

    1

---

### 15. `obj.f().call({a:2})`

👉 arrow ignores call

Output:

    1

---

### Final Output (Order)

    1
    1
    1
    undefined
    2
    1
    undefined
    undefined
    undefined
    undefined
    undefined
    undefined
    1
    1
    1

---

### Step 3 — Key Takeaways

---

### 1. Arrow functions IGNORE call/apply

---

### 2. Arrow captures `this` at creation

---

### 3. Detached function loses `this`

---

### 4. IIFE + arrow → locks global `this`

---

### 5. Returning arrow from method → preserves `this`

---

### Step 4 — Common Interview Traps

---

### Trap 1

    obj.d.apply(...) → still undefined

---

### Trap 2

    obj.e.call(...) → still undefined

---

### Trap 3

    obj.f().call(...) → still original this

---

### Step 5 — One-Line Memory Tricks

---

### Arrow

    fixed this

---

### Normal function

    dynamic this

---

### call/apply

    works only on normal functions
