

module.exports = (data, COLUMN) => {
    const sortStart = new Date()
    let sortCalls = 0

    for (let i = 1; i < data.length; i++) {
        let temp = Number(data[i][COLUMN]);

        for (var j = i - 1; j >= 0 && (Number(data[j][COLUMN]) > temp); j--) {
            data[j + 1] = data[j];
        }
        sortCalls++
        data[j + 1][COLUMN] = temp;
    }

    const sortDuration = new Date() - sortStart

    const sortCallsPerRow = sortCalls / data.length

    console.log(`INSERTION: Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
    console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

}