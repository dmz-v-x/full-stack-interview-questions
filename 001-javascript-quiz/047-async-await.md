### JavaScript async/await and Promise Identity (Reference Equality)

---

### Step 1: Given Code

	const promise = Promise.resolve()

	function f() {
	  return promise
	}

	async function a() { return f() }
	async function b() { return await f() }
	function c() { return f() }

	console.log(a() === b())
	console.log(b() === c())
	console.log(a() === c())

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 Promise Identity (Reference Equality)

- `===` compares **reference (memory)**  
- Two different Promise objects → always false  

---

### 2.2 async Function Behavior

Every async function:

- ALWAYS returns a **NEW Promise**  
- Even if you return an existing promise  

---

### 2.3 return vs return await

#### Case A

	return f()

- f() returns a promise  
- async function wraps it → NEW Promise  

---

#### Case B

	return await f()

- await unwraps value  
- then wraps again → NEW Promise  

---

### Step 3: Evaluate Each Function

---

### f()

	function f() {
	  return promise
	}

Returns SAME promise every time

---

### c()

	function c() { return f() }

So:

	c() → returns original promise  

---

### a()

	async function a() { return f() }

- returns NEW Promise  
- not the same as original  

---

### b()

	async function b() { return await f() }

- await unwraps  
- async wraps again  

So:

	b() → NEW Promise  

---

### Step 4: Comparisons

---

### Line 1

	a() === b()

- both are NEW promises  
- different references  

Output:

	false

---

### Line 2

	b() === c()

- b() → new promise  
- c() → original promise  

Different

Output:

	false

---

### Line 3

	a() === c()

- a() → new promise  
- c() → original promise  

Different

Output:

	false

---

### Step 5: Final Output

	false
	false
	false

---

### Step 6: Key Insights

1. async always returns NEW Promise  
2. return vs return await → same result (different internals)  
3. Promise equality checks reference, not value  
4. Only c() returns original promise  

---

### Final Answer

	false
	false
	false
