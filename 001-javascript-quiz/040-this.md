### JavaScript `this`: Object Literal, Arrow Functions, and Method Calls

---

### Step 1: Given Code

	const obj = {
	  a: 1,
	  b: this.a + 1,
	  c: () => this.a + 1,
	  d() {
	    return this.a + 1
	  },
	  e() {
	    return (() => this.a + 1)()
	  }
	}

	console.log(obj.b)
	console.log(obj.c())
	console.log(obj.d())
	console.log(obj.e())

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 `this` in Object Literal (Initialization Time)

	const obj = {
	  b: this.a + 1
	}

- This runs **during object creation**
- `this` here is **NOT obj**
- It refers to **outer scope (global)**

So:

	this.a → undefined  
	undefined + 1 → NaN  

---

### 2.2 Arrow Function `this`

	c: () => this.a + 1

- Arrow functions do NOT have their own `this`
- They capture `this` from **outer scope**

So:

	this → global  

	this.a → undefined  

---

### 2.3 Normal Method

	d() {
	  return this.a + 1
	}

- Called as `obj.d()`
- `this` → obj  

---

### 2.4 Arrow Inside Method

	e() {
	  return (() => this.a + 1)()
	}

- Arrow captures `this` from surrounding function  
- Surrounding function → method → `this = obj`

---

### Step 3: Execution (Line by Line)

---

### Property b

	b: this.a + 1

At creation time:

	this.a → undefined  

So:

	b → NaN  

---

### console.log(obj.b)

Output:

	NaN

---

### Property c

	c: () => this.a + 1

Arrow function:

	this → global  

	this.a → undefined  

So:

	undefined + 1 → NaN  

---

### console.log(obj.c())

Output:

	NaN

---

### Property d

	obj.d()

- Method call  

	this → obj  

	obj.a = 1  

So:

	1 + 1 = 2  

Output:

	2

---

### Property e

	obj.e()

Inside:

	(() => this.a + 1)()

- Arrow inherits `this` from method  
- method `this = obj`

So:

	1 + 1 = 2  

Output:

	2

---

### Step 4: Final Output

	NaN
	NaN
	2
	2

---

### Step 5: Key Insights

- `this` in object literal ≠ object itself  
- Arrow functions inherit `this` from outer scope  
- Normal methods get `this` from call-site  
- Arrow inside method captures method's `this`  

---

### Final Answer

	NaN
	NaN
	2
	2
