### JavaScript Arrays: Sparse Arrays, Length Behavior, Iteration, and Deletion

---

### Step 1: Given Code

	const a = [0]
	console.log(a.length)
	a[3] = 3
	console.log(a.length)
	for (let item of a) {
	  console.log(item)
	}
	a.map(item => {console.log(item)})
	a.forEach(item => {console.log(item)})
	console.log(Object.keys(a))
	delete a[3]
	console.log(a.length)
	a[2] = 2
	a.length = 1
	console.log(a[0],a[1],a[2])

---

### Step 2: Core Concepts

---

### 2.1 Array Length

- `length` = highest index + 1  
- Even if elements are missing (holes), length still counts them  

Example:

	const arr = []
	arr[3] = 10

Now:

	length → 4 (0 to 3)

---

### 2.2 Sparse Arrays (Holes)

When you skip indexes:

	a[3] = 3

Array becomes:

	[0, empty, empty, 3]

- Index 1 and 2 are **holes**
- Not `undefined`
- They are **missing values**

---

### 2.3 Iteration Differences

#### for...of

	for (let item of a)

- Iterates over values
- Holes behave like `undefined`

---

#### map()

	a.map(...)

- Skips holes
- Only runs on existing elements

---

#### forEach()

	a.forEach(...)

- Also skips holes

---

### 2.4 Object.keys()

	Object.keys(a)

- Returns only existing indexes (as strings)
- Skips holes

---

### 2.5 delete Operator

	delete a[3]

- Removes the element
- Leaves a hole
- DOES NOT reduce length

---

### 2.6 Manually Changing Length

	a.length = 1

- Truncates array
- Removes all elements beyond index 0

---

### Step 3: Execution (Line by Line)

---

### Line 1

	const a = [0]

Array:

	[0]

---

### Line 2

	console.log(a.length)

Output:

	1

---

### Line 3

	a[3] = 3

Array becomes:

	[0, empty, empty, 3]

---

### Line 4

	console.log(a.length)

Highest index = 3 → length = 4

Output:

	4

---

### Step 4: for...of Loop

	for (let item of a)

Array:

	[0, empty, empty, 3]

Iteration:

	0
	undefined
	undefined
	3

Output:

	0
	undefined
	undefined
	3

---

### Step 5: map()

	a.map(item => {console.log(item)})

- Runs only on existing elements
- Skips holes

Existing elements:

	index 0 → 0  
	index 3 → 3  

Output:

	0
	3

---

### Step 6: forEach()

	a.forEach(item => {console.log(item)})

Same behavior as map:

Output:

	0
	3

---

### Step 7: Object.keys()

	console.log(Object.keys(a))

Existing indexes:

	["0", "3"]

Output:

	["0", "3"]

---

### Step 8: delete

	delete a[3]

Array becomes:

	[0, empty, empty, empty]

---

### Line 9

	console.log(a.length)

Length remains unchanged:

	4

Output:

	4

---

### Step 9: Assign New Value

	a[2] = 2

Array:

	[0, empty, 2, empty]

---

### Step 10: Reduce Length

	a.length = 1

Array becomes:

	[0]

All elements beyond index 0 are removed

---

### Final Line

	console.log(a[0],a[1],a[2])

Values:

	a[0] → 0  
	a[1] → undefined  
	a[2] → undefined  

Output:

	0 undefined undefined

---

### Step 11: Final Output

	1
	4
	0
	undefined
	undefined
	3
	0
	3
	0
	3
	["0","3"]
	4
	0 undefined undefined

---

### Step 12: Summary

- Array length depends on highest index  
- Skipped indexes create holes (not undefined values)  
- for...of → includes holes as undefined  
- map() / forEach() → skip holes  
- Object.keys() → only real indexes  
- delete → creates hole, does not change length  
- Setting length smaller → truncates array  

---

### Final Answer

	1
	4
	0
	undefined
	undefined
	3
	0
	3
	0
	3
	["0","3"]
	4
	0 undefined undefined
