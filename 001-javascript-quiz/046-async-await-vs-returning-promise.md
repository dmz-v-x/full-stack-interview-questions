### JavaScript async/await vs returning Promise — Error Handling Difference

---

### Step 1: Given Code

	async function a() {
	  try {
	    return await Promise.reject(1)
	  } catch (e) {
	    console.log(e)
	  }
	}

	async function b() {
	  try {
	    return Promise.reject(2)
	  } catch (e) {
	    console.log(e)
	  }
	}

	async function start() {
	  await a()
	  await b()
	}

	start()

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 await vs return (CRITICAL DIFFERENCE)

#### Case A

	return await Promise.reject(x)

- `await` unwraps the promise  
- If rejected → throws error  
- catch block CAN handle it  

---

#### Case B

	return Promise.reject(x)

- No await  
- Just returns a rejected promise  
- catch block CANNOT catch it  

---

### 2.2 try...catch in async

- Only catches:
  - synchronous errors  
  - awaited promise rejections  

---

### Step 3: Execution (Step-by-Step)

---

### Step 3.1: start()

	start()

Calls:

	await a()

---

### Step 3.2: Function a()

	return await Promise.reject(1)

---

#### Inside a()

- Promise.reject(1) → rejected  
- await converts rejection into thrown error  

So:

	throw 1  

---

### Step 3.3: catch in a()

	catch (e)

Handles error:

	console.log(e)

Output:

	1

After catch:

- no return → returns undefined  

So:

	a() resolves with undefined  

---

### Step 3.4: Back to start()

	await a()

- completes successfully  

Now:

	await b()

---

### Step 3.5: Function b()

	return Promise.reject(2)

Important:

- NO await  
- So rejection is NOT caught  

---

### Step 3.6: Back to start()

	await b()

- b() returns rejected promise  

So:

	await throws error  

---

### Step 3.7: No try-catch in start()

So:

Unhandled rejection occurs

Error:

	2

---

### Step 4: Final Output

	1
	UnhandledPromiseRejection: 2

---

### Step 5: Key Insights

1. await converts rejection into throw  
2. try-catch ONLY catches awaited errors  
3. returning Promise.reject bypasses catch  
4. missing await → common bug  
5. async function without catch → unhandled rejection  

---

### Final Answer

	1
	UnhandledPromiseRejection: 2
