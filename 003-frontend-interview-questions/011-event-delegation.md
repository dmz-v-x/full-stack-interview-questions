### Question
What is Event Delegation in JavaScript? 

### Answer

Event Delegation is a technique in JavaScript where **a single event listener is attached to a parent element to handle events for multiple child elements**.

Instead of adding event listeners to each child element individually, we add **one listener to the parent** and use **event bubbling** to detect which child triggered the event.

Event delegation improves:

- Performance
- Memory usage
- Code maintainability
- Handling of dynamically added elements

To understand event delegation properly we must first understand **how events work in the browser**.

---

### Understanding DOM Events

A **DOM event** is an action that occurs in the browser.

Examples:

    click
    keydown
    input
    submit
    mouseover
    scroll

Example:

    button.addEventListener("click", function() {
        console.log("Button clicked")
    })

When the user clicks the button, the event is triggered.

---

### Event Propagation

When an event occurs, it travels through the DOM tree.  
This process is called **event propagation**.

Event propagation happens in three phases:

1 Capturing phase  
2 Target phase  
3 Bubbling phase

Example DOM structure:

    <div>
        <ul>
            <li>Item</li>
        </ul>
    </div>

If the user clicks `<li>`:

Event travels:

    window
      ↓
    document
      ↓
    div
      ↓
    ul
      ↓
    li

Then bubbles back up.

---

### Event Bubbling

Event bubbling means the event travels **from the target element upward to ancestors**.

Example:

    <div id="parent">
        <button id="child">Click</button>
    </div>

JavaScript:

    document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent clicked")
    })

    document.getElementById("child").addEventListener("click", function() {
        console.log("Child clicked")
    })

Clicking the button produces:

    Child clicked
    Parent clicked

Because the event bubbles upward.

Event delegation relies on this bubbling behavior.

---

### The Problem Without Event Delegation

Suppose we have many list items.

HTML:

    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

Without delegation we must attach listeners to every element.

Example:

    const items = document.querySelectorAll("li")

    items.forEach(function(item) {
        item.addEventListener("click", function() {
            console.log("Item clicked")
        })
    })

Problems:

- Many event listeners
- Higher memory usage
- Difficult to manage

---

### Event Delegation Solution

Instead of attaching listeners to each `<li>`, attach one listener to `<ul>`.

Example:

    const list = document.getElementById("list")

    list.addEventListener("click", function(event) {

        console.log(event.target.textContent)

    })

When any `<li>` is clicked, the event bubbles to `<ul>`.

The parent listener captures it.

---

### Understanding event.target

`event.target` refers to the **actual element that triggered the event**.

Example:

    <ul id="list">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>

JavaScript:

    document.getElementById("list")
        .addEventListener("click", function(event) {

            console.log(event.target)

        })

Clicking Banana prints:

    <li>Banana</li>

---

### Filtering Specific Elements

Sometimes we only want certain elements.

Example:

    list.addEventListener("click", function(event) {

        if (event.target.tagName === "LI") {
            console.log("Clicked:", event.target.textContent)
        }

    })

This ensures only `<li>` clicks are handled.

---

### Event Delegation with Classes

Example:

    <ul id="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
    </ul>

JavaScript:

    list.addEventListener("click", function(event) {

        if (event.target.classList.contains("item")) {
            console.log(event.target.textContent)
        }

    })

---

### Handling Dynamic Elements

One major advantage of event delegation is handling elements **added dynamically**.

Example:

    const list = document.getElementById("list")

    list.addEventListener("click", function(event) {

        if (event.target.tagName === "LI") {
            console.log(event.target.textContent)
        }

    })

Adding new items:

    const newItem = document.createElement("li")
    newItem.textContent = "New Item"

    list.appendChild(newItem)

The new item automatically works with the same event listener.

No additional code needed.

---

### Example: Delete Button in Todo List

HTML:

    <ul id="todo">
        <li>
            Task 1
            <button class="delete">Delete</button>
        </li>
    </ul>

JavaScript:

    const todo = document.getElementById("todo")

    todo.addEventListener("click", function(event) {

        if (event.target.classList.contains("delete")) {

            const item = event.target.parentElement
            item.remove()

        }

    })

One listener handles all delete buttons.

---

### Using closest()

Sometimes the clicked element is nested.

Example:

    <li>
        <span>Item</span>
        <button>Delete</button>
    </li>

If span is clicked we may want the parent `<li>`.

Example:

    list.addEventListener("click", function(event) {

        const li = event.target.closest("li")

        if (li) {
            console.log(li.textContent)
        }

    })

---

### Real World Example: Table Row Selection

HTML:

    <table id="table">
        <tr><td>A</td></tr>
        <tr><td>B</td></tr>
    </table>

JavaScript:

    const table = document.getElementById("table")

    table.addEventListener("click", function(event) {

        const row = event.target.closest("tr")

        if (row) {
            row.style.background = "yellow"
        }

    })

---

### Performance Benefits

Without delegation:

    1000 items → 1000 listeners

With delegation:

    1 listener

Benefits:

- Less memory
- Faster initialization
- Cleaner code

---

### Events That Work with Delegation

Most events support bubbling.

Examples:

    click
    keyup
    keydown
    input
    change
    mouseover

But some events **do not bubble**.

Examples:

    blur
    focus

For these we use:

    focusin
    focusout

---

### Stopping Event Bubbling

Sometimes bubbling should stop.

Example:

    event.stopPropagation()

Example:

    button.addEventListener("click", function(event) {

        event.stopPropagation()

    })

---

### Event.currentTarget vs Event.target

event.target

    Actual clicked element

event.currentTarget

    Element handling the event

Example:

    parent.addEventListener("click", function(event) {

        console.log(event.target)
        console.log(event.currentTarget)

    })

---

### Complex Example: Menu System

HTML:

    <ul id="menu">
        <li data-action="save">Save</li>
        <li data-action="delete">Delete</li>
        <li data-action="edit">Edit</li>
    </ul>

JavaScript:

    const menu = document.getElementById("menu")

    menu.addEventListener("click", function(event) {

        const action = event.target.dataset.action

        if (!action) return

        if (action === "save") {
            console.log("Saving...")
        }

        if (action === "delete") {
            console.log("Deleting...")
        }

    })

---

### Best Practices

Use event delegation when:

- Many similar elements exist
- Elements are added dynamically
- Performance is important

Avoid delegation when:

- Events don't bubble
- Element hierarchy is complex

---

### Summary

Event delegation is a technique where **a parent element handles events for its children** using event bubbling.

Key concepts involved:

    DOM events
    event bubbling
    event.target
    event.currentTarget
    closest()

Advantages:

- Fewer event listeners
- Better performance
- Works with dynamic elements
- Cleaner code

Event delegation is widely used in modern frameworks and large web applications.
