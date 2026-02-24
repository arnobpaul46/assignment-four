# 📘 JavaScript DOM & Events – Interview Q&A Guide

Welcome to this repository! 🚀
This project contains a clear and beginner-friendly explanation of important **JavaScript DOM manipulation** and **Event Handling** concepts, commonly asked in interviews and essential for front-end development.

---

## 📌 Contents

* Difference between `getElementById()` and `getElementsByClassName()`
* Difference between `querySelector()` and `querySelectorAll()`
* Creating and inserting elements into the DOM
* Event Bubbling
* Event Delegation
* Difference between `preventDefault()` and `stopPropagation()`

---

# 🧩 Q1: Difference Between DOM Selection Methods

## 🔹 `getElementById()` vs `getElementsByClassName()`

| Feature           | `getElementById()`          | `getElementsByClassName()`                      |
| ----------------- | --------------------------- | ----------------------------------------------- |
| Return Type       | Returns a single element    | Returns an `HTMLCollection` (array-like object) |
| Selection Basis   | Matches by **id**           | Matches by **class name(s)**                    |
| Multiple Elements | ❌ No (IDs should be unique) | ✅ Yes                                           |
| If No Match       | Returns `null`              | Returns empty `HTMLCollection` (length = 0)     |
| Live or Static    | N/A (single element)        | ✅ Live collection                               |

### 📝 Key Points:

* `getElementById()` returns **one element only**.
* `getElementsByClassName()` returns a **live HTMLCollection**, meaning it updates automatically if DOM changes.
* Multiple class names can be passed separated by spaces.

---

## 🔹 `querySelector()` vs `querySelectorAll()`

| Feature             | `querySelector()`             | `querySelectorAll()`            |
| ------------------- | ----------------------------- | ------------------------------- |
| Number of Elements  | First matching element only   | All matching elements           |
| Return Type         | Single `Element` or `null`    | Static `NodeList`               |
| If No Match         | `null`                        | Empty `NodeList`                |
| Direct Modification | ✅ Yes                         | ❌ Requires loop                 |
| Performance         | Faster (stops at first match) | Slower (checks entire document) |
| Live or Static      | N/A                           | ❌ Static (does not auto-update) |

### 📝 Key Points:

* `querySelector()` returns **only the first match**.
* `querySelectorAll()` returns a **static NodeList**.
* To modify multiple elements from `querySelectorAll()`, use a loop like `forEach()`.

---

# 🧩 Q2: How to Create and Insert a New Element into the DOM

Follow these simple steps:

```javascript
// 1️⃣ Create the element
const newDiv = document.createElement('div');

// 2️⃣ Add content and styling
newDiv.textContent = "Hello, I am a new element!";
newDiv.style.color = "blue";

// 3️⃣ Insert into the DOM
document.body.appendChild(newDiv);
```

### ✅ Steps Explained:

1. Create element using `document.createElement()`
2. Add text, attributes, or styles
3. Insert using `appendChild()` (or other insertion methods like `prepend()`)

---

# 🧩 Q3: What is Event Bubbling?

## 📖 Definition

Event Bubbling is a process where an event triggered on a child element **propagates upward** through its parent elements in the DOM tree.

## 🔄 How It Works

1. Event is triggered on the child element.
2. Event travels down in the **capturing phase**.
3. Reaches the target element.
4. Then moves upward in the **bubbling phase**.
5. Parent elements execute their event listeners.

### 🎯 Execution Order Example:

If both child and parent have click listeners:

```
Child clicked
Parent clicked
```

👉 By default, `addEventListener()` works in the **bubbling phase**.

---

# 🧩 Q4: What is Event Delegation?

## 📖 Definition

Event Delegation is a technique where a **single event listener** is attached to a parent element to handle events for multiple child elements using `event.target`.

## 💡 Why It Is Useful

* Improves performance
* Reduces memory usage
* Works for dynamically added elements
* Cleaner and scalable code

## 🔄 How It Works

1. Click happens on a child (`<li>`)
2. Event bubbles up
3. Parent (`<ul>`) listener catches it
4. `event.target` identifies which child was clicked

### 🎯 Example Flow:

* `<li>` is clicked
* Event bubbles to `<ul>`
* Listener runs
* `event.target` gives access to clicked `<li>`

---

# 🧩 Q5: Difference Between `preventDefault()` and `stopPropagation()`

| Feature                | `preventDefault()`             | `stopPropagation()`                 |
| ---------------------- | ------------------------------ | ----------------------------------- |
| Purpose                | Stops default browser behavior | Stops event from bubbling/capturing |
| Stops Link Navigation? | ✅ Yes                          | ❌ No                                |
| Stops Parent Listener? | ❌ No                           | ✅ Yes                               |
| Syntax                 | `event.preventDefault();`      | `event.stopPropagation();`          |
| Parameters             | None                           | None                                |
| Return Value           | None                           | None                                |

## 📝 Explanation

### 🔹 `preventDefault()`

* Prevents default browser action
* Example: Prevents a link from navigating

### 🔹 `stopPropagation()`

* Stops event from moving up or down the DOM
* Prevents parent event listeners from running

---

# 🎯 Conclusion

This repository provides a structured explanation of:

* DOM selection methods
* DOM manipulation
* Event bubbling
* Event delegation
* Event control methods

These concepts are fundamental for:

* 💻 Frontend Development
* 🎯 JavaScript Interviews
* ⚡ Writing optimized event-driven applications

---

## ⭐ If you found this helpful, consider giving this repo a star!

Happy Coding! 🚀
