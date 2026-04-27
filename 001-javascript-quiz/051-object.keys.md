### JavaScript Object.keys() and Property Order

---

### Step 1: Given Code

	console.log([
	  ...Object.keys({a: 1, b: 2}),
	  ...Object.keys({b: 2, a: 1})
	])

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 Object.keys()

	Object.keys(obj)

- Returns an array of **own enumerable property keys**
- Order is **NOT random**

---

### 2.2 Property Order Rules (Modern JavaScript)

For object keys:

1. Integer-like keys → sorted  
2. String keys → **in insertion order**  
3. Symbols → in insertion order  

---

### 2.3 Important for This Question

Keys:

	a, b

- These are **string keys**
- So order = **insertion order**

---

### Step 3: Execution (Step-by-Step)

---

### First Object

	Object.keys({a: 1, b: 2})

Insertion order:

	a → b

Result:

	['a', 'b']

---

### Second Object

	Object.keys({b: 2, a: 1})

Insertion order:

	b → a

Result:

	['b', 'a']

---

### Step 4: Spread Operator

	[
	  ...['a','b'],
	  ...['b','a']
	]

Becomes:

	['a','b','b','a']

---

### Step 5: Final Output

	['a','b','b','a']

---

### Step 6: Key Insights

1. Object.keys() preserves insertion order for strings  
2. Object literal order matters  
3. Spread operator merges arrays  
4. Keys are NOT automatically sorted  

---

### Final Answer

	['a','b','b','a']
