# 💚 The Ultimate Indexing Cheat Sheet 💚

## **1️⃣ Main Concepts of Indexing**

| **Indexing Concept** | **What It Means?** |
|-----------------|----------------|
| **Clustered Indexing** | Data is physically ordered according to the index (MySQL - InnoDB does this by default, PostgreSQL can be clustered manually) |
| **Non-Clustered Indexing** | Index is separate from data storage, just pointing to actual data (Default in PostgreSQL & MongoDB, optional in MySQL) |

---

## **2️⃣ Implementations of Indexing (The "How" Part)**

| **Index Type**  | **Use Case?** | **Which DBs?** |
|--------------|----------------|----------------|
| **B-Tree (Default Index)** | General-purpose indexing for sorted searches | **PostgreSQL, MySQL, MongoDB** |
| **Hash Index** | Fast **exact** lookups (but no range queries) | **PostgreSQL (optional), MySQL (MEMORY Engine)** |
| **GIN (Generalized Inverted Index)** | **Full-text search, JSONB, arrays** | **PostgreSQL** |
| **GiST (Generalized Search Tree)** | **Geospatial, range queries** | **PostgreSQL** |
| **BRIN (Block Range Index)** | **Big data, saves space** | **PostgreSQL** |
| **Full-Text Index** | **Natural language search** | **MySQL (`FULLTEXT`), PostgreSQL (`GIN` for text)** |
| **Compound Index** | **Multiple columns together** | **PostgreSQL, MySQL, MongoDB** |

---

## **3️⃣ The Three Ways to Store Index Entries (Dense, Sparse, Partial)**

| **Type** | **What It Means?** | **Where Used?** |
|---------|----------------|----------------|
| **Dense Indexing** | Every row/document has an index entry | **Default in B-Tree, Hash, Full-Text (PostgreSQL, MySQL, MongoDB)** |
| **Sparse Indexing** | Only some rows/documents are indexed (saves space) | **BRIN (PostgreSQL), `sparse: true` (MongoDB)** |
| **Partial Indexing** | Only indexes rows that match a condition (more efficient filtering) | **Partial Index (PostgreSQL), `partialFilterExpression` (MongoDB)** |

---

## **💡 The Memory Trick to Remember All This**

1️⃣ **Clustered vs. Non-Clustered** → "Is my data physically sorted or not?"  
2️⃣ **Which Index Type?** → "What kind of query am I optimizing for?"  
3️⃣ **Dense vs. Sparse vs. Partial** → "How much of my data gets indexed?"  

---

