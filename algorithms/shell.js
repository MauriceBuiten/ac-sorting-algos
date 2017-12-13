
const swap = (list, a, b) => {
  const temp = list[b]
  list[b] = list[a]
  list[a] = temp
}

const gaps = [1750, 701, 301, 132, 57, 23, 10, 4, 1]

module.exports = (data, COLUMN) => {
  const sortStart = new Date()
  let sortCalls = 0
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = 0; i < gaps.length; i++) {
    var gap = gaps[i]

      for (let j = 0; (j + gap) < data.length; j++) {
        if (Number(data[j][COLUMN]) > Number(data[j + gap][COLUMN])) {
          swap(data, j, j + gap)
          swapped = true
        }
        sortCalls++
      }
    }
  }

  const sortDuration = new Date() - sortStart
  const sortCallsPerRow = sortCalls / data.length
  
  console.log(`SHELL: Done sorting data. Lowest ${COLUMN}: ${data[0][COLUMN]}, Highest ${COLUMN}: ${data[data.length - 1][COLUMN]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)
}
