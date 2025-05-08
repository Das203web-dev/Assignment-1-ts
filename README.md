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
|1.     |we can define object structure by interface | we can also define object structure using type also |
