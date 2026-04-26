### JavaScript Special Numeric Values: Infinity, -0, NaN, and BigInt Division

---

### Step 1: Given Code

	console.log(1 / 0)
	console.log(-1 / 0)
	console.log(0 / 0)
	console.log(0 === -0)
	console.log(Object.is(0, -0))
	console.log(Object.is(0, Math.round(-0.5)))
	console.log(Object.is(0, Math.round(0.5)))
	console.log(0 * Infinity)
	console.log(Infinity / Infinity)
	console.log(Object.is(0, Math.sign(0)))
	console.log(Object.is(0, Math.sign(-0)))
	console.log(1 / -0)
	console.log(1 / 0)
	console.log(1n / 0n)

---

### Step 2: Core Concepts

---

### 2.1 Division by Zero

	1 / 0 → Infinity  
	-1 / 0 → -Infinity  

- JavaScript does NOT throw error for number division by zero  
- It returns Infinity or -Infinity  

---

### 2.2 0 / 0

- Undefined mathematical operation  

Result:

	NaN

---

### 2.3 +0 and -0

- JavaScript has two zeros:
  - +0
  - -0

Comparison:

	0 === -0 → true  
	Object.is(0, -0) → false  

---

### 2.4 Math.round()

	Math.round(-0.5) → -0  
	Math.round(0.5) → 1  

---

### 2.5 Infinity Operations

	0 * Infinity → NaN  
	Infinity / Infinity → NaN  

---

### 2.6 Math.sign()

Returns:

	Math.sign(0) → 0  
	Math.sign(-0) → -0  

---

### 2.7 BigInt Division

	1n / 0n

- BigInt does NOT allow division by zero  
- Throws error

---

### Step 3: Execution (Line by Line)

---

### Line 1

	console.log(1 / 0)

Output:

	Infinity

---

### Line 2

	console.log(-1 / 0)

Output:

	-Infinity

---

### Line 3

	console.log(0 / 0)

Output:

	NaN

---

### Line 4

	console.log(0 === -0)

Output:

	true

---

### Line 5

	console.log(Object.is(0, -0))

Output:

	false

---

### Line 6

	console.log(Object.is(0, Math.round(-0.5)))

Math.round(-0.5) → -0  

So:

	Object.is(0, -0) → false  

Output:

	false

---

### Line 7

	console.log(Object.is(0, Math.round(0.5)))

Math.round(0.5) → 1  

So:

	Object.is(0, 1) → false  

Output:

	false

---

### Line 8

	console.log(0 * Infinity)

Output:

	NaN

---

### Line 9

	console.log(Infinity / Infinity)

Output:

	NaN

---

### Line 10

	console.log(Object.is(0, Math.sign(0)))

Math.sign(0) → 0  

So:

	Object.is(0, 0) → true  

Output:

	true

---

### Line 11

	console.log(Object.is(0, Math.sign(-0)))

Math.sign(-0) → -0  

So:

	Object.is(0, -0) → false  

Output:

	false

---

### Line 12

	console.log(1 / -0)

Output:

	-Infinity

---

### Line 13

	console.log(1 / 0)

Output:

	Infinity

---

### Line 14

	console.log(1n / 0n)

- BigInt division by zero  

Result:

	Throws RangeError (division by zero)

---

### Step 4: Final Output

	Infinity
	-Infinity
	NaN
	true
	false
	false
	false
	NaN
	NaN
	true
	false
	-Infinity
	Infinity
	RangeError

---

### Step 5: Summary

- Division by 0 → Infinity or -Infinity  
- 0 / 0 → NaN  
- 0 === -0 → true, but Object.is distinguishes them  
- Math.round(-0.5) → -0  
- 0 * Infinity → NaN  
- Infinity / Infinity → NaN  
- Math.sign preserves -0  
- BigInt division by zero → throws error  

---

### Final Answer

	Infinity
	-Infinity
	NaN
	true
	false
	false
	false
	NaN
	NaN
	true
	false
	-Infinity
	Infinity
	RangeError
