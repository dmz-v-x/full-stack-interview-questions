### JavaScript Scope, Hoisting, and Global Object Behavior

---

### Step 1: Given Code

	var a = 1

	function func() {
	  a = 2
	  console.log(a)
	  var a
	}

	func()

	console.log(a)

	if (!('b' in window)) {
	  var b = 1
	}

	console.log(b)

---

### Step 2: Core Concepts (Key Correction)

---

### 2.1 var and Global Object (Environment Dependent)

- In browsers:
	var b = 1 → attaches to `window`

- In environments like Node.js:
	var b = 1 → does NOT attach to `window`

So:

	'b' in window → true (browser)
	'b' in window → false (Node-like environment)

This question assumes:

	window does NOT contain b

---

### 2.2 Important Behavior of var Inside if

	if (condition) {
	  var b = 1
	}

- `var` is NOT block scoped
- It is hoisted to global scope

BUT:

- Assignment happens ONLY if condition is true

---

### Step 3: Execution (Line by Line)

---

### Line 1

	var a = 1

Global:

	a → 1

---

### Function Call

	func()

Inside function (after hoisting):

	var a
	a = 2
	console.log(a)

Output:

	2

---

### After Function

	console.log(a)

- Global `a` unchanged

Output:

	1

---

### if Condition

	if (!('b' in window))

Assume:

	'b' in window → true

So:

	!true → false

Condition does NOT execute

---

### Important Consequence

	var b

- Declaration is hoisted globally
- But assignment `b = 1` does NOT happen

So:

	b → undefined

---

### Final Line

	console.log(b)

Output:

	undefined

---

### Step 4: Final Output

	2
	1
	undefined

---

### Step 5: Key Insight (Most Important)

- var declaration is hoisted → variable exists  
- assignment happens only if condition runs  
- if condition is false → variable remains undefined  
- window check determines whether block runs  

---

### Final Answer

	2
	1
	undefined
