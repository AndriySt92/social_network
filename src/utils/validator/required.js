export const required = (value) => {
    
    if(value) return undefined;
    return 'You are not enter value'
}

export const maxLength = (maxLength) => (value) => {
 
    if(maxLength < value.length ) return `You are over 15 symboll, you enter ${value.length}`;
    return undefined
}