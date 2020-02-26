export {} //exports nothing. Typescript will now treat it like a module instead of a script.
let message = "Welcome Back!";
console.log(message);

//variable declarations
let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Sara";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence)

//variable types
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ["Tom", 25]; //must be in the same value order

enum Color {Red = 5, Green, Blue}; //first will start at the index value of 0 unless otherwise declared.

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Sara";

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj
}
    if (hasName(myVariable)) {
        console.log(myVariable.name);
    }
//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20; // intellisense will let us know that 'b' is a number value

//union of types for the same variable
let multiType: number | boolean;
multiType = 20
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

//functions in typescript

function add(num1:number, num2:number = 10): number {
    if (num2)
    return num1 + num2;
    else
    return num1;
}
add(5,10);
add(5) // you can have any optional parameters, but it must come after the required parameters. (num2 is optional)

//Interface - specify an object as a type in typescript
interface Person {
    firstName: string;
    lastName: string;
}
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: "James",
    lastName: "Bond"
}

fullName(p);

//Classes and access modifiers (can be public or private)
class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("Sara")
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee { //'extends' inherits from first class function
    constructor(managerName: string) {
        super(managerName) //'super' keyword used to call the base class constructor. Private can not be accesses outside of the employee class.
    }
    delegateWork() {
        console.log(`Manager delegating tasks ${this.employeeName}`)
    }
}

let m1 = new Manager("Bruce")
m1.delegateWork()
m1.greet()
console.log(m1.employeeName)



































