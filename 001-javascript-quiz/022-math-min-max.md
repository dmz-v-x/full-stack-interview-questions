### JavaScript Math.min() and Math.max() Behavior

---

### Step 1: Given Code

	console.log(Math.min())
	console.log(Math.max())
	console.log(Math.min(1))
	console.log(Math.max(1,2))
	console.log(Math.min([1,2,3]))

---

### Step 2: Core Concepts

---

### 2.1 Math.min() and Math.max()

- Both functions expect **numbers as arguments**
- They do NOT expect arrays directly

---

### 2.2 Behavior with No Arguments

	Math.min()
	Math.max()

- No inputs provided

Rules:

- Math.min() → returns **Infinity**
- Math.max() → returns **-Infinity**

Why?

- These are identity values:
  - Minimum of nothing → Infinity
  - Maximum of nothing → -Infinity

---

### 2.3 Behavior with Numbers

	Math.min(1)
	Math.max(1,2)

- Works normally
- Returns smallest / largest value

---

### 2.4 Important Concept: Type Conversion

When non-number is passed:

	Math.min([1,2,3])

JavaScript tries to convert `[1,2,3]` into a number

---

### 2.5 How Array Converts to Number

Step by step:

1. Array → converted to string:

	[1,2,3] → "1,2,3"

2. String → number:

	Number("1,2,3") → NaN

Because `"1,2,3"` is NOT a valid number

---

### Step 3: Execution (Line by Line)

---

### Line 1

	console.log(Math.min())

Output:

	Infinity

---

### Line 2

	console.log(Math.max())

Output:

	-Infinity

---

### Line 3

	console.log(Math.min(1))

Only one value:

Output:

	1

---

### Line 4

	console.log(Math.max(1,2))

Maximum of 1 and 2:

Output:

	2

---

### Line 5

	console.log(Math.min([1,2,3]))

Conversion happens:

	[1,2,3] → "1,2,3" → NaN

So:

	Math.min(NaN) → NaN

Output:

	NaN

---

### Step 4: Final Output

	Infinity
	-Infinity
	1
	2
	NaN

---

### Step 5: Summary

- Math.min() → Infinity when no arguments  
- Math.max() → -Infinity when no arguments  
- Works correctly with numbers  
- Arrays are NOT valid inputs  
- Arrays get converted → string → number  
- Invalid number conversion → NaN  
- Any operation with NaN → NaN  

---

### Final Answer

	Infinity
	-Infinity
	1
	2
	NaN
