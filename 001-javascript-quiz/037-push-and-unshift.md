### JavaScript Arrays: push() and unshift() Behavior

---

### Step 1: Given Code

	const arr = [1,2]
	arr.push(3,4)
	arr.unshift(5,6)
	console.log(arr)

---

### Step 2: Core Concepts

---

### 2.1 push()

	arr.push(values...)

- Adds elements to the **end** of the array  
- Modifies original array  

Example:

	[1,2].push(3,4) → [1,2,3,4]

---

### 2.2 unshift()

	arr.unshift(values...)

- Adds elements to the **beginning** of the array  
- Shifts existing elements to the right  

Example:

	[1,2].unshift(5,6) → [5,6,1,2]

---

### Step 3: Execution (Step-by-Step)

---

### Initial Array

	arr = [1,2]

---

### After push

	arr.push(3,4)

Array becomes:

	[1,2,3,4]

---

### After unshift

	arr.unshift(5,6)

Array becomes:

	[5,6,1,2,3,4]

---

### Final Log

	console.log(arr)

Output:

	[5,6,1,2,3,4]

---

### Step 4: Final Output

	[5,6,1,2,3,4]

---

### Step 5: Key Insights

- push → adds at end  
- unshift → adds at beginning  
- both modify original array  
- order of operations matters  

---

### Final Answer

	[5,6,1,2,3,4]
