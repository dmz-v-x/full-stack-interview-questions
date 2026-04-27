### JavaScript `toString` — Correct Explanation 

---

### Step 1: Given Code

	const obj = {}
	const fun = () => {}

	console.log(obj.toString === Object.toString)
	console.log(fun.toString === Function.toString)
	console.log(obj.toString === Object.prototype.toString)
	console.log(fun.toString === Function.prototype.toString)
	console.log(Object.toString === Object.prototype.toString)
	console.log(Function.toString === Function.prototype.toString)

---

### Step 2: Core Concept (CRITICAL FIX)

The earlier mistake was misunderstanding this:

	Object.toString
	Function.toString

Important:

- **Object and Function are themselves functions**
- So they inherit from **Function.prototype**

---

### Step 3: Prototype Chains

---

### For obj

	obj → Object.prototype → null

So:

	obj.toString → Object.prototype.toString

---

### For fun

	fun → Function.prototype → Object.prototype → null

So:

	fun.toString → Function.prototype.toString

---

### For Object (constructor)

	Object is a function

So:

	Object → Function.prototype → Object.prototype

So:

	Object.toString → Function.prototype.toString

---

### For Function (constructor)

	Function is ALSO a function

So:

	Function.toString → Function.prototype.toString

---

### Step 4: Now Evaluate Line by Line

---

### Line 1

	obj.toString === Object.toString

Left:

	Object.prototype.toString  

Right:

	Function.prototype.toString  

Different

Output:

	false

---

### Line 2 (IMPORTANT FIX)

	fun.toString === Function.toString

Left:

	fun.toString → Function.prototype.toString  

Right:

	Function.toString → ALSO Function.prototype.toString  

So BOTH are SAME

Output:

	true

---

### Line 3

	obj.toString === Object.prototype.toString

Same function

Output:

	true

---

### Line 4

	fun.toString === Function.prototype.toString

Same function

Output:

	true

---

### Line 5

	Object.toString === Object.prototype.toString

Left:

	Object.toString → Function.prototype.toString  

Right:

	Object.prototype.toString  

Different

Output:

	false

---

### Line 6

	Function.toString === Function.prototype.toString

Same function

Output:

	true

---

### Step 5: Final Output

	false
	true
	true
	true
	false
	true

---

### Step 6: Key Insights (VERY IMPORTANT)

1. Functions (including Object, Function) inherit from Function.prototype  
2. So Object.toString → Function.prototype.toString  
3. obj.toString → Object.prototype.toString  
4. Function.prototype.toString is shared by ALL functions  
5. Object.prototype.toString is shared by ALL objects  

---

### Final Answer

	false
	true
	true
	true
	false
	true
