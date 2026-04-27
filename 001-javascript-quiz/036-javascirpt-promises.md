### JavaScript Promises: finally(), catch(), value propagation, and chaining

---

### Step 1: Given Code

	Promise.resolve(1)
	.finally((data) => {
	  console.log(data)
	  return Promise.reject('error')
	})
	.catch((error) => {
	  console.log(error)
	  throw 'error2'
	})
	.finally((data) => {
	  console.log(data)
	  return Promise.resolve(2).then(console.log)
	})
	.then(console.log)
	.catch(console.log)

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 finally()

- Runs regardless of resolve/reject  
- DOES NOT receive the value (argument is always `undefined`)  
- Its return:
  - if resolves → original value passes through  
  - if rejects → chain becomes rejected  

---

### 2.2 catch()

- Handles rejection  
- Can:
  - recover (return value)
  - or rethrow (throw error)

---

### 2.3 Value Flow Rule

- finally does NOT change value unless it throws/rejects  
- catch can change flow  

---

### Step 3: Execution (Step-by-Step)

---

### Initial

	Promise.resolve(1)

Resolved with:

	1

---

### First finally

	.finally((data) => {
	  console.log(data)
	  return Promise.reject('error')
	})

Key points:

- `data` is ALWAYS undefined  

So:

	console.log(undefined)

Output:

	undefined

Now:

	return Promise.reject('error')

→ chain becomes REJECTED with "error"

---

### catch

	.catch((error) => {
	  console.log(error)
	  throw 'error2'
	})

Receives:

	error

Output:

	error

Then:

	throw 'error2'

→ chain becomes REJECTED with "error2"

---

### Second finally

	.finally((data) => {
	  console.log(data)
	  return Promise.resolve(2).then(console.log)
	})

Again:

	data → undefined  

Output:

	undefined

Now:

	return Promise.resolve(2).then(console.log)

This executes:

	console.log(2)

Output:

	2

Important:

- finally resolves successfully  
- BUT it does NOT override previous rejection  

So chain is still:

	rejected with "error2"

---

### then

	.then(console.log)

- Skipped because promise is rejected  

---

### final catch

	.catch(console.log)

Receives:

	error2

Output:

	error2

---

### Step 4: Final Output Order

	undefined
	error
	undefined
	2
	error2

---

### Step 5: Key Insights

1. finally does NOT receive resolved value  
2. finally cannot change value unless it throws/rejects  
3. catch can transform or rethrow errors  
4. finally runs even after rejection  
5. then is skipped if promise is rejected  
6. Promise inside finally runs but does not override rejection  

---

### Final Answer

	undefined
	error
	undefined
	2
	error2
