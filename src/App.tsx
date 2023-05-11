import React, { useState } from 'react';
import './App.css';

type countItemType = {
    time: string;
    step: number;
};
function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState<countItemType[]>([]);
    return (
        <div>
            <h1>📟 Counter</h1>
            <input
                type="number"
                value={step}
                onChange={(evt) => {
                    setStep(Number(evt.target.value));
                }}
            />
            <button
                onClick={() => {
                    const newCountItem: countItemType = {
                        time: new Date().toLocaleTimeString(),
                        // step: step, property와 value의 이름이 같을 때 축약형으로 사용 가능
                        step,
                    };
                    setCount([...count, newCountItem]);
                }}
            >
                +
            </button>{' '}
            👉{' '}
            {count.reduce((누적값, 현재값) => {
                return 누적값 + 현재값.step;
            }, 0)}
            <table>
                <thead>
                    <tr>
                        <td>time ⏰</td>
                        <td>step</td>
                    </tr>
                </thead>
                <tbody>
                    {count.map((value, index) => {
                        return (
                            <tr>
                                <td>{value.time}</td>
                                <td>{value.step}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default App;
