// src/Calculator.js
import React, { useState } from 'react';
import './calculator.css'; 

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // Handle button clicks
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    // Handle clear button
    const handleClear = () => {
        setInput('');
        setResult('');
    };

    // Handle calculation
    const handleEquals = () => {
        try {
            // Evaluate the expression and update the result
            console.log(input);
            setResult(eval(input)); // Be careful with eval in a real app
            setInput('');
        } catch (e) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input || '0'}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick('/')}>\</button>
                <button onClick={handleEquals}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
