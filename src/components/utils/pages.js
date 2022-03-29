export const getPageCount = (toatalCount, limit) => {
    return Math.ceil(toatalCount / limit)
}