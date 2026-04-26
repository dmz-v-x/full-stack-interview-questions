### JavaScript Hoisting: var vs let vs const and Temporal Dead Zone

---

### Step 1: Given Code

	const a = 1
	console.log(a)

	var b
	console.log(b)
	b = 2

	console.log(c)
	var c = 3

	console.log(d)
	let d = 2

---

### Step 2: Core Concepts

---

### 2.1 Hoisting (Very Important)

- JavaScript moves declarations to the top of their scope before execution  
- Behavior depends on keyword:

---

### 2.2 const

	const a = 1

- Hoisted but NOT initialized until execution  
- Access before declaration → ReferenceError  
- Here we access AFTER declaration → safe  

---

### 2.3 var

	var b

- Hoisted AND initialized with `undefined`  
- Can be accessed before assignment  

---

### 2.4 let (Temporal Dead Zone)

	let d

- Hoisted but NOT initialized  
- Access before declaration → ReferenceError  
- This phase is called **Temporal Dead Zone (TDZ)**  

---

### Step 3: How JS Internally Sees This Code (Hoisted Version)

Before execution, JS transforms roughly like this:

	var b = undefined
	var c = undefined

	// let d is hoisted but NOT initialized (TDZ)
	// const a is hoisted but initialized only when reached

---

### Step 4: Execution (Line by Line)

---

### Line 1

	const a = 1

- a is initialized

---

### Line 2

	console.log(a)

Output:

	1

---

### Line 3

	var b

- Already hoisted as undefined

---

### Line 4

	console.log(b)

- b exists but not assigned yet

Output:

	undefined

---

### Line 5

	b = 2

- Now b becomes 2

---

### Line 6

	console.log(c)

- c is hoisted as undefined

Output:

	undefined

---

### Line 7

	var c = 3

- c is now assigned value 3

---

### Line 8

	console.log(d)

- d is in TDZ (not initialized yet)

Result:

	ReferenceError

Execution stops here

---

### Step 5: Final Output

	1
	undefined
	undefined
	ReferenceError

---

### Step 6: Summary

- const → hoisted but not usable before initialization  
- var → hoisted and initialized as undefined  
- let → hoisted but in TDZ until initialized  
- Accessing let/const before initialization → ReferenceError  
- Accessing var before assignment → undefined  

---

### Final Answer

	1
	undefined
	undefined
	ReferenceError
