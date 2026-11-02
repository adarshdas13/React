import { useCounterstore } from "../store/counterStore";

function CounterValue() {
    const count = useCounterstore((state) => state.count)
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default CounterValue
