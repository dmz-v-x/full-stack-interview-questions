### JavaScript Function Declarations, Expressions, and Named Function Expressions

---

### Step 1: Given Code

	function a(){
	}

	const b = function() {
	  
	}

	const c = function d() {
	  console.log(typeof d)
	  d = 'e'
	  console.log(typeof d)
	}

	console.log(typeof a)
	console.log(typeof b)
	console.log(typeof c)
	console.log(typeof d)
	c()

---

### Step 2: Core Concepts

---

### 2.1 Function Declaration

	function a(){}

- This is a function declaration  
- Fully hoisted  
- Available before execution  

So:

	a → function

---

### 2.2 Function Expression

	const b = function(){}

- Function assigned to variable  
- Behaves like a normal variable  
- Available after assignment  

So:

	b → function

---

### 2.3 Named Function Expression (Important)

	const c = function d(){}

- `c` → accessible outside  
- `d` → only accessible inside the function  

Rule:

- `d` is NOT available in global scope  
- Exists only inside the function body  

So:

	typeof c → "function"  
	typeof d → "undefined"

---

### 2.4 typeof Operator

Returns:

	function → "function"  
	undefined → "undefined"  
	string → "string"

---

### Step 3: Execution (Line by Line)

---

### Line 1

	console.log(typeof a)

- `a` is a function  

Output:

	"function"

---

### Line 2

	console.log(typeof b)

- `b` holds a function  

Output:

	"function"

---

### Line 3

	console.log(typeof c)

- `c` holds a function  

Output:

	"function"

---

### Line 4

	console.log(typeof d)

- `d` is NOT defined globally  
- typeof does NOT throw error  

Output:

	"undefined"

---

### Step 4: Function Execution

	c()

Now inside:

	const c = function d() {
	  console.log(typeof d)
	  d = 'e'
	  console.log(typeof d)
	}

---

### Inside Function: First Line

	console.log(typeof d)

- `d` refers to the function itself  

Output:

	"function"

---

### Next Line

	d = 'e'

- Attempt to reassign  
- Named function expression binding is read-only  
- Assignment does NOT affect original binding  

---

### Next Line

	console.log(typeof d)

- `d` is still the function  

Output:

	"function"

---

### Step 5: Final Output

	function
	function
	function
	undefined
	function
	function

---

### Step 6: Summary

- Function declarations are fully hoisted  
- Function expressions behave like variables  
- Named function expression name exists only inside  
- typeof on undeclared variable returns "undefined"  
- Named function expression binding is effectively read-only  

---

### Final Answer

	function
	function
	function
	undefined
	function
	function
