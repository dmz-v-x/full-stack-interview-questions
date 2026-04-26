### JavaScript Hoisting with Functions: Arrow Functions, Function Declarations, and Function Expressions

---

### Step 1: Given Code

	const func1 = () => console.log(1)

	func1()

	func2()

	function func2() {
	  console.log(2)
	}

	func3()

	var func3 = function func4() {
	  console.log(3)
	}

---

### Step 2: Core Concepts

---

### 2.1 Arrow Function (Assigned to const)

	const func1 = () => console.log(1)

- This is a function expression  
- Stored in a const variable  
- Hoisted but NOT initialized until execution  
- Cannot be used before declaration  

---

### 2.2 Function Declaration

	function func2() {
	  console.log(2)
	}

- Fully hoisted  
- Available before execution  

---

### 2.3 Function Expression with var

	var func3 = function func4() {
	  console.log(3)
	}

- var is hoisted and initialized as undefined  
- Function assignment happens later  

---

### 2.4 Named Function Expression

	function func4()

- Name `func4` exists only inside function body  
- Not accessible outside  

---

### Step 3: Hoisting View (Before Execution)

JavaScript internally treats it like:

	var func3 = undefined

	function func2() {
	  console.log(2)
	}

	// func1 is in TDZ (const, not initialized yet)

---

### Step 4: Execution (Line by Line)

---

### Line 1

	const func1 = () => console.log(1)

- func1 initialized

---

### Line 2

	func1()

Output:

	1

---

### Line 3

	func2()

- func2 is already hoisted

Output:

	2

---

### Line 4

	function func2() { ... }

- Already processed during hoisting

---

### Line 5

	func3()

- func3 is hoisted as:

	func3 = undefined

So:

	undefined()

Result:

	TypeError: func3 is not a function

Execution stops here

---

### Step 5: Important Note

This line never executes:

	var func3 = function func4() {
	  console.log(3)
	}

---

### Step 6: Final Output

	1
	2
	TypeError

---

### Step 7: Summary

- Function declarations → fully hoisted  
- Arrow functions (const) → not usable before declaration  
- var → hoisted as undefined  
- Calling undefined as function → TypeError  
- Named function expression name is local only  

---

### Final Answer

	1
	2
	TypeError
