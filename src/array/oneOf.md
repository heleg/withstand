---
title: oneOf
description:
  Creates a predicate that checks whether a value is included in an array.
tags:
  - array
  - predicate
  - fp
---

```typescript
const shoppingList = ["apple", "banana", "orange"];
const available = ["banana", "tomato", "potato", "apple", "cherry"];

const bought = available.filter(oneOf(shoppingList));
```
