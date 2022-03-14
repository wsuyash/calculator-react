import Display from './Display';
import Buttons from './Buttons';
import { useState } from 'react';

const App = () => {
	const [currentOperand, setCurrentOperand] = useState(() => "");
	const [previousOperand, setPreviousOperand] = useState(() => "");
	const [operator, setOperator] = useState("");
	const [isEvaluated, setIsEvaluated] = useState(false);

	const handleNumInp = (e) => {
		if (isEvaluated) {
			setCurrentOperand(() => e.target.innerText);
			setIsEvaluated(false);
		} else {
			setCurrentOperand((prevState) => (prevState + e.target.innerText));
		}

	}

	const handleOperatorInp = (e) => {
		if (currentOperand === "" && previousOperand === "") {
			return;
		}

		if (currentOperand === "" && previousOperand !== "") {
			setOperator(e.target.innerText);
		}

		if (previousOperand === "" && !isNaN(currentOperand)) {
			setPreviousOperand(() => currentOperand);
			setOperator(() => e.target.innerText);
			setCurrentOperand(() => "");
		}

		if (previousOperand !== "" && currentOperand !== "") {
			let result = calculate(previousOperand, currentOperand, operator);
			setPreviousOperand(() => result);
			setOperator(() => e.target.innerText);
			setCurrentOperand(() => "");
		}

	}

	const calculate = (previousOperand, currentOperand, operator) => {
		let op1 = parseFloat(previousOperand);
		let op2 = parseFloat(currentOperand);
		switch (operator) {
			case "+":
				return op1 + op2;
			case "-":
				return op1 - op2;
			case "*":
				return op1 * op2;
			case "/":
				return op1 / op2;
			default:
				return 0;
		}
		// return eval(`${previousOperand} ${operator} ${currentOperand}`);
	}

	const evaluate = () => {
		if (previousOperand === "" || operator === "" || currentOperand === "") {
			return;
		}

		let result = calculate(previousOperand, currentOperand, operator);
		setCurrentOperand(() => result);
		setPreviousOperand(() => "");
		setOperator(() => "");
		setIsEvaluated(() => true);
	}

  return (
		<div className="App w-screen h-screen md:w-[50%] lg:w-[30%] md:h-min flex flex-col justify-center items-center m-auto p-2 md:p-0 absolute top-0 bottom-0 left-0 right-0 md:border-2 md:border-gray-800 rounded">
			<Display
				currentOperand={currentOperand}
				previousOperand={previousOperand}
				operator={operator}
			/>
			<Buttons
				handleNumInp={handleNumInp}
				handleOperatorInp={handleOperatorInp}
				evaluate={evaluate}
			/>
		</div>
  );
}

export default App;
