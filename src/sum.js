export function sumValues(value) {
    return value.reduce((acc, cur) => acc + cur, 0)
}

export default function sumOdd(values) {
    return sumValues(values.filter((item, index) => index % 2 === 0));
}

export function sumAsync(values) {
    return new Promise(callback => {
        setTimeout(() => {
            let sum = sumValues(values)
            console.log(`Async Total: ${sum}`);
            callback(sum)
        }, 500);
    })
}