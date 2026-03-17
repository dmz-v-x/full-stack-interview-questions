### JavaScript `this` — Function vs Arrow vs Method (Full Deep Dive)

This is a **high-frequency interview question** that tests:

- `this` binding rules
- Arrow functions vs normal functions
- Method calls vs detached calls
- Nested functions

---

### The Question

    const obj = {
      dev: 'bfe',
      a: function() {
        return this.dev
      },
      b() {
        return this.dev
      },
      c: () => {
        return this.dev
      },
      d: function() {
        return (() => {
          return this.dev
        })()
      },
      e: function() {
        return this.b()
      },
      f: function() {
        return this.b
      },
      g: function() {
        return this.c()
      },
      h: function() {
        return this.c
      },
      i: function() {
        return () => {
          return this.dev
        }
      }
    }

---

### Step 1 — Core Rules (MUST KNOW)

---

### Rule 1 — Normal function (`function`)

    this = depends on HOW function is called

---

### Rule 2 — Method call

    obj.fn()

👉 `this = obj`

---

### Rule 3 — Arrow function

    this = lexical (comes from outer scope)

👉 Does NOT depend on call

---

### Rule 4 — Detached function

    const fn = obj.b
    fn()

👉 `this = global (or undefined in strict mode)`

---

### Step 2 — Evaluate Each Case

---

### 1. `obj.a()`

    a: function() { return this.dev }

👉 Called as method  
👉 `this = obj`

Output:

    'bfe'

---

### 2. `obj.b()`

    b() { return this.dev }

👉 Same as above

Output:

    'bfe'

---

### 3. `obj.c()`

    c: () => { return this.dev }

👉 Arrow function  
👉 `this` comes from outer scope (NOT obj)

In browser:

    this = window

So:

    window.dev → undefined

Output:

    undefined

---

### 4. `obj.d()`

    d: function() {
      return (() => {
        return this.dev
      })()
    }

👉 Outer function → `this = obj`  
👉 Inner arrow → inherits `this`

So:

    this.dev = 'bfe'

Output:

    'bfe'

---

### 5. `obj.e()`

    e: function() {
      return this.b()
    }

👉 `this = obj`  
👉 Calls `obj.b()`

Output:

    'bfe'

---

### 6. `obj.f()()`

    f: function() {
      return this.b
    }

Step:

    obj.f() → returns function b
    then () → called standalone

So:

👉 `this = global`

Output:

    undefined

---

### 7. `obj.g()`

    g: function() {
      return this.c()
    }

👉 `this = obj`  
👉 calls `obj.c()`

BUT:

👉 `c` is arrow → ignores obj

So:

    this = global

Output:

    undefined

---

### 8. `obj.h()()`

    h: function() {
      return this.c
    }

Step:

    obj.h() → returns arrow function c
    then () → call arrow

Arrow still uses lexical `this`

👉 global

Output:

    undefined

---

### 9. `obj.i()()`

    i: function() {
      return () => {
        return this.dev
      }
    }

Step:

    obj.i() → returns arrow
    arrow captures `this = obj`

Then:

    () → executes arrow

Output:

    'bfe'

---

### Final Output (Order)

    bfe
    bfe
    undefined
    bfe
    bfe
    undefined
    undefined
    undefined
    bfe

---

### Step 3 — Summary Table

| Case | Reason | Output |
|------|--------|--------|
| a | method call | bfe |
| b | method shorthand | bfe |
| c | arrow (global this) | undefined |
| d | arrow inherits obj | bfe |
| e | calls method | bfe |
| f | detached function | undefined |
| g | arrow ignores obj | undefined |
| h | arrow returned | undefined |
| i | arrow captures obj | bfe |

---

### Step 4 — Key Takeaways

---

### 1. Arrow functions DO NOT have their own `this`

---

### 2. `this` depends on HOW function is called

---

### 3. Returning a function loses context

---

### 4. Arrow inside method captures correct `this`

---

### Step 5 — One-Line Memory Tricks

---

### Normal function

    call-site decides `this`

---

### Arrow function

    lexical `this` (fixed)

---

### Detached call

    loses `this`

