### JavaScript Special Number Operations: Infinity and NaN

---

### Step 1: Given Code

	console.log(1 / 0)
	console.log(0 / 0)
	console.log(-1 / 0)
	console.log(1 / 0 * 0)
	console.log(1 / 0 * 1)
	console.log(1 / 0 * -1)
	console.log(1 / 0 * 1 + 1 / 0 * 1)
	console.log(1 / 0 * 1 - 1 / 0 * 1)
	console.log(1 / 0 * 1 * (1 / 0 * 1))
	console.log(1 / 0 * 1 / (1 / 0 * 1))
	console.log(0 / Infinity)
	console.log(0 * Infinity)

---

### Step 2: Core Concepts

---

### 2.1 Division by Zero

	1 / 0 → Infinity  
	-1 / 0 → -Infinity  

- JavaScript follows IEEE 754 rules  

---

### 2.2 Undefined Operations

	0 / 0 → NaN  

- NaN = Not a Number  

---

### 2.3 Infinity Rules

	Infinity * 1 → Infinity  
	Infinity * -1 → -Infinity  
	Infinity + Infinity → Infinity  
	Infinity - Infinity → NaN  
	Infinity * Infinity → Infinity  
	Infinity / Infinity → NaN  

---

### 2.4 Zero with Infinity

	0 / Infinity → 0  
	0 * Infinity → NaN  

---

### Step 3: Execution (Line by Line)

---

### Line 1

	1 / 0 → Infinity  

Output:

	Infinity

---

### Line 2

	0 / 0 → NaN  

Output:

	NaN

---

### Line 3

	-1 / 0 → -Infinity  

Output:

	-Infinity

---

### Line 4

	1 / 0 * 0

Step:

	Infinity * 0 → NaN  

Output:

	NaN

---

### Line 5

	1 / 0 * 1

	Infinity * 1 → Infinity  

Output:

	Infinity

---

### Line 6

	1 / 0 * -1

	Infinity * -1 → -Infinity  

Output:

	-Infinity

---

### Line 7

	1 / 0 * 1 + 1 / 0 * 1

	Infinity + Infinity → Infinity  

Output:

	Infinity

---

### Line 8

	1 / 0 * 1 - 1 / 0 * 1

	Infinity - Infinity → NaN  

Output:

	NaN

---

### Line 9

	1 / 0 * 1 * (1 / 0 * 1)

	Infinity * Infinity → Infinity  

Output:

	Infinity

---

### Line 10

	1 / 0 * 1 / (1 / 0 * 1)

	Infinity / Infinity → NaN  

Output:

	NaN

---

### Line 11

	0 / Infinity → 0  

Output:

	0

---

### Line 12

	0 * Infinity → NaN  

Output:

	NaN

---

### Step 4: Final Output

	Infinity
	NaN
	-Infinity
	NaN
	Infinity
	-Infinity
	Infinity
	NaN
	Infinity
	NaN
	0
	NaN

---

### Step 5: Key Insights

- Division by 0 → Infinity or -Infinity  
- 0 / 0 → NaN  
- Infinity - Infinity → NaN  
- Infinity / Infinity → NaN  
- 0 * Infinity → NaN  
- 0 / Infinity → 0  

---

### Final Answer

	Infinity
	NaN
	-Infinity
	NaN
	Infinity
	-Infinity
	Infinity
	NaN
	Infinity
	NaN
	0
	NaN
