### JavaScript Function Declarations Inside Blocks — Full Step-by-Step Explanation

---

### Step 1: Given Code

	(() => {
	  if (!fn) {
	    function fn() {
	      console.log('2')
	    }
	  }
	  fn()
	})()

	function fn() {
	  console.log('1')
	}

	// another one
	function fn1() {
	  console.log('3')
	}

	(() => {
	  if (!fn1) {
	    function fn1() {
	      console.log('4')
	    }
	  }
	  fn1()
	})()

	// another one !
	(() => {
	  if (false) {
	    function fn3() {
	      console.log('5')
	    }
	  }
	  fn3()
	})()

---

### Step 2: Core Concepts (CRITICAL)

---

### 2.1 Function Declarations Inside Blocks

This is a **tricky JavaScript behavior**.

Rules depend on:

- Non-strict mode (this code)
- Annex B behavior (browser behavior)

---

### 2.2 Simplified Rule (For These Questions)

Inside a function (like IIFE):

- Function declarations inside blocks are **hoisted to the function scope**
- BUT their assignment depends on whether block executes

So two phases:

1. Declaration (hoisted)
2. Assignment (may depend on condition)

---

### Step 3: Case 1

---

#### Code

	(() => {
	  if (!fn) {
	    function fn() {
	      console.log('2')
	    }
	  }
	  fn()
	})()

	function fn() {
	  console.log('1')
	}

---

### Step 3.1: Global Scope

	function fn() { console.log('1') }

So globally:

	fn → function printing '1'

---

### Step 3.2: Enter IIFE

Inside IIFE, JS sees:

	function fn() { console.log('2') }

Due to hoisting:

- A **local fn is created**
- It shadows global fn

So inside IIFE:

	fn → local function (initially undefined or function depending on engine rules)

---

### Step 3.3: Evaluate Condition

	if (!fn)

Now:

- local fn exists (function)
- function is truthy

So:

	!fn → false

Block does NOT execute

---

### Step 3.4: Important Detail

Even though block doesn't execute:

- The function declaration still results in a local binding

So:

	fn inside IIFE → function '2'

---

### Step 3.5: Call fn()

Calls local fn:

Output:

	2

---

### Step 4: Case 2

---

#### Code

	function fn1() {
	  console.log('3')
	}

	(() => {
	  if (!fn1) {
	    function fn1() {
	      console.log('4')
	    }
	  }
	  fn1()
	})()

---

### Step 4.1: Global Scope

	fn1 → function '3'

---

### Step 4.2: Inside IIFE Hoisting

	function fn1() { console.log('4') }

So local fn1 shadows global

---

### Step 4.3: Condition

	if (!fn1)

- fn1 exists locally
- truthy

So:

	false → block not executed

---

### Step 4.4: Call fn1()

Calls local fn1:

Output:

	4

---

### Step 5: Case 3 (MOST IMPORTANT)

---

#### Code

	(() => {
	  if (false) {
	    function fn3() {
	      console.log('5')
	    }
	  }
	  fn3()
	})()

---

### Step 5.1: Enter IIFE

Inside:

	if (false) {
	  function fn3() {}
	}

---

### Step 5.2: Hoisting Behavior

Here is the key difference:

- Function declaration is **block-scoped in this scenario**
- Since block never executes → function is never initialized

---

### Step 5.3: After if Block

	fn3()

Now:

- fn3 does NOT exist in scope

---

### Step 5.4: Result

Calling fn3:

	ReferenceError

---

### Step 6: Final Output

	2
	4
	ReferenceError

---

### Step 7: Final Mental Model (VERY IMPORTANT)

---

### Case 1 & 2

- Function inside block is hoisted to function scope  
- Shadows outer function  
- Condition does not matter for existence  

---

### Case 3

- Block never runs  
- Function never initialized  
- Variable does not exist  

---

### Step 8: Key Takeaways

1. Function declarations inside blocks are tricky  
2. In IIFE, they often get hoisted to function scope  
3. But if block never executes → function may not exist  
4. Behavior depends on spec + engine implementation  
5. Avoid relying on this pattern in real code  

---

### Final Answer

	2
	4
	ReferenceError
