const Buttons = (props) => {

	const { handleInput, clear, plusMinus, percentage, divide, multiply, subtract, add, dot, equals } = props;

	return (
		<div className="Buttons w-[100%]">

			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={clear}>C</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={plusMinus}>+/-</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={percentage}>%</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800" onClick={divide}>/</button>	
			</div>
			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>7</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>8</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>9</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800" onClick={multiply}>*</button>	
			</div>
			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>4</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>5</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>6</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800" onClick={subtract}>-</button>	
			</div>
			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>1</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>2</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>3</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800" onClick={add}>+</button>	
			</div>
			<div className="row flex border-gray-800">
				<button className="flex-grow w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={handleInput}>0</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800" onClick={dot}>.</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800" onClick={equals}>=</button>
			</div>

		</div>
	);
}

export default Buttons;
