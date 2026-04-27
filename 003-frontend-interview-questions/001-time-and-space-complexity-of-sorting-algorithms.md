### Question
What are the time and space complexity for sorting algorithms?

### Answer

Sorting algorithms are evaluated mainly using **time complexity** (how fast the algorithm runs as input size grows) and **space complexity** (how much extra memory the algorithm requires).

Below are the most common sorting algorithms and their complexities.

---

### 1. Bubble Sort

Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n) |
| Average Case | O(n²) |
| Worst Case | O(n²) |

Space Complexity: **O(1)** (in-place)

Key Idea:
- Large elements "bubble up" to the end after each pass.

---

### 2. Selection Sort

Selection Sort repeatedly selects the smallest element from the unsorted part and places it at the beginning.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n²) |
| Average Case | O(n²) |
| Worst Case | O(n²) |

Space Complexity: **O(1)** (in-place)

Key Idea:
- Minimum element is selected and swapped with the first unsorted position.

---

### 3. Insertion Sort

Insertion Sort builds the sorted array one element at a time by inserting elements into their correct position.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n) |
| Average Case | O(n²) |
| Worst Case | O(n²) |

Space Complexity: **O(1)** (in-place)

Key Idea:
- Works similar to sorting playing cards in your hand.

---

### 4. Merge Sort

Merge Sort uses a divide-and-conquer strategy. It divides the array into halves, sorts them recursively, and then merges them.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n log n) |
| Average Case | O(n log n) |
| Worst Case | O(n log n) |

Space Complexity: **O(n)**

Key Idea:
- Recursively divide and then merge sorted halves.

---

### 5. Quick Sort

Quick Sort selects a pivot element and partitions the array such that elements smaller than the pivot go left and larger go right.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n log n) |
| Average Case | O(n log n) |
| Worst Case | O(n²) |

Space Complexity: **O(log n)** (due to recursion stack)

Key Idea:
- Partition around a pivot.

Worst case occurs when pivot selection is poor (for example already sorted array with first element as pivot).

---

### 6. Heap Sort

Heap Sort uses a Binary Heap data structure. It builds a max heap and repeatedly extracts the maximum element.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n log n) |
| Average Case | O(n log n) |
| Worst Case | O(n log n) |

Space Complexity: **O(1)** (in-place)

Key Idea:
- Use heap property to efficiently find maximum.

---

### 7. Counting Sort

Counting Sort is a non-comparison sorting algorithm used when numbers fall within a limited range.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(n + k) |
| Average Case | O(n + k) |
| Worst Case | O(n + k) |

Where:
- **n** = number of elements
- **k** = range of input values

Space Complexity: **O(n + k)**

Key Idea:
- Count frequency of elements and reconstruct the sorted array.

---

### 8. Radix Sort

Radix Sort sorts numbers digit by digit starting from the least significant digit.

| Case | Time Complexity |
|-----|----------------|
| Best Case | O(nk) |
| Average Case | O(nk) |
| Worst Case | O(nk) |

Where:
- **n** = number of elements
- **k** = number of digits

Space Complexity: **O(n + k)**

Key Idea:
- Sort digits using a stable sorting algorithm (usually Counting Sort).

---

### Summary Table

| Algorithm | Best | Average | Worst | Space |
|----------|------|--------|------|------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(n + k) |
| Radix Sort | O(nk) | O(nk) | O(nk) | O(n + k) |

---

### Key Takeaways

1. **Quadratic algorithms (O(n²))**:  
   Bubble Sort, Selection Sort, Insertion Sort — inefficient for large datasets.

2. **Efficient comparison sorts (O(n log n))**:  
   Merge Sort, Quick Sort, Heap Sort — commonly used for large inputs.

3. **Linear-time sorts**:  
   Counting Sort and Radix Sort — faster but require special constraints on data.

4. **Space matters**:  
   Some algorithms are **in-place (O(1))**, while others require additional memory.
