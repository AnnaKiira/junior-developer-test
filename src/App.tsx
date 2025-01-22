import Greeting from './components/Greeting/Greeting.tsx'

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

    <h2>Part 2:</h2>
    <Greeting name = "John" /> {/* if name = "John" is commented out (not provided), the browser renders Hello, Guest! as default  */}
  </div>
}

export default App;
