### JavaScript Equality: == vs === vs Object.is()

---

### Step 1: Given Code

	console.log(0 == '0')
	console.log(0 === '0')
	console.log(Object.is(0, '0'))

	console.log(0 == 0)
	console.log(0 === 0)
	console.log(Object.is(0, 0))

	console.log(0 == -0)
	console.log(0 === -0)
	console.log(Object.is(0, -0))

	console.log(NaN == NaN)
	console.log(NaN === NaN)
	console.log(Object.is(NaN, NaN))

	console.log(0 == false)
	console.log(0 === false)
	console.log(Object.is(0, false))

---

### Step 2: Core Concepts

---

### 2.1 Loose Equality (==)

- Performs **type coercion**
- Converts values before comparing

Example:

	0 == '0' → true (string converted to number)

---

### 2.2 Strict Equality (===)

- No type conversion
- Compares:
  - value
  - type

Example:

	0 === '0' → false (number vs string)

---

### 2.3 Object.is()

- Similar to === but with 2 important differences:

1. NaN is equal to NaN  
2. +0 and -0 are treated as different  

---

### Step 3: Execution (Case by Case)

---

### Case 1: 0 and '0'

	console.log(0 == '0')

- '0' → converted to number 0

Result:

	true

---

	console.log(0 === '0')

- number vs string

Result:

	false

---

	console.log(Object.is(0, '0'))

- no coercion, different types

Result:

	false

---

### Case 2: 0 and 0

	console.log(0 == 0)

Result:

	true

---

	console.log(0 === 0)

Result:

	true

---

	console.log(Object.is(0, 0))

Result:

	true

---

### Case 3: 0 and -0

	console.log(0 == -0)

- treated same

Result:

	true

---

	console.log(0 === -0)

- treated same

Result:

	true

---

	console.log(Object.is(0, -0))

- distinguishes +0 and -0

Result:

	false

---

### Case 4: NaN and NaN

	console.log(NaN == NaN)

- NaN is never equal to anything (even itself)

Result:

	false

---

	console.log(NaN === NaN)

Result:

	false

---

	console.log(Object.is(NaN, NaN))

- special handling

Result:

	true

---

### Case 5: 0 and false

	console.log(0 == false)

- false → converted to 0

Result:

	true

---

	console.log(0 === false)

- number vs boolean

Result:

	false

---

	console.log(Object.is(0, false))

- no coercion

Result:

	false

---

### Step 4: Final Output

	true
	false
	false

	true
	true
	true

	true
	true
	false

	false
	false
	true

	true
	false
	false

---

### Step 5: Summary

- == → allows type coercion  
- === → strict comparison (no coercion)  
- Object.is():
  - behaves like ===
  - but:
    - NaN === NaN → false, Object.is → true  
    - 0 === -0 → true, Object.is → false  

---

### Final Answer

	true
	false
	false

	true
	true
	true

	true
	true
	false

	false
	false
	true

	true
	false
	false
