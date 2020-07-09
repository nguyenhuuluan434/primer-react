import { sumValues } from "./sum";


export function sumAsync(values) {
    return new Promise(callback => {
        setTimeout(() => {
            let sum = sumValues(values)
            console.log(`Async Total: ${sum}`);
            callback(sum)
        }, 500);
    })
}   