const DigitButton = (props) => {
	const { digit, handleNumInp } = props;

	return (
		<button
			className="DigitButton w-[25%] h-[60px] text-center text-2xl bg-slate-300 {digit === 0 ? flex-grow : ''} hover:bg-white"
			onClick={handleNumInp}
		>
			{digit}
		</button>
	);

}

export default DigitButton;