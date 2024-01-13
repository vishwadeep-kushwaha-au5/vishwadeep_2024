export function debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let debounceTimer: ReturnType<typeof setTimeout>;
    return function(...args: any[]) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func(...args), delay);
    }
}
