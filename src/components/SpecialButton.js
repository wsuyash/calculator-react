const SpecialButton = (props) => {
	const { symbol, handleNumInp } = props;

	return (
		<button
			className="SpecialButton w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800"
			onClick={handleNumInp}
		>
			{symbol}
		</button>
	);
}

export default SpecialButton;