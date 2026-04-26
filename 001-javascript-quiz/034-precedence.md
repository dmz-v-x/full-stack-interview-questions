### JavaScript Operator Parsing: ++, --, Unary +, and Expression Splitting

---

### Step 1: Given Code

	let a = 1
	console.log(a +++ a)

	let b = 1
	console.log(b + + + b)

	let c = 1
	console.log(c --- c)

	let d = 1
	console.log(d - - - d)

---

### Step 2: Core Concept (VERY IMPORTANT)

JavaScript parses operators **greedily (longest match first)**

So:

	+++ → parsed as:
	++ +   (post-increment + addition)

	--- → parsed as:
	-- -   (post-decrement + subtraction)

---

### Step 3: Execution (Line by Line)

---

### Case 1

	let a = 1
	a +++ a

Parsing:

	a++ + a

Step-by-step:

1. a++ → returns 1, then a becomes 2  
2. second a → now 2  

So:

	1 + 2 = 3  

Output:

	3

---

### Case 2

	let b = 1
	b + + + b

Parsing:

	b + (+(+b))

Step-by-step:

1. +b → 1  
2. +(+b) → 1  
3. b + 1 → 1 + 1  

Result:

	2  

Output:

	2

---

### Case 3

	let c = 1
	c --- c

Parsing:

	c-- - c

Step-by-step:

1. c-- → returns 1, then c becomes 0  
2. second c → now 0  

So:

	1 - 0 = 1  

Output:

	1

---

### Case 4

	let d = 1
	d - - - d

Parsing:

	d - (-( -d ))

Step-by-step:

1. -d → -1  
2. -( -d ) → 1  
3. d - 1 → 1 - 1  

Result:

	0  

Output:

	0

---

### Step 4: Final Output

	3
	2
	1
	0

---

### Step 5: Key Insights

- JavaScript prefers longest valid operator (`++`, `--`)  
- Post-increment returns old value, then updates  
- Unary `+` converts to number  
- Unary `-` negates value  
- Expression spacing does NOT matter — parsing rules do  

---

### Final Answer

	3
	2
	1
	0
