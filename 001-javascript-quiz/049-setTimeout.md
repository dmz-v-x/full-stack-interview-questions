### JavaScript Event Loop — Blocking + setTimeout

---

### Step 1: Given Code

	function block(duration = 1000) {
	  const start = Date.now()
	  while (Date.now() - start < duration) {
	    window.timestamp = Date.now()
	  }
	}

	function a() {
	   console.log(1)
	   block()
	   setTimeout(() => console.log(2), 0)
	   setTimeout(() => console.log(3), 1)
	}

	function b() {
	  console.log(4)
	}

	console.log(5)
	setTimeout(a, 0)
	setTimeout(b, 500)

---

### Step 2: Core Concepts (CRITICAL)

---

### 2.1 JavaScript is Single-Threaded

- Only ONE thing runs at a time  
- While `block()` runs → NOTHING else runs  

---

### 2.2 setTimeout

	setTimeout(fn, delay)

- Delay = **minimum wait time**, not exact  
- Callback goes to **macrotask queue**  

---

### 2.3 Event Loop Rule (IMPORTANT)

After current code finishes:

- Take **next task from queue (FIFO order)**  
- FIFO = order in which callbacks were queued  

---

### Step 3: Timeline Execution

---

### Step 3.1: Initial Execution (Synchronous)

	console.log(5)

Output:

	5

---

### Step 3.2: Schedule Timers

	setTimeout(a, 0)     → scheduled at time = 0ms
	setTimeout(b, 500)   → scheduled at time = 0ms

---

### Step 3.3: Event Loop Picks First Timer

	a() executes

---

### Step 3.4: Inside a()

	console.log(1)

Output:

	1

---

### Step 3.5: block() Runs (~1000ms)

- Blocks main thread completely  
- During this time:
  - b becomes **ready at 500ms**
  - BUT cannot run (thread blocked)

---

### Step 3.6: After block finishes (~1000ms)

Now inside a():

	setTimeout(() => console.log(2), 0)
	setTimeout(() => console.log(3), 1)

So:

- Timer 2 scheduled at ~1000ms
- Timer 3 scheduled at ~1000ms

---

### Step 4: What is in the Queue NOW?

At the moment a() finishes:

### Already waiting:

	b → ready since 500ms

### Newly scheduled:

	2 → ready immediately (0ms delay)
	3 → ready at ~1001ms

---

### Step 5: CRITICAL RULE (Queue Ordering)

The queue order is based on:

- When callbacks were **added to queue**, NOT just delay

Order:

	b (queued earlier)
	2 (queued after block)
	3 (queued last)

BUT here's the subtle part:

- `2` gets queued immediately after a() completes  
- It is processed in the **next tick before older timers sometimes**

---

### Step 6: Actual Execution Order

---

### Next Execution

	console.log(2)

Output:

	2

---

### Next

	console.log(4)

Output:

	4

---

### Next

	console.log(3)

Output:

	3

---

### Step 7: Final Output

	5
	1
	2
	4
	3

---

### Step 8: Why NOT 5 1 4 2 3 ?

Because:

- Even though `b` was ready earlier,
- `2` gets scheduled **after blocking with 0 delay**
- It runs immediately in next cycle before older delayed timers

---

### Step 9: Final Mental Model (VERY IMPORTANT)

1. Blocking pauses everything  
2. Timers become "ready" but wait  
3. After blocking:
   - newly scheduled 0ms timers can run first  
4. Event loop is NOT strictly time-based  
5. Queue behavior depends on scheduling + cycles  

---

### Final Answer

	5
	1
	2
	4
	3
