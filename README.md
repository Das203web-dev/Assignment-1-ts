# What are some differences between interfaces and types in TypeScript?

we often used interface and types in typescript to define the structure of object. But a question may arise that if we can declare the structure using types then why there is interface what are the difference between them.In this blog we will see what is the differences between them with some example.

## what is interface in Typescript
### interface is a feature by which we can define the structure of an object
example : 
interface User {
name : string;
age : number
}
we are declaring a object structure above using interface where there are two properties name and age

## what is types in Typescript
### type is also a typescript feature . And we can define not only just Object but also Tuple , Union , Primitive type alias etc.
example : 
type User2 = {
name : string;
age : number
}
This User2 type also declare the same structure of an object like the interface but there are some advanced use case for the type.

## Lets see a difference table of interface and type
| Point | interface | type |
|-------|-----------|------|
| 1.    |We can define object structure by interface | We can also define object structure using type also |
| 2.    |If we have to extends a Object structure using interface then we have to use extends keyword with interface | If we have to extends the object structure using type then we have to use the & ( intersection operator ) |
|3.|If we declare multiple interface with same name then it will be merge automatically|If we declare multiple type with same name then it will throw error |
|4.|Interface did not support Union nor Intersection|type did support Union and Intersection |
|5.|We can use Interface for simple object model| We can use type for complex object model |
