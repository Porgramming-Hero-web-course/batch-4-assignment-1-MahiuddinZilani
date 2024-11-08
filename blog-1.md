# The significance of union and intersection types in Typescript.

## 1. Union Type (`|`)

Union types in TypeScript allow a single type or variable to accept multiple predefined types.

### Example

```typescript
type Beginner
type Pro
type Developer = Beginner | Pro;

```

## 1. Intersection Type (`&`)

Intersection type in Typescript allow to merge two or more types in a single type.

### Example

```typescript
type Frontend
type Backend
type FullStack = Frontend & Backend;

```
