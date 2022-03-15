// Imports
import Display from './Display';
import Buttons from './Buttons';
import { useState } from 'react';

const App = () => {
	// States
	const [currentOperand, setCurrentOperand] = useState(() => "");
	const [previousOperand, setPreviousOperand] = useState(() => "");
	const [operator, setOperator] = useState("");
	const [isEvaluated, setIsEvaluated] = useState(false);

	// Handle number buttons click
	const handleNumInp = (e) => {
		if (isEvaluated) {
			setCurrentOperand(() => e.target.innerText);
			setIsEvaluated(() => false);
			return;
		}
			
		setCurrentOperand((prevState) => (prevState + e.target.innerText));
		return;
	}

	// Handle operator buttons click
	const handleOperatorInp = (e) => {
		if (currentOperand === "" && previousOperand === "") {
			return;
		}

		if (currentOperand === "" && previousOperand !== "") {
			setOperator(e.target.innerText);
			return;
		}

		if (previousOperand === "" && !isNaN(currentOperand)) {
			setPreviousOperand(() => currentOperand);
			setOperator(() => e.target.innerText);
			setCurrentOperand(() => "");
			return;
		}

		if (previousOperand !== "" && currentOperand !== "") {
			let result = calculate(previousOperand, currentOperand, operator);
			setPreviousOperand(() => result);
			setOperator(() => e.target.innerText);
			setCurrentOperand(() => "");
			return;
		}

	}

	// Handle special button clicks like "C", ".", "+/-", "%".
	const handleSpecialInp = (e) => {
		// Get the symbol of the button clicked
		const symbol = e.target.innerText;

		switch(symbol) {
			case "C" :
				if (currentOperand === "" && previousOperand !== "") {
					setCurrentOperand(() => previousOperand);
					setOperator(() => "");
					setPreviousOperand(() => "");
					return;
				}

				if (currentOperand === "Infinity" || isNaN(currentOperand)) {
					setCurrentOperand(() => "");
					return;
				}

				if (currentOperand[0] === '-' &&  currentOperand.substring(1) === "Infinity") {
					setCurrentOperand(() => "");
					return;
				}
				
				if (currentOperand[0] === '-' &&  currentOperand.length === 2) {
					setCurrentOperand(() => "");
					return;
				}

				setCurrentOperand((prevState) => prevState.slice(0, -1));
				setIsEvaluated(false);
				return;
				
			case "+/-" :
				if (currentOperand === "" && previousOperand === "") {
					return;
				}

				if (currentOperand === "" && previousOperand !== "") {
					setPreviousOperand((prevState) => prevState.charAt(0) === '-' ? prevState.substring(1) : "-" + prevState);
					return;
				}

				setCurrentOperand((prevState) => prevState.charAt(0) === '-' ? prevState.substring(1) : "-" + prevState);
				return;

			case "%" :
				if (currentOperand === "" && previousOperand === "") {
					return;
				}

				if (currentOperand === "" && previousOperand !== "") {
					setPreviousOperand((prevState) => isNaN(prevState) ? "" : eval(prevState / 100).toString());
					return;
				}

				setCurrentOperand((prevState) => isNaN(prevState) ? "" : eval(prevState / 100).toString());
				return;

			case "AC" : 
				setPreviousOperand(() => "");
				setCurrentOperand(() => "");
				setOperator(() => "");
				setIsEvaluated(() => false);
				return;

			case "." :
				if (currentOperand === "") {
					return;
				}

				if (!currentOperand.includes(".")) {
					setCurrentOperand((prevState) => prevState + ".");
					if (isEvaluated) {
						setIsEvaluated(() => false);
					}
					return;
				}
				return;

			default :
				return;
		}
	}

	// Helper function to calculate the result
	const calculate = (previousOperand, currentOperand, operator) => {
		let op1 = parseFloat(previousOperand);
		let op2 = parseFloat(currentOperand);
		switch (operator) {
			case "+":
				return (op1 + op2).toString();
			case "−":
				return (op1 - op2).toString();
			case "×":
				return (op1 * op2).toString();
			case "÷":
				return (op1 / op2).toString();
			default:
				return "0";
		}
	}

	// Handle equals button click
	const evaluate = () => {
		if (previousOperand === "" || operator === "" || currentOperand === "") {
			return;
		}

		let result = calculate(previousOperand, currentOperand, operator);
		setCurrentOperand(() => result);
		setPreviousOperand(() => "");
		setOperator(() => "");
		setIsEvaluated(() => true);
		return;
	}

  return (
		<div className="App w-screen h-screen md:w-[50%] lg:w-[30%] md:h-min flex flex-col justify-center items-center m-auto p-2 md:p-0 absolute top-0 bottom-0 left-0 right-0">
			<Display
				currentOperand={currentOperand}
				previousOperand={previousOperand}
				operator={operator}
			/>
			<Buttons
				handleNumInp={handleNumInp}
				handleOperatorInp={handleOperatorInp}
				handleSpecialInp={handleSpecialInp}
				evaluate={evaluate}
			/>
		</div>
  );
}

export default App;
