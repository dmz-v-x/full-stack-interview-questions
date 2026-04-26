### Question
What are Map, Object, Set, and Array in JavaScript? Explain everything about them from absolute beginner to advanced level including all important methods, differences, internal behavior, and when to use each.

### Answer

JavaScript provides several data structures to store and manage collections of data.

The four most commonly used are:

- Object
- Array
- Map
- Set

Although they may appear similar because they store data, they serve **different purposes and behave differently internally**.

Understanding the differences between them is extremely important for writing efficient JavaScript.

---

### What is an Object

An **Object** is a collection of **key-value pairs**.

Each value is stored under a key.

Example:

    const user = {
        name: "Himanshu",
        age: 25,
        city: "Delhi"
    }

Here:

    key → name
    value → "Himanshu"

Objects are one of the **most fundamental data structures in JavaScript**.

---

### Accessing Object Properties

Properties can be accessed using two methods.

Dot notation:

    console.log(user.name)

Bracket notation:

    console.log(user["age"])

Output:

    Himanshu
    25

Bracket notation is useful when keys are dynamic.

Example:

    const key = "city"
    console.log(user[key])

---

### Adding Properties to Object

    const user = {}

    user.name = "Himanshu"
    user.age = 25

Result:

    { name: "Himanshu", age: 25 }

---

### Deleting Object Properties

    delete user.age

---

### Object Methods

Objects provide several built-in methods.

Object.keys()

Returns all keys.

Example:

    const obj = { a: 1, b: 2 }

    Object.keys(obj)

Output:

    ["a", "b"]

---

### Object.values()

Returns all values.

Example:

    Object.values(obj)

Output:

    [1, 2]

---

### Object.entries()

Returns key-value pairs.

Example:

    Object.entries(obj)

Output:

    [["a",1],["b",2]]

---

### Iterating Over Objects

Using for...in

    for (let key in obj) {
        console.log(key, obj[key])
    }

---

### Object Limitations

Objects have some limitations.

1 Keys must be strings or symbols.

Example:

    const obj = {}
    obj[1] = "value"

Key becomes:

    "1"

2 Objects are not optimized for frequent insertions and deletions.

3 Objects do not maintain strict insertion order in older environments.

Because of these limitations, **Map was introduced**.

---

### What is an Array

An **Array** is an ordered list of values.

Example:

    const numbers = [10, 20, 30]

Arrays maintain **order and index positions**.

Index positions start from 0.

    numbers[0] → 10
    numbers[1] → 20

---

### Adding Elements to Arrays

push()

Adds element at end.

    numbers.push(40)

Result:

    [10,20,30,40]

---

### Removing Elements

pop()

Removes last element.

    numbers.pop()

shift()

Removes first element.

    numbers.shift()

unshift()

Adds element at beginning.

    numbers.unshift(5)

---

### Important Array Methods

map()

Transforms array.

Example:

    const nums = [1,2,3]

    const doubled = nums.map(n => n * 2)

Result:

    [2,4,6]

---

### filter()

Filters elements.

Example:

    const nums = [1,2,3,4]

    const even = nums.filter(n => n % 2 === 0)

Result:

    [2,4]

---

### reduce()

Reduces array to single value.

Example:

    const nums = [1,2,3,4]

    const sum = nums.reduce((acc,n) => acc + n, 0)

Result:

    10

---

### find()

Returns first matching element.

    nums.find(n => n > 2)

---

### some()

Returns true if any element matches condition.

    nums.some(n => n > 3)

---

### every()

Returns true if all elements satisfy condition.

---

### includes()

Checks if value exists.

---

### slice()

Returns portion of array.

---

### splice()

Modifies original array.

---

### Array Iteration

forEach

    nums.forEach(n => console.log(n))

---

### What is a Set

A **Set** is a collection of **unique values**.

Duplicate values are automatically removed.

Example:

    const set = new Set([1,2,2,3,3])

Result:

    {1,2,3}

---

### Adding Elements to Set

    set.add(4)

---

### Removing Elements

    set.delete(2)

---

### Checking Values

    set.has(3)

---

### Set Size

    set.size

---

### Clearing Set

    set.clear()

---

### Iterating Set

    for (let value of set) {
        console.log(value)
    }

---

### Set Methods

add()

delete()

has()

clear()

values()

keys()

entries()

---

### Use Cases of Set

Set is useful for:

Removing duplicates.

Example:

    const arr = [1,1,2,2,3]

    const unique = [...new Set(arr)]

Result:

    [1,2,3]

---

### What is a Map

A **Map** is a collection of key-value pairs similar to objects.

But with important differences.

Map allows **any type of key**.

Example:

    const map = new Map()

    map.set("name", "Himanshu")
    map.set(1, "number key")
    map.set(true, "boolean key")

---

### Accessing Map Values

    map.get("name")

---

### Checking Keys

    map.has("name")

---

### Deleting Keys

    map.delete("name")

---

### Map Size

    map.size

---

### Clearing Map

    map.clear()

---

### Iterating Map

    for (let [key,value] of map) {
        console.log(key,value)
    }

---

### Map Methods

set()

get()

has()

delete()

clear()

keys()

values()

entries()

forEach()

---

### Map Example with Objects as Keys

Example:

    const user = { id: 1 }

    const map = new Map()

    map.set(user, "User data")

    map.get(user)

Objects cannot do this safely.

---

### Object vs Map

| Feature | Object | Map |
|------|------|------|
| Key type | String/Symbol | Any type |
| Order | Not guaranteed historically | Maintains insertion order |
| Size property | No | Yes |
| Iteration | Limited | Easy iteration |

Use Map when:

- Keys are dynamic
- Keys are objects
- Frequent insert/delete operations

---

### Array vs Set

| Feature | Array | Set |
|------|------|------|
| Duplicate values | Allowed | Not allowed |
| Order | Maintained | Maintained |
| Index access | Yes | No |

Use Set when:

- Unique values required
- Fast membership checks

---

### Map vs Object vs Array vs Set

| Structure | Stores | Use Case |
|------|------|------|
| Object | key-value pairs | structured data |
| Array | ordered list | collections and sequences |
| Set | unique values | removing duplicates |
| Map | key-value pairs (any key) | dynamic key storage |

---

### Performance Considerations

Objects:

    optimized for property access

Arrays:

    optimized for sequential data

Maps:

    optimized for frequent insertions

Sets:

    optimized for membership checks

---

### Real World Example

Removing duplicate user IDs.

Example:

    const users = [1,2,3,2,1,4]

    const unique = new Set(users)

Result:

    {1,2,3,4}

---

### Complex Example Combining Structures

Example:

    const users = [
        {id:1,name:"A"},
        {id:2,name:"B"},
        {id:3,name:"C"}
    ]

    const userMap = new Map()

    users.forEach(user => {
        userMap.set(user.id, user)
    })

Now we can lookup quickly:

    userMap.get(2)

Result:

    {id:2,name:"B"}

---

### Summary

JavaScript has multiple data structures designed for different tasks.

Objects

    best for structured data and configurations.

Arrays

    best for ordered collections.

Sets

    best for storing unique values.

Maps

    best for dynamic key-value storage.

Choosing the correct structure leads to:

- cleaner code
- better performance
- easier maintenance
