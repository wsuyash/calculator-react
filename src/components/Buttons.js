const Buttons = () => {
	return (
		<div className="Buttons w-[100%]">

			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">C</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">+/-</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">%</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800">/</button>	
			</div>
			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">7</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">8</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">9</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800">*</button>	
			</div>
			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">4</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">5</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">6</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800">-</button>	
			</div>
			<div className="row flex border-b-2 border-gray-800">
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">1</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">2</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">3</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800">+</button>	
			</div>
			<div className="row flex border-gray-800">
				<button className="flex-grow w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">0</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">.</button>
				<button className="w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800">=</button>
			</div>

		</div>
	);
}

export default Buttons;
