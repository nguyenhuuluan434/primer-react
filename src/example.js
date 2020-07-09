import oddOnly,{ sumValues } from './sum'
import { sumAsync} from './async';
console.log("Example");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

const myFunc = (nameFunction) => "Hello " + nameFunction();

const printName = (nameFunction, printFunction) =>
    printFunction(myFunc(nameFunction));

printName(() => "klgt", console.log)

let sum = sumValues([1, 2, 3, 4, 5, 6])
console.log(sum)

let sumOdd = oddOnly([1, 2, 3, 4, 5, 6])
console.log(sumOdd)
let arr = [1, 2, 3, 4, 5, 6]
sumAsync(arr).then(total => console.log(`Main result ${total}`))


let doTask = async () => {
    let total = await sumAsync(arr)
    console.log(`Main Total: ${total}`);
}   

doTask()
