### JavaScript Prototype Chain: Function, Object, and instanceof (Deep Dive)

---

### Step 1: Given Code

	console.log(Function.prototype.__proto__ === Object.prototype)
	console.log(Function.__proto__ === Object.__proto__)
	console.log(Function.__proto__.__proto__ === Object.prototype)
	console.log(Object.constructor.prototype === Object.prototype)
	console.log(Function.constructor === Function)
	console.log(Object.constructor === Object)
	console.log(Array.__proto__ === Function.__proto__)
	console.log(Array.constructor === Function)
	console.log(Object.__proto__ === Function)
	console.log(Function.__proto__ === Function.prototype)
	console.log(Object instanceof Object)
	console.log(Function instanceof Function)
	console.log(Map instanceof Map)

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 Everything is an Object

- Functions are also objects  
- Functions have:
  - __proto__ (internal prototype)
  - prototype (for instances)

---

### 2.2 Key Relationships

#### Function

	Function.__proto__ === Function.prototype

#### Object

	Object.__proto__ === Function.prototype

#### Prototype Chain

	Function.prototype → Object.prototype → null

---

### 2.3 instanceof Rule

	a instanceof B

Checks:

	B.prototype is in prototype chain of a

---

### Step 3: Execution (Line by Line)

---

### Line 1

	Function.prototype.__proto__ === Object.prototype

True:

Function.prototype → Object.prototype

Output:

	true

---

### Line 2

	Function.__proto__ === Object.__proto__

Both:

	Function.__proto__ → Function.prototype  
	Object.__proto__ → Function.prototype  

Output:

	true

---

### Line 3

	Function.__proto__.__proto__ === Object.prototype

	Function.__proto__ → Function.prototype  
	Function.prototype.__proto__ → Object.prototype  

Output:

	true

---

### Line 4

	Object.constructor.prototype === Object.prototype

	Object.constructor → Function  
	Function.prototype ≠ Object.prototype  

Output:

	false

---

### Line 5

	Function.constructor === Function

Function is created by itself

Output:

	true

---

### Line 6

	Object.constructor === Object

	Object.constructor → Function  

So:

	false

---

### Line 7

	Array.__proto__ === Function.__proto__

	Array.__proto__ → Function.prototype  
	Function.__proto__ → Function.prototype  

Output:

	true

---

### Line 8

	Array.constructor === Function

Arrays are functions internally

Output:

	true

---

### Line 9

	Object.__proto__ === Function

Actually:

	Object.__proto__ → Function.prototype  

So:

	false

---

### Line 10

	Function.__proto__ === Function.prototype

Output:

	true

---

### Line 11

	Object instanceof Object

Check:

	Object.__proto__ → Function.prototype → Object.prototype  

So Object.prototype exists in chain

Output:

	true

---

### Line 12

	Function instanceof Function

Check:

	Function.__proto__ → Function.prototype  

Output:

	true

---

### Line 13

	Map instanceof Map

	Map.__proto__ → Function.prototype  

But:

	Map.prototype is NOT in chain  

Output:

	false

---

### Step 4: Final Output

	true
	true
	true
	false
	true
	false
	true
	true
	false
	true
	true
	true
	false

---

### Step 5: Key Insights

1. Function is both function and object  
2. Function.__proto__ === Function.prototype  
3. All functions inherit from Function.prototype  
4. instanceof checks prototype chain  
5. Map is not instance of itself  
6. Object.constructor is Function  

---

### Final Answer

	true
	true
	true
	false
	true
	false
	true
	true
	false
	true
	true
	true
	false
