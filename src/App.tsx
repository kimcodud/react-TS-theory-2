import React, { useState } from 'react';
import './App.css';
import {
    Container,
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

function getRandomColor() {
    // 16진수로 표현된 RGB 색상 중에서 랜덤으로 선택합니다.
    const color = Math.floor(Math.random() * 16777215).toString(16);
    // 선택된 색상을 리턴합니다.
    return '#' + color;
}

type countItemType = {
    time: string;
    step: number;
};
function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState<countItemType[]>([]);
    return (
        <div
            style={{
                border: '10px solid' + getRandomColor(),
                padding: 20,
                backgroundColor: getRandomColor(),
                color: getRandomColor(),
                boxShadow: '5px 5px 5px #888888',
            }}
        >
            <h1>📟 Counter</h1>
            <input
                type="number"
                value={step}
                onChange={(evt) => {
                    setStep(Number(evt.target.value));
                }}
            />
            <Button
                variant="contained"
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
            </Button>
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
                            <tr key={index}>
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

function Counter2() {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ border: '10px solid black', padding: 20 }}>
            <h1>Counter - Dialog💬</h1>
            <Button
                variant="contained"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Run
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)}>
                {/* Dialog의 onClose prop를 활용하여 esc키나 외부화면 클릭 시 창 닫기 */}
                <DialogTitle style={{ backgroundColor: 'tomato' }}>
                    Dialog Count
                </DialogTitle>
                <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore voluptates enim quia omnis, maiores cumque aliquam
                    tenetur architecto! Eum corporis autem voluptatem id dicta?
                    Voluptatum, fugiat. Accusamus repellat iure corporis.
                    <Button>+</Button> 👉 0
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
function App() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Counter2 />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Counter />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Counter />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Counter />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
