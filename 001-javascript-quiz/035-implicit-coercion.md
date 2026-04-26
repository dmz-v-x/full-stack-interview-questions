### JavaScript `{}` vs `[]` + Unary `+`

---

### Step 1: Given Code

	console.log( [] + {} )
	console.log( + {} )
	console.log( + [] )
	console.log( {} + [])
	console.log( ({}) + [])
	console.log( ({}) + [])
	console.log( ({}) + [])
	console.log( {} +  + [])
	console.log( {} +  + [] + {} )
	console.log( {} +  + [] + {}  + [])

---

### Step 2: Core Concepts (CRITICAL)

---

### 2.1 Expression Context vs Statement Context

Since everything is inside:

	console.log(...)

JavaScript treats `{}` as an **object**, NOT a block.

This is the MOST IMPORTANT assumption.

---

### 2.2 Type Conversion Rules

Array:

	[] → ""  

Object:

	{} → "[object Object]"  

---

### 2.3 Unary Plus

	+value

- Converts to number  

Examples:

	+[] → 0  
	+{} → NaN  

---

### 2.4 + Operator

If any operand becomes string → concatenation

---

### Step 3: Execution (Line by Line)

---

### Line 1

	[] + {}

	"" + "[object Object]"

Output:

	"[object Object]"

---

### Line 2

	+ {}

	Object → NaN  

Output:

	NaN

---

### Line 3

	+ []

	"" → 0  

Output:

	0

---

### Line 4

	{} + []

Now `{}` is object (expression context)

	"[object Object]" + ""

Output:

	"[object Object]"

---

### Line 5

	({}) + []

Forces object explicitly:

	"[object Object]" + ""

Output:

	"[object Object]"

---

### Line 6

Same:

Output:

	"[object Object]"

---

### Line 7

Same:

Output:

	"[object Object]"

---

### Line 8

	{} + + []

Step:

	+[] → 0  

Now:

	"[object Object]" + 0

Output:

	"[object Object]0"

---

### Line 9

	{} + + [] + {}

Step-by-step:

	+[] → 0  
	"[object Object]" + 0 → "[object Object]0"  
	+ {} → "[object Object]0[object Object]"

Output:

	"[object Object]0[object Object]"

---

### Line 10

	{} + + [] + {} + []

Step-by-step:

	"[object Object]" + 0 → "[object Object]0"  
	+ {} → "[object Object]0[object Object]"  
	+ [] → ""

Final:

	"[object Object]0[object Object]"

Output:

	"[object Object]0[object Object]"

---

### Step 4: Final Output

	[object Object]
	NaN
	0
	[object Object]
	[object Object]
	[object Object]
	[object Object]
	[object Object]0
	[object Object]0[object Object]
	[object Object]0[object Object]

---

### Step 5: Key Insights

1. Inside function arguments → `{}` is object  
2. `[] → ""`, `{}` → "[object Object]"  
3. `+[] → 0`, `+{} → NaN`  
4. String presence → concatenation  
5. Evaluation order matters  

---

### Final Answer

	[object Object]
	NaN
	0
	[object Object]
	[object Object]
	[object Object]
	[object Object]
	[object Object]0
	[object Object]0[object Object]
	[object Object]0[object Object]
