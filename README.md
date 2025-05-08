# 1. What are some differences between interfaces and types in TypeScript?

We often use `interface` and `type` in TypeScript to define the structure of an object. But a question may arise: if we can declare the structure using `type`, then why is there `interface`? What are the differences between them? In this blog, we will see the differences with some examples.

## What is an interface in TypeScript

### An interface is a feature by which we can define the structure of an object.

Example:
```ts
interface User {
  name: string;
  age: number;
}
```

#### We are declaring an object structure above using `interface`, where there are two properties: `name` and `age`.

## What is a type in TypeScript

### A `type` is also a TypeScript feature. It can define not only an object but also a tuple, union, primitive type alias, etc.

Example:
```ts
type User2 = {
  name: string;
  age: number;
}
```

#### This `User2` type also declares the same structure of an object like the interface, but there are some advanced use cases for the type.

## Let's see a difference table of interface and type

| Point | interface | type |
|-------|-----------|------|
| 1.    | We can define object structure using `interface`. | We can also define object structure using `type`. |
| 2.    | If we have to extend an object structure using `interface`, we use the `extends` keyword. | If we extend the object structure using `type`, we use the `&` (intersection operator). |
| 3.    | Declaring multiple interfaces with the same name will merge automatically. | Declaring multiple types with the same name will throw an error. |
| 4.    | `interface` does not support union types directly. | `type` supports union and intersection types. |
| 5.    | Use `interface` for simple object models. | Use `type` for complex object models. |

## An example of interface merge

```ts
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = {
  name: "Shuvo",
  age: 26
};
```

#### In the above example, you can see that we have declared interfaces with the same name, and they merged automatically.

## Type won't be merged

```ts
type User = {
  name: string;
}
type User = {
  age: number;
} // ❌ Error: Duplicate identifier 'User'
```

### If we try to declare multiple types with the same name, TypeScript will give an error.

## Now let's see when we should use interface and when to use type

| Point | Use Case | Use |
|-------|----------|-----|
| 1.    | If we have to define only the object structure | `interface` |
| 2.    | If we have to define a tuple, union, or complex object structure | `type` |
| 3.    | If we have to merge multiple declarations | `interface` |
| 4.    | If we need maximum type flexibility | `type` |

## Conclusion

1. For only object models → Use `interface`
2. If merging and extending is needed → Use `interface`
3. To combine complex types → Use `type`
4. For tuples, unions, or complex type definitions → Use `type`






# 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

## `keyof` keyword in Typescript : learn it once and use it foreever

There are lots of feature ror doing safe coding using Typescript . `keyof` is one of the usefull keyword among them . It gives you a special benefit by which you can access the the `key` of any Object type and use them as type for other objects .

## What is `keyof`
#### `keyof` is a operator of typescript by which we can access the keys of any Object and it returns `Union` types.
Example : 
<pre>
  type User = {
    name : string;
    age : number;
    address : string
  }
  const keys = keyof User  // Output will be "name" | "age" | "address"
</pre>
#### Note : Remember that we can only use those keys that is available in the specific type ( for e.g : `User` ) . If we use any other keys suppose In User type the name of the keys are `name`,`age`,`address` we have to use these keys only if we try to use others as an example `phoneNo` then typescript will give us an error immedietly.

## Lets see a real world example of using `keyof`
<pre>
  function getObjectKeys<T,K extends keyof T> (object : T,key : K) : T[K]{
      return object[key]
  }
  const user = {
    name = "Shuvo"
    age = 26
    address = "Dhaka"
  }
  const userName = getObjectKeys(user,"name") // this will give the key
  const userPhone = getObjectKeys(user,"phone")  // this will give error cause there is no key named `phone` in the `user` object
</pre>
