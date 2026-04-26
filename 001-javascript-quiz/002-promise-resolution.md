### JavaScript Promise Resolution — Multiple resolve/reject Calls Deep Dive

This is a classic **interview trap question** that tests your understanding of:

- How Promises settle
- What happens when `resolve` / `reject` are called multiple times
- How `.then(success, failure)` works

---

### The Question

    new Promise((resolve, reject) => {
      resolve(1)
      resolve(2)
      reject('error')
    }).then((value) => {
      console.log(value)
    }, (error) => {
      console.log('error')
    })

---

### Step 1 — Core Concept (MOST IMPORTANT)

### A Promise can be settled ONLY ONCE

A Promise has 3 states:

- pending
- fulfilled
- rejected

👉 Once it becomes **fulfilled OR rejected**, it is **FINAL**

---

### Rule

    First call wins → rest are ignored

---

### Step 2 — Execute Promise Executor (Synchronous)

    new Promise((resolve, reject) => {
      resolve(1)
      resolve(2)
      reject('error')
    })

Important:

- Executor runs **immediately (synchronous)**
- All three lines execute one after another

---

### Step 3 — What Actually Happens Internally

### Line 1

    resolve(1)

👉 Promise becomes:

    fulfilled with value = 1

---

### Line 2

    resolve(2)

👉 Ignored (Promise already settled)

---

### Line 3

    reject('error')

👉 Ignored (Promise already settled)

---

### Final Promise State

    fulfilled with value = 1

---

### Step 4 — `.then(success, failure)`

    .then(
      (value) => console.log(value),
      (error) => console.log('error')
    )

Important:

- First function → runs if fulfilled
- Second function → runs if rejected

---

### Since Promise is fulfilled

Only this runs:

    console.log(value)

Where:

    value = 1

---

### Final Output

    1

---

### Step 5 — Very Important Interview Insight

This pattern:

    .then(success, failure)

is equivalent to:

    .then(success).catch(failure)

BUT NOT EXACTLY SAME in chaining behavior (advanced topic)

---

### Step 6 — Common Mistakes

### Mistake 1

Thinking:

    resolve(2) overrides resolve(1)

❌ Wrong

---

### Mistake 2

Thinking:

    reject('error') will run failure handler

❌ Wrong

---

### Mistake 3

Thinking:

    multiple resolve/reject are queued

❌ Wrong

---

### Correct Mental Model

    Promise = ONE-TIME STATE MACHINE

---

### Step 7 — One-Line Memory Trick

    First resolve/reject wins, rest are ignored forever

---

### Step 8 — If Interviewer Twists This

If order changes:

    reject('error')
    resolve(1)

Then output becomes:

    error

---


