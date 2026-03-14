import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {

    const [currentInput, setCurrentInput] = useState("");
    const [previousInput, setPreviousInput] = useState("");
    const [operator, setOperator] = useState(null);
    const [shouldResetScreen, setShouldResetScreen] = useState(false);

    // Number buttons ka logic
    function handleNumber(value) {
        if (currentInput === "0" || shouldResetScreen) {
            setCurrentInput(String(value));
            setShouldResetScreen(false);
        } else {
            setCurrentInput(currentInput + String(value));
        }
    }

    // Operator buttons 
    function handleOperator(opr) {
        setPreviousInput(currentInput);
        setOperator(opr);
        setShouldResetScreen(true);
    }

    function handleDelete() {
        if (currentInput.length === 1) {
            setCurrentInput("0");
        } else {
            setCurrentInput(currentInput.slice(0, -1));
        }
    }

    function clearAllText() {
        setCurrentInput("0");
        setPreviousInput("");
        setOperator(null);
        setShouldResetScreen(false);
    }

    function handleDecimal() {
        if (!currentInput.includes(".")) {
            setCurrentInput(currentInput + ".");
        }
    }

    function handlePercent() {
        setCurrentInput(String(parseFloat(currentInput) / 100));
    }

    function handleSquare() {
        setCurrentInput(String(parseFloat(currentInput) ** 2));
    }

    function handleEquals() {
        if (!operator || !previousInput) return;

        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result;

        if (operator === "+") {
            result = prev + current;
        }

        else if (operator === "-") {
            result = prev - current;

        }
        else if (operator === "*") {
            result = prev * current;
        }

        else if (operator === "/") {
            result = current !== 0 ? prev / current : "Error";
        }

        setCurrentInput(String(result));
        setPreviousInput("");
        setOperator(null);
        setShouldResetScreen(true);
    }

    return (
        <>
            <div className='calt-main-div'>
                <div className="input">
                    <p>{previousInput} {operator} {currentInput}</p>
                </div>

                <div className="calt-cols">

                    <div className="calt-col-1 col">
                        <button className="btn-num oprs"
                            onClick={clearAllText}>C</button>

                        <button className="btn-num oprs"
                            onClick={handleDelete}>DELETE</button>

                        <button className="btn-num oprs"
                            onClick={handlePercent}>%</button>

                        <button className="btn-num oprs"
                            onClick={() => handleOperator("/")}>/</button>
                    </div>

                    <div className="calt-col-2 col">
                        <button className="btn-num" onClick={() => handleNumber(7)}>7</button>
                        <button className="btn-num" onClick={() => handleNumber(8)}>8</button>
                        <button className="btn-num" onClick={() => handleNumber(9)}>9</button>
                        <button className="btn-num oprs" onClick={() => handleOperator("*")}>X</button>
                    </div>

                    <div className="calt-col-3 col">
                        <button className="btn-num" onClick={() => handleNumber(4)}>4</button>
                        <button className="btn-num" onClick={() => handleNumber(5)}>5</button>
                        <button className="btn-num" onClick={() => handleNumber(6)}>6</button>
                        <button className="btn-num oprs" onClick={() => handleOperator("-")}>-</button>
                    </div>

                    <div className="calt-col-4 col">
                        <button className="btn-num" onClick={() => handleNumber(1)}>1</button>
                        <button className="btn-num" onClick={() => handleNumber(2)}>2</button>
                        <button className="btn-num" onClick={() => handleNumber(3)}>3</button>
                        <button className="btn-num oprs" onClick={() => handleOperator("+")}>+</button>
                    </div>

                    <div className="calt-col-5 col">
                        <button className="btn-num oprs" onClick={handleSquare}>x<sup>2</sup></button>
                        <button className="btn-num" onClick={() => handleNumber(0)}>0</button>
                        <button className="btn-num" onClick={handleDecimal}>.</button>
                        <button className="btn-num oprs" onClick={handleEquals}>=</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Calculator;