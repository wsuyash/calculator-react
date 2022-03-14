const DigitButton = (props) => {
	const { digit, handleNumInp } = props;
	return (
		<button
			className="DigitButton w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800 {digit === 0 ? flex-grow : ''}"
			onClick={handleNumInp}
		>
			{digit}
		</button>
	);

}

export default DigitButton;