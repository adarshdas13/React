import { useCounterstore } from "../store/counterStore";

export default function CounterButton() {
    const increase = useCounterstore((state) => state.increase)
    const decrease = useCounterstore((state) => state.decrease)
    const reset = useCounterstore((state) => state.reset)
    return (
        <div className="counter-buttons">
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
