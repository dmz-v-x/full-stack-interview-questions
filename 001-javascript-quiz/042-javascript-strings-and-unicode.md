### JavaScript Strings and Unicode (UTF-16, Emoji, and Spread Operator)

---

### Step 1: Given Code

	const str = "BFE👍"
	console.log(str.length)
	console.log(str.slice(3, 4) == '👍')
	console.log([...str].length)
	console.log([...str].slice(3, 4) == '👍')

---

### Step 2: Core Concepts (VERY IMPORTANT)

---

### 2.1 JavaScript Strings are UTF-16

- JavaScript stores strings using **UTF-16 encoding**
- Each character = 16-bit unit (called "code unit")

BUT:

- Some characters (like emoji) need **2 code units**

---

### 2.2 Emoji Representation

	"👍"

- Uses **2 code units**
- So internally:

	"BFE👍" → ['B','F','E','(half)','(half)']

So total length:

	5

---

### 2.3 String length

	str.length

Counts **code units**, not actual characters

---

### 2.4 slice()

	str.slice(start, end)

- Works on **code units**
- Can cut emoji in half → broken character

---

### 2.5 Spread Operator [...]

	[...str]

- Splits string into **actual characters (Unicode-aware)**
- Handles emoji correctly

---

### Step 3: Execution (Line by Line)

---

### Line 1

	console.log(str.length)

String:

	"B F E 👍"

Internally:

	['B','F','E','(emoji part 1)','(emoji part 2)']

So:

Output:

	5

---

### Line 2

	console.log(str.slice(3, 4) == '👍')

	str.slice(3,4)

Index 3 → first half of emoji only

So result:

	broken character (not full emoji)

Comparison:

	false

Output:

	false

---

### Line 3

	console.log([...str].length)

Spread splits properly:

	['B','F','E','👍']

Length:

	4

Output:

	4

---

### Line 4

	console.log([...str].slice(3, 4) == '👍')

Step:

	[...str] → ['B','F','E','👍']

	slice(3,4) → ['👍']

Now comparison:

	['👍'] == '👍'

Array vs string:

	['👍'] → "👍"

So:

	"👍" == "👍" → true

Output:

	true

---

### Step 4: Final Output

	5
	false
	4
	true

---

### Step 5: Key Insights

1. JavaScript strings use UTF-16 (code units)  
2. Emoji uses 2 code units  
3. length counts code units, not characters  
4. slice() can break emoji  
5. Spread operator handles Unicode correctly  
6. Array == string → array converts to string  

---

### Final Answer

	5
	false
	4
	true
