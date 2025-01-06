
# JavaScript Built-In Data Structures

JavaScript provides several built-in data structures, similar to C++ STL. These include `Array`, `Object`, `Map`, `Set`, and more. Below is an overview of their functionalities, methods, and time/space complexities.

---

## **1. Arrays**
### Description:
- Ordered collection of elements, indexed by numbers.
- Supports various methods for adding, removing, and manipulating elements.

### Common Methods:
| Method           | Description                                      | Input/Arguments                    | Output/Return Value              | Time Complexity | Space Complexity |
|-------------------|--------------------------------------------------|-------------------------------------|-----------------------------------|------------------|-------------------|
| `push()`         | Adds an element to the end                       | `element`                          | New array length                 | \( O(1) \)       | \( O(1) \)       |
| `pop()`          | Removes the last element                        | None                               | Removed element                  | \( O(1) \)       | \( O(1) \)       |
| `shift()`        | Removes the first element                       | None                               | Removed element                  | \( O(n) \)       | \( O(1) \)       |
| `unshift()`      | Adds an element to the start                    | `element`                          | New array length                 | \( O(n) \)       | \( O(1) \)       |
| `slice()`        | Returns a portion of the array                  | `startIndex`, `endIndex`           | New array                        | \( O(k) \)*      | \( O(k) \)       |
| `splice()`       | Adds/removes elements at a specific index       | `start`, `deleteCount`, `...items` | Removed elements or `[]`         | \( O(n) \)       | \( O(n) \)       |
| `indexOf()`      | Returns the index of the first match            | `element`                          | Index or `-1`                    | \( O(n) \)       | \( O(1) \)       |
| `includes()`     | Checks if an element exists                     | `element`                          | `true` or `false`                | \( O(n) \)       | \( O(1) \)       |
| `sort()`         | Sorts elements in place                         | Optional comparator function       | Sorted array                     | \( O(n \log n) \)| \( O(\log n) \)  |
| `map()`          | Applies a function to each element              | Callback function                  | New array                        | \( O(n) \)       | \( O(n) \)       |
| `filter()`       | Returns elements that pass a condition          | Callback function                  | New array                        | \( O(n) \)       | \( O(n) \)       |
| `reduce()`       | Reduces array to a single value                 | Callback function, initial value   | Single value                     | \( O(n) \)       | \( O(1) \)       |

\* \( k \) is the number of elements returned.

---

## **2. Objects**
### Description:
- Key-value pairs with keys as strings or symbols.
- Useful for representing structured data.

### Common Methods:
| Method            | Description                                   | Input/Arguments                | Output/Return Value      | Time Complexity | Space Complexity |
|--------------------|-----------------------------------------------|---------------------------------|--------------------------|------------------|-------------------|
| `Object.keys()`   | Returns all keys in an object                | `object`                       | Array of keys            | \( O(n) \)       | \( O(n) \)       |
| `Object.values()` | Returns all values in an object              | `object`                       | Array of values          | \( O(n) \)       | \( O(n) \)       |
| `Object.entries()`| Returns key-value pairs as an array          | `object`                       | Array of `[key, value]`  | \( O(n) \)       | \( O(n) \)       |
| `delete`          | Deletes a key-value pair                    | `key`                          | `true` or `false`        | \( O(1) \)*      | \( O(1) \)       |

\* May vary depending on engine optimizations.

---

## **3. Maps**
### Description:
- Key-value pairs, where keys can be of any type.
- Maintains the order of insertion.

### Common Methods:
| Method         | Description                                     | Input/Arguments        | Output/Return Value      | Time Complexity | Space Complexity |
|----------------|-------------------------------------------------|------------------------|--------------------------|------------------|-------------------|
| `set()`       | Adds or updates a key-value pair                | `key`, `value`         | Updated Map              | \( O(1) \)       | \( O(1) \)       |
| `get()`       | Retrieves the value for a key                   | `key`                  | Value or `undefined`     | \( O(1) \)       | \( O(1) \)       |
| `has()`       | Checks if a key exists                          | `key`                  | `true` or `false`        | \( O(1) \)       | \( O(1) \)       |
| `delete()`    | Removes a key-value pair                        | `key`                  | `true` or `false`        | \( O(1) \)       | \( O(1) \)       |
| `clear()`     | Removes all key-value pairs                     | None                   | `undefined`              | \( O(n) \)       | \( O(1) \)       |

---

## **4. Sets**
### Description:
- A collection of unique values, without duplicates.
- Maintains the order of insertion.

### Common Methods:
| Method         | Description                                     | Input/Arguments        | Output/Return Value      | Time Complexity | Space Complexity |
|----------------|-------------------------------------------------|------------------------|--------------------------|------------------|-------------------|
| `add()`       | Adds a new value                                | `value`                | Updated Set              | \( O(1) \)       | \( O(1) \)       |
| `has()`       | Checks if a value exists                        | `value`                | `true` or `false`        | \( O(1) \)       | \( O(1) \)       |
| `delete()`    | Removes a value                                 | `value`                | `true` or `false`        | \( O(1) \)       | \( O(1) \)       |
| `clear()`     | Removes all values                              | None                   | `undefined`              | \( O(n) \)       | \( O(1) \)       |

---

## **5. WeakMap and WeakSet**
### Description:
- Similar to `Map` and `Set`, but only holds weak references to objects.
- Keys (in `WeakMap`) and values (in `WeakSet`) must be objects.

### Common Methods:
| Method         | Description                                     | Input/Arguments        | Output/Return Value      | Time Complexity | Space Complexity |
|----------------|-------------------------------------------------|------------------------|--------------------------|------------------|-------------------|
| `set()`       | Adds or updates a key-value pair                | `key`, `value`         | Updated WeakMap          | \( O(1) \)       | \( O(1) \)       |
| `has()`       | Checks if a key exists                          | `key`                  | `true` or `false`        | \( O(1) \)       | \( O(1) \)       |
| `delete()`    | Removes a key-value pair                        | `key`                  | `true` or `false`        | \( O(1) \)       | \( O(1) \)       |

---

## **Summary Table:**
| Data Structure | Use Case                            | Common Methods             | Average Time Complexity   |
|----------------|-------------------------------------|----------------------------|---------------------------|
| **Array**      | Sequential data                    | `push`, `pop`, `map`       | \( O(1) \) to \( O(n) \)  |
| **Object**     | Key-value pairs (unordered)        | `keys`, `values`, `delete` | \( O(1) \) to \( O(n) \)  |
| **Map**        | Key-value pairs (ordered)          | `set`, `get`, `has`        | \( O(1) \)                |
| **Set**        | Unique values                      | `add`, `has`, `delete`     | \( O(1) \)                |
| **WeakMap**    | Key-value pairs (weak references)  | `set`, `has`, `delete`     | \( O(1) \)                |
| **WeakSet**    | Unique objects (weak references)   | `add`, `has`, `delete`     | \( O(1) \)                |

---

Would you like to explore more about these data structures? 😊
