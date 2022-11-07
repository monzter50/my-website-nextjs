export const merge = (first:any[], second:any[]) => {
    for (let i = 0; i < second.length; i++) {
        first.push(second[i]);
    }
    return first;
}