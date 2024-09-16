let sales = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let numbers : number[] = [1,2,3,4]; 
function calculateTax(income: number, taxYear = 2022 ): number{
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}

// tuple
let user:[number,String] = [2,'Raj'];
user[0] = 6;

enum size{Small=1,Medium,Large};
let mySize: size = size.Medium;//it assigns 2 to the mysize


// let employee: {
//     readonly id: number,    // readonly make it immutable
//     name: string,
//     retire: (date : Date) => void //it an example of a function. date is the parameter and the return type is void
// } = { 
//     id : 1,
//     name : 'Yraj',
//     retire : (date:Date) =>{
//         console.log(date)   // it just prints the date on console log
//     }
// };
// employee.name = 'Raj';

// if we want more of the employee kind we need to duplicate it so we need to create a alias we can do it by using type

type Employee = {
    readonly id: number,
    name: string,
    retire: (date : Date) => void
};

let employee:Employee = {
    id : 1,
    name : 'Yraj',
    retire : (date:Date) =>{
        console.log(date)   
    }
}

// union type
// Here weight can be a number or String
function kgToLbs(weight:number | string): number{
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2 ;
}

// intersection
type Dragable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
}

type UIWidget = Dragable & Resizable;

// should override all the fuctions n variables present in Dragable and resizable
let textbook: UIWidget = {
    drag:()=>{

    },
    resize:()=>{

    }
}

// literal type
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// using null types in TS
 
function greet(name:string|null|undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('HOLA');
}
greet(undefined) //should greet HOLA

// optionl chaining
type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}
// When the function returns { birthday: new Date() }, TypeScript compares the structure
// of this object to the Customer type and sees that it matches: there's a birthday
// property, and its value is a Date object. Therefore, it treats the object as a valid 
// Customer instance. It only happens if the name is birthday and its type is Date

// optional property access parameter
let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear);