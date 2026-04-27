### JavaScript `Object.groupBy()` Return Type and `toString()` Error 

---

### Step 1: Given Code

	const items = [
	  { id: 'a' },
	  { id: 'b' },
	]

	const groups = Object.groupBy(items, ({id}) => id)

	console.log(items.toString())
	console.log(groups.toString())

---

### Step 2: What You Expected vs What Actually Happens

You expected:

	groups.toString() → "[object Object]"

But actual output:

	Error

So what's happening?

---

### Step 3: Core Concept (CRITICAL)

---

### 3.1 Object.groupBy() DOES NOT return a normal object

It returns a **null-prototype object**

Meaning:

	Object.getPrototypeOf(groups) === null

---

### 3.2 What is a null-prototype object?

Normally:

	const obj = {}

Has:

	obj.__proto__ → Object.prototype

So it inherits:

	toString()
	hasOwnProperty()
	etc.

---

BUT:

	Object.groupBy(...) returns:

	Object.create(null)

So:

- NO prototype  
- NO inherited methods  

---

### Step 4: Consequence

	groups.toString()

- There is NO toString method  
- So JS tries to call undefined  

Result:

	TypeError

---

### Step 5: First Line Still Works

	console.log(items.toString())

Array has prototype → has toString

Each object → "[object Object]"

Result:

	"[object Object],[object Object]"

---

### Step 6: Second Line Fails

	console.log(groups.toString())

groups:

- has NO prototype  
- has NO toString  

So:

	TypeError: groups.toString is not a function

---

### Step 7: Final Output

	"[object Object],[object Object]"
	Error

---

### Step 8: Key Insights (VERY IMPORTANT)

1. Object.groupBy returns a **null-prototype object**  
2. Null-prototype objects do NOT inherit from Object.prototype  
3. So methods like:
   - toString()
   - hasOwnProperty()
   do NOT exist  
4. Calling them → TypeError  

---

### Step 9: How to Fix (Extra Insight)

If you want to safely use toString:

	Object.prototype.toString.call(groups)

---

### Final Answer

	"[object Object],[object Object]"
	Error
