### JavaScript Type Coercion with Arrays and Boolean Wrappers

---

### Step 1: Given Code

	console.log([] == 0)
	console.log([] == false)
	console.log(!![])
	console.log([1] == 1)
	console.log(!![1])
	console.log(Boolean([]))
	console.log(Boolean(new Boolean([])))
	console.log(Boolean(new Boolean(false)))

---

### Step 2: Core Concepts

---

### 2.1 Truthy and Falsy Values

Falsy values:

	false
	0
	""
	null
	undefined
	NaN

Everything else → truthy

Important:

	[] → truthy (even empty array)

---

### 2.2 Loose Equality (==) with Objects

When comparing object with primitive:

	[] == 0

Steps:

1. Object → converted to primitive  
2. Array → toString()  

---

### 2.3 Array to Primitive Conversion

	[].toString() → ""
	[1].toString() → "1"

Then:

	"" → 0  
	"1" → 1  

---

### 2.4 Boolean Conversion

	Boolean(value)

- Converts value to true/false

---

### 2.5 Double NOT (!!)

	!!value

- Converts value to boolean

---

### 2.6 Boolean Object Wrapper (IMPORTANT)

	new Boolean(false)

- This creates an OBJECT
- Objects are always truthy

So:

	Boolean(new Boolean(false)) → true

---

### Step 3: Execution (Line by Line)

---

### Line 1

	console.log([] == 0)

Step:

	[] → "" → 0

So:

	0 == 0 → true

Output:

	true

---

### Line 2

	console.log([] == false)

Step:

	false → 0  
	[] → "" → 0  

So:

	0 == 0 → true

Output:

	true

---

### Line 3

	console.log(!![])

- [] is truthy  

So:

	true

Output:

	true

---

### Line 4

	console.log([1] == 1)

Step:

	[1] → "1" → 1  

So:

	1 == 1 → true

Output:

	true

---

### Line 5

	console.log(!![1])

- Non-empty array → truthy  

Output:

	true

---

### Line 6

	console.log(Boolean([]))

- [] is truthy  

Output:

	true

---

### Line 7

	console.log(Boolean(new Boolean([])))

- new Boolean([]) → object  
- Objects are always truthy  

Output:

	true

---

### Line 8

	console.log(Boolean(new Boolean(false)))

- new Boolean(false) → object  
- Even though value is false, object is truthy  

Output:

	true

---

### Step 4: Final Output

	true
	true
	true
	true
	true
	true
	true
	true

---

### Step 5: Summary

- Arrays are always truthy  
- [] == 0 → true due to conversion "" → 0  
- [] == false → true due to both becoming 0  
- [1] == 1 → true due to "1" → 1  
- !!value → converts to boolean  
- Boolean(object) → always true  
- new Boolean(false) is truthy (important trap)  

---

### Final Answer

	true
	true
	true
	true
	true
	true
	true
	true
