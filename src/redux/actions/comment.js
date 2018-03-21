/*action*/

export const INCREMENT = "comment/INCREMENT";
export const DECREMENT = "comment/DECREMENT";
export const RESET = "comment/RESET";

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}