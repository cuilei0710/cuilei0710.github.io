export function getRandomInt(min: number, max: number) {
    if (max < min) return 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function debounce(fn: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function (this: any, ...args: any[]) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}