import React, { useState } from 'react';
import './App.css';

function Counter() {
    const [step, setStep] = useState(1);
    return (
        <div>
            <h1>Counter</h1>
            <input
                type="number"
                value={step}
                onChange={(evt) => {
                    setStep(Number(evt.target.value));
                }}
            />
            <button>+</button> 👉 0
            <table>
                <thead>
                    <tr>
                        <td>time</td>
                        <td>step</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1:00</td>
                        <td>2</td>
                    </tr>
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
