### JavaScript JSON.stringify — Handling undefined

---

### Step 1: Given Code

	console.log(JSON.stringify(undefined))
	console.log(JSON.stringify([undefined]))

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 JSON.stringify Behavior

	JSON.stringify(value)

- Converts JavaScript value → JSON string  
- BUT special handling exists for `undefined`

---

### 2.2 Rule 1: Top-Level undefined

	JSON.stringify(undefined)

- Returns:

	undefined (NOT a string)

---

### 2.3 Rule 2: undefined Inside Array

	JSON.stringify([undefined])

- Arrays cannot have "missing values" in JSON  
- So `undefined` is converted to:

	null

---

### Step 3: Execution (Line by Line)

---

### Line 1

	console.log(JSON.stringify(undefined))

Result of stringify:

	undefined

So console prints:

	undefined

---

### Line 2

	console.log(JSON.stringify([undefined]))

Step:

	[undefined] → [null]

Then stringify:

	"[null]"

So console prints:

	[null]

---

### Step 4: Final Output

	undefined
	[null]

---

### Step 5: Key Insights

1. Top-level undefined → returns undefined  
2. Inside array → becomes null  
3. JSON does NOT support undefined  
4. Arrays must maintain structure → use null  
5. Objects drop undefined properties (extra note)  

---

### Final Answer

	undefined
	[null]
