function formatString(input: string, toUpper?: boolean): string {
    if (toUpper ?? true) {
        return input.toUpperCase()
    }
    else {
        return input.toLowerCase()
    }
}
const getValue = formatString("i love to code", true)



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const findAbove4Rating = items.filter((item: { title: string; rating: number }) => item.rating >= 4)
    return findAbove4Rating
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const ratingIs = filterByRating(books)



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const res: T[] = []
    arrays.forEach((array) => {
        array.map(arr => {
            res.push(arr)
        })
    })
    return res
}
const concatArrayOfStrings = concatenateArrays<string>(["a", "b"], ["c"])
const concatArrayOfNumbers = concatenateArrays<number>([1, 2], [3, 4], [5])



class Vehicle {
    constructor(private make: string, private year: number) {
        this.make = make;
        this.year = year
    }
    getInfo() {
        const res = (`Make: ${this.make} , Year: ${this.year}`);
        console.log(res);
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year)
        this.model = model
    }
    getModel() {
        const modelIs = this.model;
        console.log(`Model: ${modelIs}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo()
myCar.getModel();



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    }
    else if (typeof value === "number") {
        return value * 2
    }
}
const ifIsString = processValue("shuvojit kumar das")
const ifIsNumber = processValue(10)



interface Product {
    name: string;
    price: number
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length <= 0) {
        return null
    }
    else {
        let highestPricedProductIs: Product = products[0]
        for (let i = 0; i < products.length; i++) {
            if (products[i].price > highestPricedProductIs.price) {
                highestPricedProductIs = products[i]
            }
        }
        return highestPricedProductIs
    }
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const highestPriceProduct = getMostExpensiveProduct(products);



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    }
    else {
        return "Weekday"
    }
}
const weekend = getDayType(Day.Saturday)
const workday = getDayType(Day.Friday)



const customPromise = (n: number): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolve(n * n)
            }, 1000)
        }
        else {
            reject("Negative number not allowed")
        }
    })
}
async function squareAsync(n: number): Promise<number> {
    const response = await customPromise(n)
    return response
}

squareAsync(4).then(console.log)
squareAsync(-3).catch(console.error);

