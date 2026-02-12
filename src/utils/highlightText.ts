export const hightlightText = (text: string, matches: string[]) => {
    const parts = []
    let lastIndex = 0

    matches.forEach(match => {
        const index = text?.indexOf(match, lastIndex)
        if (index !== -1) {
            if (index > lastIndex) {
                parts.push({ text: text.substring(lastIndex, index), highlight: false })
            }
            parts.push({ text: match, highlight: true })
            lastIndex = index + match.length
        }
    })

    if (lastIndex < text?.length) {
        parts.push({ text: text.substring(lastIndex), highlight: false })
    }

    return parts
}