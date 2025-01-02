# Multiprocessing vs Multithreading

<!--multiprocessing means using multiple cores for different processes , essentially we are treating each core as a small little cpu .-->
<!--while multithreading means using multiple cores for doing different parts of the same process.-->

## **1. Multiprocessing**
- **What it means**:  
   Using **multiple CPU cores** to run **completely independent tasks** (i.e., separate processes).
- Each process runs **independently**, with its **own memory space** and no shared resources by default.
- Ideal for **CPU-bound tasks** because true parallelism can be achieved (especially in Python, since each process has its own GIL).

### **Example**:
Imagine you’re working on a video editing project.  
- One process is compressing a video.  
- Another process is rendering animations.  

These are **independent tasks** that can run on **separate cores**.

---

## **2. Multithreading**
- **What it means**:  
   Using **multiple threads** (lightweight sub-tasks) within the **same process**, and possibly running them across multiple CPU cores (if the language/runtime allows it).
- Threads share the **same memory space**, making communication between them faster but also introducing risks (like race conditions).
- Ideal for **I/O-bound tasks** because threads can efficiently switch between tasks while waiting for I/O operations (e.g., file reads, network requests).

### **Example**:
In the same video editing project:  
- One thread handles video compression.  
- Another thread manages progress bar updates.  
- A third thread performs background saves.  

All these threads work together within **one process**, sharing memory.

---

## **Key Differences Between Multiprocessing and Multithreading**

| Feature                   | **Multiprocessing**                          | **Multithreading**                           |
|---------------------------|----------------------------------------------|---------------------------------------------|
| **Task Type**             | Multiple independent tasks (processes)       | Multiple parts of the **same process**       |
| **Memory**                | Each process has its **own memory space**    | Threads **share memory** within the process |
| **CPU Utilization**       | Runs on **multiple cores** (true parallelism)| Can use multiple cores but may be limited by GIL in Python |
| **Overhead**              | Higher overhead (creating processes is heavy)| Lightweight (threads are faster to create)  |
| **Communication**         | Harder (requires IPC)                        | Easier (shared memory)                      |

---

## **Final Simplification**
- **Multiprocessing**:  
   "Run **completely independent tasks** on **separate cores**."
- **Multithreading**:  
   "Divide **parts of the same process** into smaller tasks and run them (on the same or different cores)."

