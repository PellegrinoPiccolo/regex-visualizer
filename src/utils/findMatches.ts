export const findMatches = (text: string, pattern: string, flags: string = 'g') => {
    try {
        const regex = new RegExp(pattern, flags);
        const matches = text.match(regex);
        return matches || [];
    } catch (error) {
        console.error('Invalid regular expression:', error);
        return [];
    }
}