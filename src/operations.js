export function multiply(values) {
    return values.reduce((total, val) => total * val, 1);
}
export function subtract(amount, values) {
    return values.reduce((total, val) => total - val, amount);
}
export function divide(first, second) {
    return first / second;
}
export function sumValues(values) {
    return values.reduce((total, val) => total + val, 0);
}
export default function sumOdd(values) {
    return sumValues(values.filter((item, index) => index % 2 === 0));
}

