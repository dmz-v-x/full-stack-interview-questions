### JavaScript Hoisting Priority: function vs var vs function expressions

---

### Step 1: Given Code

	var a = 1
	function a() {
	}

	console.log(typeof a)

	var b
	function b() {
	}
	b = 1

	console.log(typeof b)

	function c() {
	}
	var c = 1;

	console.log(typeof c)

	var d = 1;

	(function(){
	  d = '2'
	  console.log(typeof d)
	  function d() {
	  }
	})()

	console.log(typeof d)

	var e = 1
	const f = function e() {}

	console.log(typeof e)

---

### Step 2: Core Concepts

---

### 2.1 Hoisting Priority (VERY IMPORTANT)

Order of priority during hoisting:

1. function declarations  
2. var declarations  
3. assignments happen later during execution  

---

### 2.2 Key Rules

- function declaration overrides var during hoisting  
- var assignment can override function later  
- inside function → local scope shadows outer scope  
- named function expression name exists only inside  

---

### Step 3: Execution (Line by Line)

---

### Case 1

	var a = 1
	function a() {}

Hoisting:

	function a() {}
	var a

Execution:

	a = 1  (overwrites function)

So:

	typeof a → "number"

Output:

	number

---

### Case 2

	var b
	function b() {}
	b = 1

Hoisting:

	function b() {}
	var b

Execution:

	b = 1  (overwrites function)

So:

	typeof b → "number"

Output:

	number

---

### Case 3

	function c() {}
	var c = 1

Hoisting:

	function c() {}
	var c

Execution:

	c = 1

So:

	typeof c → "number"

Output:

	number

---

### Case 4 (MOST IMPORTANT)

	var d = 1;

	(function(){
	  d = '2'
	  console.log(typeof d)
	  function d() {}
	})()

---

#### Inside IIFE hoisting:

	function d() {}
	var d

So local `d` exists

---

#### Execution inside IIFE:

	d = '2'   → assigns to local d  
	console.log(typeof d)

Output:

	string

---

#### Outside IIFE

Global d was:

	var d = 1

Not affected by inner function

So:

	typeof d → "number"

Output:

	number

---

### Case 5

	var e = 1
	const f = function e() {}

- function name `e` inside expression is local only  

Global e remains:

	1

So:

	typeof e → "number"

Output:

	number

---

### Step 4: Final Output

	number
	number
	number
	string
	number
	number

---

### Step 5: Summary

- function declarations are hoisted before var  
- assignments override previous values  
- function scope creates separate variable  
- named function expression name is local only  
- inner function variable shadows outer variable  

---

### Final Answer

	number
	number
	number
	string
	number
	number
