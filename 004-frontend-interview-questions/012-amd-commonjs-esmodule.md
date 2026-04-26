### Question
Explain the differences between AMD, CommonJS, and ES Modules in JavaScript.

### Answer

JavaScript modules are a way to **organize code into reusable pieces**.  
They allow developers to split large applications into smaller, manageable files and share functionality between them.

Over time, several module systems were created to solve the problem of code organization in JavaScript.

The three most important module systems are:

    AMD
    CommonJS
    ES Modules (ESM)

Each was created for different environments and has different loading mechanisms.

---

### Why Module Systems Were Needed

In early JavaScript, developers included multiple files using `<script>` tags.

Example:

    <script src="math.js"></script>
    <script src="app.js"></script>

Problems with this approach:

- Global namespace pollution
- Dependency ordering issues
- Difficult to maintain large applications
- No built-in module system

To solve these issues, module systems were introduced.

---

### What is AMD

AMD stands for:

    Asynchronous Module Definition

AMD was designed primarily for **browsers**.

It allows modules to load **asynchronously**, meaning files can load without blocking page rendering.

AMD was popularized by the library:

    RequireJS

---

### Basic Structure of AMD

AMD uses a `define()` function to define modules.

Example:

    define(["dependency1", "dependency2"], function(dep1, dep2) {

        function add(a, b) {
            return a + b
        }

        return {
            add: add
        }

    })

Explanation:

    define() → defines a module
    dependencies → array of required modules
    callback → executed when dependencies load

---

### Using an AMD Module

Example:

    require(["math"], function(math) {

        console.log(math.add(2,3))

    })

Here:

    require() loads the module asynchronously.

---

### Advantages of AMD

1 Asynchronous loading

Modules load without blocking the browser.

2 Dependency management

Dependencies are explicitly defined.

3 Good for browsers

Optimized for frontend environments.

---

### Limitations of AMD

1 Syntax is verbose.

2 Requires loader libraries like RequireJS.

3 Not native to JavaScript.

Because of these limitations, other systems became more popular.

---

### What is CommonJS

CommonJS is a module system designed primarily for **server-side JavaScript**.

It became the standard module system for:

    Node.js

CommonJS modules are **loaded synchronously**.

This works well in servers where files are available locally.

---

### Basic Structure of CommonJS

Modules export functionality using:

    module.exports

Example:

    function add(a, b) {
        return a + b
    }

    module.exports = {
        add
    }

---

### Importing CommonJS Modules

Modules are imported using `require()`.

Example:

    const math = require("./math")

    console.log(math.add(2,3))

Here:

    require() loads the module synchronously.

---

### How CommonJS Works Internally

When a module is loaded:

1 Node reads the file
2 Wraps it inside a function
3 Executes it
4 Returns `module.exports`

Conceptually it becomes:

    (function(exports, require, module) {

        // module code

    })

This isolates module scope.

---

### Advantages of CommonJS

1 Simple syntax

2 Works well for server environments

3 Synchronous loading is fast on local filesystem

---

### Limitations of CommonJS

1 Synchronous loading blocks execution in browsers.

2 Not designed for frontend environments.

3 Requires bundlers for browser usage.

Examples of bundlers:

    Webpack
    Browserify

---

### What are ES Modules

ES Modules are the **official JavaScript module system introduced in ES6 (2015)**.

They are now the **standard module system for JavaScript**.

They work in:

    Browsers
    Node.js
    Deno
    Modern frameworks

ES Modules use:

    import
    export

---

### Exporting in ES Modules

Example:

    export function add(a, b) {
        return a + b
    }

Another export style:

    function add(a, b) {
        return a + b
    }

    export { add }

---

### Default Export

Modules can export one default value.

Example:

    export default function multiply(a, b) {
        return a * b
    }

---

### Importing ES Modules

Example:

    import { add } from "./math.js"

    console.log(add(2,3))

Default import:

    import multiply from "./math.js"

---

### Multiple Exports Example

math.js

    export function add(a, b) {
        return a + b
    }

    export function subtract(a, b) {
        return a - b
    }

Usage:

    import { add, subtract } from "./math.js"

---

### ES Modules in Browsers

HTML example:

    <script type="module" src="app.js"></script>

The browser now understands `import` and `export`.

---

### ES Modules are Static

ES Modules are **statically analyzed**.

Meaning dependencies are known before execution.

Example:

    import { add } from "./math.js"

This allows:

- tree shaking
- better optimization
- faster loading

---

### Dynamic Import

ES Modules also support dynamic loading.

Example:

    import("./math.js")
        .then(module => {
            console.log(module.add(2,3))
        })

Useful for:

    code splitting
    lazy loading

---

### ES Module Execution Behavior

ES Modules load in two phases.

1 Module linking

Dependencies are resolved.

2 Module execution

Code runs.

This enables better dependency management.

---

### CommonJS vs ES Modules Behavior

Example CommonJS:

    const math = require("./math")

The module loads **during execution**.

Example ES Modules:

    import { add } from "./math.js"

Dependencies load **before execution**.

---

### Differences Between AMD, CommonJS, and ES Modules

| Feature | AMD | CommonJS | ES Modules |
|------|------|------|------|
| Primary Environment | Browser | Node.js | Both |
| Loading Type | Asynchronous | Synchronous | Asynchronous |
| Syntax | define() | require() | import/export |
| Standard | Library-based | Community standard | Official JS standard |
| Static Analysis | No | No | Yes |
| Tree Shaking | No | No | Yes |

---

### Real World Usage Today

Modern JavaScript development mainly uses:

    ES Modules

CommonJS is still widely used in Node.js applications.

AMD is mostly considered **legacy** and rarely used today.

---

### Example Comparison

AMD:

    define(["math"], function(math) {
        console.log(math.add(2,3))
    })

CommonJS:

    const math = require("./math")
    console.log(math.add(2,3))

ES Modules:

    import { add } from "./math.js"
    console.log(add(2,3))

---

### When to Use Each

AMD

    Used historically for browser async module loading.

CommonJS

    Used mainly in Node.js environments.

ES Modules

    Modern standard for both frontend and backend JavaScript.

---

### Summary

JavaScript evolved through several module systems.

AMD

    Designed for browsers with asynchronous loading.

CommonJS

    Designed for Node.js with synchronous loading.

ES Modules

    Official JavaScript standard using import/export.

Today, ES Modules are the **preferred module system** for modern JavaScript development.
