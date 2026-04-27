### JavaScript Type Coercion Puzzle: `'b' + 'a' + + 'b' + 'a'`

---

### Step 1: Given Code

	console.log(('b' + 'a' + + 'b' + 'a').toLowerCase())

---

### Step 2: Core Concepts

---

### 2.1 String Concatenation

When `+` is used with strings:

	'b' + 'a' → "ba"

---

### 2.2 Unary Plus

	+ 'b'

- Tries to convert string to number  
- `'b'` is NOT a valid number  

So:

	+ 'b' → NaN  

---

### 2.3 NaN in String Context

When concatenated:

	"ba" + NaN → "baNaN"

---

### 2.4 toLowerCase()

Converts entire string to lowercase

---

### Step 3: Execution (Step-by-Step)

---

### Expression

	'b' + 'a' + + 'b' + 'a'

---

### Step 3.1

	'b' + 'a' → "ba"

---

### Step 3.2

	+ 'b' → NaN

---

### Step 3.3

	"ba" + NaN → "baNaN"

---

### Step 3.4

	"baNaN" + 'a' → "baNaNa"

---

### Step 3.5

	"baNaNa".toLowerCase()

→ "banana"

---

### Step 4: Final Output

	banana

---

### Step 5: Key Insights

1. Unary `+` converts to number  
2. Invalid conversion → NaN  
3. String + NaN → string concatenation  
4. Order of operations matters  
5. toLowerCase transforms final string  

---

### Final Answer

	banana
