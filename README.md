# What are some differences between interfaces and types in TypeScript?

We often used interface and types in typescript to define the structure of object. But a question may arise that if we can declare the structure using types then why there is interface what are the difference between them. In this blog we will see what is the differences between them with some example.

## what is interface in Typescript
### interface is a feature by which we can define the structure of an object
example : 
<pre>interface User {
name : string;
age : number
}</pre>
### We are declaring a object structure above using interface where there are two properties name and age.

## what is types in Typescript
### type is also a typescript feature . And we can define not only just Object but also Tuple , Union , Primitive type alias etc.
example : 
<pre>type User2 = {
name : string;
age : number
}</pre>
### This User2 type also declare the same structure of an object like the interface but there are some advanced use case for the type.

## Lets see a difference table of interface and type
| Point | interface | type |
|-------|-----------|------|
| 1.    |We can define object structure by interface | We can also define object structure using type also |
| 2.    |If we have to extends a Object structure using interface then we have to use extends keyword with interface | If we have to extends the object structure using type then we have to use the & ( intersection operator ) |
|3.|If we declare multiple interface with same name then it will be merge automatically|If we declare multiple type with same name then it will throw error |
|4.|Interface did not support Union nor Intersection|type did support Union and Intersection |
|5.|We can use Interface for simple object model| We can use type for complex object model |


## A example of Interface merge
<pre>
  interface User {
  name : string
  }
  interface User {
  age : number
  }
  const user : User = {
  name = "Shuvo",
  age : 26
  }
</pre>
### In the above example you can see that we have declared same named interface and using using the interface to define the type of user object. 

## Type wont be merge
<pre>
  type User = {
  name : string
  }
  type User = {
  age : number
  } // ❌ Error: Duplicate identifier 'User'
</pre>
### if we try to declare multiple type with same name then typescript will give error

## Now lets see when we will use Interface and when type
|Point|Use Case| Use |
|-----|--------|-----|
| 1.| If we have to define only the object struture | interface |
| 2. | If we have to define Tuple , Union or complex object structure | type |
| 3.| If we have to merge multiple declaration | interface |
|4.| If we need maximum type flexibility | type |

## Conclusion
1. Only Object model > Use interface
2. If merge and extend needed  > Use interface
3. If needed to combine complex types > Use type
4. If needed to use tuple or Union or Complex type define  > Use type
