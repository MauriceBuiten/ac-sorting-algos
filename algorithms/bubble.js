
const swap = (list, a, b) => {
    const temp = list[b]
    list[b] = list[a]
    list[a] = temp

}

module.exports = (data, COLUMN) => {
    const sortStart = new Date()
    let sortCalls = 0
    let swapped = true

    while (swapped) {
        swapped = false

        for (let i = 0; i < data.length -1; i++) {
                if ( Number(data[i][COLUMN]) > Number(data[i + 1][COLUMN]) ) {
                    swap(data, i, i + 1)
                    swapped = true
                }
                sortCalls++
            }
    }

    const sortDuration = new Date() - sortStart

    const sortCallsPerRow = sortCalls / data.length

    console.log(`BUBBLE: Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
    console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

}