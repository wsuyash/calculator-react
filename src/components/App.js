import Display from './Display';
import Buttons from './Buttons';
import { useState } from 'react';

const App = () => {
	const [reset, setReset] = useState(false);
	const [result, setResult] = useState("");

	const handleInput = (e) => {
		console.log(result);
		if (reset && isNaN(result.charAt(result.length - 1))) {
			setResult(result + e.target.innerText);
		} else if (reset) {
			setResult(e.target.innerText);
		} else {
			if (result[0] === '0' && !isNaN(result.charAt(result.length - 1))) {
				setResult(result.substring(1) + e.target.innerText);
				return;
			}
			setResult(result + e.target.innerText);
		}

		setReset(false);
	}

	const clear = () => {
		setResult(result.slice(0, -1));
	}

	const plusMinus = () => {
		if (result === "" || result === "0") {
			return;
		}

		if (result[0] === "-") {
			setResult(result.slice(1));
		} else {
			setResult("-" + result);
		}

	}

	const percentage = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1))) {
			return;
		}
		setResult(eval(result / 100).toString());
	}

	const divide = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1))) {
			return;
		}
		setResult(result + "/");

	}

	const multiply = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1))) {
			return;
		}
		setResult(result + "*");

	}

	const subtract = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1))) {
			return;
		}
		setResult(result + "-");

	}

	const add = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1))) {
			return;
		}
		setResult(result + "+");

	}

	const dot = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1))) {
			return;
		}

		setResult(result + ".");
	}

	const equals = () => {
		if (result === "" || isNaN(result.charAt(result.length - 1)) || result.includes("/") === '-1' || result.includes("*") === '-1' || result.includes("-") === '-1' || result.includes("+") === '-1') {
			return;
		}
		try {
			setResult(eval(result).toString());
			setReset(true);
		} catch (error) {
			setResult(Error);	
			setReset(true);
		}
	}

  return (
		<div className="App w-screen h-screen md:w-[50%] lg:w-[30%] md:h-min flex flex-col justify-center items-center m-auto p-2 md:p-0 absolute top-0 bottom-0 left-0 right-0 md:border-2 md:border-gray-800 rounded">
			<h1 className="w-[100%] mb-8 py-2 text-2xl text-white text-center font-bold bg-gray-800">CALCULATOR</h1>
			<Display result={result} />
			<Buttons
				handleInput={handleInput}
				clear={clear}
				plusMinus={plusMinus}
				percentage={percentage}
				divide={divide}
				multiply={multiply}
				subtract={subtract}
				add={add}
				dot={dot}
				equals={equals}
			/>
		</div>
  );
}

export default App;
