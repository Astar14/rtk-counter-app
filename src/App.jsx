
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './store/slices/counter'

function App() {

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button> 
    </>
  )
}

export default App
