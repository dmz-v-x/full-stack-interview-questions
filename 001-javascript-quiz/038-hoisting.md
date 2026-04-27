### JavaScript Hoisting: var vs let (Temporal Dead Zone)

---

### Step 1: Given Code

	let foo = 10

	function func1() {
	    console.log(foo)
	    var foo = 1
	}
	func1 ()

	function func2() {
	    console.log(foo)
	    let foo = 1
	}
	func2 ()

---

### Step 2: Core Concepts

---

### 2.1 var Hoisting

- `var` is hoisted to top of function  
- Initialized with `undefined`  

So:

	var foo

becomes:

	foo → undefined (before assignment)

---

### 2.2 let Hoisting (TDZ)

- `let` is hoisted BUT NOT initialized  
- Exists in **Temporal Dead Zone (TDZ)**  
- Access before declaration → ReferenceError  

---

### Step 3: Execution (func1)

---

### func1()

	function func1() {
	    console.log(foo)
	    var foo = 1
	}

Hoisted version:

	function func1() {
	    var foo
	    console.log(foo)
	    foo = 1
	}

---

### Execution

	console.log(foo)

- Local foo exists  
- Value = undefined  

Output:

	undefined

---

### Step 4: Execution (func2)

---

	function func2() {
	    console.log(foo)
	    let foo = 1
	}

Hoisting:

- `let foo` is in TDZ  
- Not initialized yet  

---

### Execution

	console.log(foo)

- Accessing foo before initialization  

Result:

	ReferenceError

Execution stops here

---

### Step 5: Final Output

	undefined
	ReferenceError

---

### Step 6: Key Insights

- var → hoisted + initialized (undefined)  
- let → hoisted but in TDZ  
- Accessing let before declaration → error  
- Local variables shadow global variables  

---

### Final Answer

	undefined
	ReferenceError
