### JavaScript Promise.all(), async/await, and Resolution/Rejection Behavior

---

### Step 1: Given Code

	(async () => {
	  await Promise.all([]).then((value) => {
	    console.log(value)
	  }, (error) => {
	    console.log(error)
	  })
	  
	  await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
	    console.log(value)
	  }, (error) => {
	    console.log(error)
	  })
	  
	  await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')]).then((value) => {
	    console.log(value)
	  }, (error) => {
	    console.log(error)
	  })
	})()

---

### Step 2: Core Concepts

---

### 2.1 Promise.all()

	Promise.all(iterable)

- Takes an array (or iterable)
- Returns a new Promise

Behavior:

1. If ALL values resolve → returns array of resolved values  
2. If ANY value rejects → immediately rejects  
3. Maintains order of input  

---

### 2.2 Non-Promise Values

	Promise.all([1,2])

- Non-promises are automatically wrapped:

	1 → Promise.resolve(1)  
	2 → Promise.resolve(2)

---

### 2.3 Empty Array Case

	Promise.all([])

- Resolves immediately
- Returns:

	[]

---

### 2.4 then(success, error)

	.then(successCallback, errorCallback)

- If resolved → successCallback runs  
- If rejected → errorCallback runs  

---

### 2.5 async / await

- `await` waits for Promise to settle  
- Execution pauses until result comes  

---

### Step 3: Execution (Line by Line)

---

### Case 1

	await Promise.all([])

- Empty array  
- Resolves immediately  

Resolved value:

	[]

So success callback runs:

	console.log(value)

Output:

	[]

---

### Case 2

	await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)])

Convert values:

	1 → Promise.resolve(1)  
	2 → Promise.resolve(2)

So effectively:

	Promise.all([Promise(1), Promise(2), Promise(3), Promise(4)])

All resolve successfully  

Final result:

	[1,2,3,4]

Output:

	[1,2,3,4]

---

### Case 3

	await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')])

Convert:

	1 → Promise.resolve(1)  
	2 → Promise.resolve(2)

Now array contains:

	Promise.resolve(1)  
	Promise.resolve(2)  
	Promise.resolve(3)  
	Promise.reject('error')

Behavior:

- As soon as rejection happens → Promise.all rejects  
- It does NOT wait for other promises  

So:

	error callback runs

Output:

	error

---

### Step 4: Final Output

	[]
	[1,2,3,4]
	error

---

### Step 5: Summary

- Promise.all([]) → resolves to [] immediately  
- Non-promises are auto-converted to resolved promises  
- If all succeed → returns array of values  
- If any fails → rejects immediately  
- then(success, error) handles both cases  
- await pauses execution until Promise resolves/rejects  

---

### Final Answer

	[]
	[1,2,3,4]
	error
