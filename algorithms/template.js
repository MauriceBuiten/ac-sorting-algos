module.exports = (data, COLUMN) => {
  const sortStart = new Date()

  // Take only the data we need to sort
  let list = data.map(r => r[COLUMN])

  let sortCalls = 0

  while (bla) {
    // sort logic

    sortCalls++
  }

  const sortDuration = new Date() - sortStart
  const sortCallsPerRow = sortCalls / data.length

  console.log(`Done sorting data. Lowest ${COLUMN}: ${list[0]}, Highest ${COLUMN}: ${list[list.length - 1]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)
}
