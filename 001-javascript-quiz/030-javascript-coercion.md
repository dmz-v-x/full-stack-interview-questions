### JavaScript Type Coercion: Arrays, Boolean Objects, and == (Correct Deep Explanation)

---

### Step 1: Given Code

	console.log([1] == 1)
	console.log([1] == '1')
	console.log(['1'] == '1')
	console.log(['1'] == 1)
	console.log([1] == ['1'])
	console.log(new Boolean(true) == 1)
	console.log(new Boolean(true) == new Boolean(true))
	console.log(Boolean(true) == '1')
	console.log(Boolean(false) == [0])
	console.log(new Boolean(true) == '1')
	console.log(new Boolean(false) == [0])
	console.log(null == undefined)

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 Loose Equality (==)

Rules simplified:

1. If types are SAME → compare directly  
2. If types are DIFFERENT → convert values  
3. If object is involved → convert object to primitive  

---

### 2.2 Object to Primitive Conversion

For arrays:

	[1] → "1" → 1  
	['1'] → "1"  

For Boolean objects:

	new Boolean(true) → true → 1  
	new Boolean(false) → false → 0  

---

### 2.3 Boolean Conversion

	true → 1  
	false → 0  

---

### 2.4 Special Rule

	null == undefined → true  

---

### Step 3: Execution (Line by Line)

---

### Line 1

	[1] == 1

	[1] → "1" → 1  
	1 == 1 → true  

Output:

	true

---

### Line 2

	[1] == '1'

	[1] → "1"  

	"1" == "1" → true  

Output:

	true

---

### Line 3

	['1'] == '1'

	['1'] → "1"  

Output:

	true

---

### Line 4

	['1'] == 1

	['1'] → "1" → 1  

	1 == 1 → true  

Output:

	true

---

### Line 5 (VERY IMPORTANT)

	[1] == ['1']

- Both are objects  

Now key question:

Will JS convert or compare reference?

Rule:

- When both are objects → comparison is by reference  
- No coercion happens  

Since they are different arrays:

Output:

	false

---

### Line 6

	new Boolean(true) == 1

	Object → primitive:

	true → 1  

	1 == 1 → true  

Output:

	true

---

### Line 7

	new Boolean(true) == new Boolean(true)

- Both are objects  
- No coercion  

Different references:

Output:

	false

---

### Line 8

	Boolean(true) == '1'

	true → 1  

	1 == "1" → true  

Output:

	true

---

### Line 9

	Boolean(false) == [0]

	false → 0  
	[0] → "0" → 0  

	0 == 0 → true  

Output:

	true

---

### Line 10

	new Boolean(true) == '1'

	Object → primitive:

	true → 1  

	1 == "1" → true  

Output:

	true

---

### Line 11 (MOST CONFUSING CASE)

	new Boolean(false) == [0]

Both are objects → BUT coercion happens

Step-by-step:

	new Boolean(false) → false → 0  
	[0] → "0" → 0  

Now:

	0 == 0 → true  

Output:

	true

---

### Line 12

	null == undefined

Special rule:

Output:

	true

---

### Step 4: Final Output

	true
	true
	true
	true
	false
	true
	false
	true
	true
	true
	true
	true

---

### Step 5: Key Insights (VERY IMPORTANT)

1. Object == primitive → object is converted  
2. Array → string → number  
3. Boolean object → primitive boolean → number  
4. Object == object → reference comparison  
5. BUT coercion can still happen depending on context  
6. new Boolean(false) is NOT false — it's an object  
7. null == undefined is a special case  

---

### Step 6: Final Answer

	true
	true
	true
	true
	false
	true
	false
	true
	true
	true
	true
	true
