### JavaScript `reduce` — With vs Without Initial Value

This is a **very important interview concept** that tests:

- How `reduce` initializes accumulator
- Iteration differences with/without initial value
- Execution order

---

### The Code

    [1,2,3].reduce((a,b) => {
      console.log(a,b)
    });

    [1,2,3].reduce((a,b) => {
      console.log(a,b)
    }, 0)

---

### Step 1 — Core Rule of `reduce`

---

### Signature

    array.reduce((accumulator, current) => {}, initialValue)

---

### Two Modes

---

### Case 1 — WITHOUT initial value

    reduce(fn)

👉 First element becomes accumulator  
👉 Loop starts from index 1

---

### Case 2 — WITH initial value

    reduce(fn, initial)

👉 Accumulator starts as initial  
👉 Loop starts from index 0

---

### Step 2 — First Case (NO initial value)

---

### Code

    [1,2,3].reduce((a,b) => {
      console.log(a,b)
    });

---

### Execution

Initial:

    a = 1 (first element)
    loop starts from index 1

---

### Iteration 1

    a = 1, b = 2

Output:

    1 2

Return value:

    undefined (no return)

So next:

    a = undefined

---

### Iteration 2

    a = undefined, b = 3

Output:

    undefined 3

---

### Final Output (First Case)

    1 2
    undefined 3

---

### Step 3 — Second Case (WITH initial value)

---

### Code

    [1,2,3].reduce((a,b) => {
      console.log(a,b)
    }, 0)

---

### Execution

Initial:

    a = 0  
    loop starts from index 0

---

### Iteration 1

    a = 0, b = 1

Output:

    0 1

Return:

    undefined → next a = undefined

---

### Iteration 2

    a = undefined, b = 2

Output:

    undefined 2

---

### Iteration 3

    a = undefined, b = 3

Output:

    undefined 3

---

### Final Output (Second Case)

    0 1
    undefined 2
    undefined 3

---

### Step 4 — Key Takeaways

---

### 1. Without initial value

    first element becomes accumulator

---

### 2. With initial value

    initial is used, full array is iterated

---

### 3. If you don't return → accumulator becomes undefined

---

### Step 5 — Common Interview Traps

---

### Trap 1

Forgetting return:

    accumulator becomes undefined

---

### Trap 2

Thinking both behave same

---

### Step 6 — One-Line Memory Trick

    no initial → skip first  
    with initial → include all
