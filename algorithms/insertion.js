module.exports = (data, COLUMN) => {
  const sortStart = new Date()

  const tail = data
  const head = [tail.shift()]

  let sortCalls = 0

  while (tail.length > 0) {
    const next = tail.shift()

    for (let i = head.length - 1; i >= 0; i--) {
      sortCalls++

      const nextVal = parseInt(next[COLUMN], 10)
      const headVal = parseInt(head[i][COLUMN], 10)

      if (i === 0) {
        head.splice(i, 0, next)
        break
      }

      if (i === head.length - 1 && nextVal > headVal) {
        head.push(next)
        break
      }

      if (headVal > nextVal && parseInt(head[i - 1][COLUMN], 10) <= nextVal) { // 1 > 1
        head.splice(i, 0, next)
        break
      }
    }
  }

  data = head

  const sortDuration = new Date() - sortStart
  const sortCallsPerRow = sortCalls / data.length

  console.log(`Done sorting data. Lowest ${COLUMN}: ${head[0][COLUMN]}, Highest ${COLUMN}: ${head[head.length - 1][COLUMN]}`)
  console.log(`Took ${sortCalls} calls, or ${sortCallsPerRow} calls per row (${sortDuration}ms)`)

  return data
}
