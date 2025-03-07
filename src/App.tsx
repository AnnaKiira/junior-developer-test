import Greeting from './components/Greeting/Greeting.tsx'

function App() {

  /* Tasks: Part 1 */
  function largestNum() {
    const array = [2, 13, 43, 4, 9, 76, 55, 8]

    if (array.length === 0) {
      return null
    }

    const maxNum = Math.max(...array)
    return maxNum
  }
  console.log(largestNum())


  /* Tasks: Part 3 */  
  function calculateTotalPrice(price: number, taxRate: number) { 
    return price * (1 + taxRate) 
  } 
  console.log(calculateTotalPrice(100, 0.2))
  

  /* Tasks: Part 4 */
  function countDeliveredOrders() {
    const orders = [ 
      { id: 1, delivered: true }, 
      { id: 2, delivered: false }, 
      { id: 3, delivered: true }, 
    ]

    let deliveredOrders = 0
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].delivered === true) {
        deliveredOrders = deliveredOrders + 1
      }
    }
    return deliveredOrders
  }
  console.log(countDeliveredOrders())


  return <div>
    <h1>Tasks Solutions</h1>
    <h2>Part 1:</h2>
    <p>Largest Number: {largestNum()}</p>

    <h2>Part 2:</h2>
    <Greeting name = "John" /> {/* if name = "John" is commented out (not provided), the browser renders Hello, Guest! as default  */}

    <h2>Part 3:</h2>
    <p>Total Price Calculated: {calculateTotalPrice(100, 0.2)}</p>

    <h2>Part 4:</h2>
    <p>Delivered Orders: {countDeliveredOrders()}</p>
  </div>
}

export default App;
