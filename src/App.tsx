function App() {

  function largestNum() {
    const array = [2, 13, 43, 4, 9, 76, 55, 8]

    if (array.length === 0) {
      return null
    }

    const maxNum = Math.max(...array)
    return maxNum
  }

  console.log(largestNum())
  

  return <div>
    <h1>Tasks Solutions</h1>
    <h2>Part 1:</h2>
    <p>Largest Number: {largestNum()}</p>
  </div>
}

export default App;
