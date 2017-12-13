// Use `data` (Array) to sort each element `el` on `el[COLUMN]`
//
// Example using Array.proptotype.sort(), using a custom `compare`
// function.
//
module.exports = (data, COLUMN) => {
  const sortStart = new Date()

  let sortCalls = 0 // number of calls before data is sorted

  const sorted = data.sort((x, y) => {
    sortCalls++

    const a = Number(x[COLUMN])
    const b = Number(y[COLUMN])

    // a is less than b by the ordering criterion
    if (a < b) {
      return -1
    }

    // a is greater than b by the ordering criterion
    if (a > b) {
      return 1
    }

    // a must be equal to b
    return 0
  })

  const sortDuration = new Date() - sortStart

  const sortCallsPerRow = sortCalls / data.length

  console.log(`NATIVE: Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

  return sorted
}
