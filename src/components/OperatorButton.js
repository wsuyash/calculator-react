const OperatorButton = (props) => {
	const { operator, handleOperatorInp, evaluate } = props;
	return (
		<button
			className="OperatorButton w-[25%] h-[60px] text-center text-2xl bg-yellow-500 border-gray-800"
			onClick={ operator !== "=" ? handleOperatorInp : evaluate}
		>
			{operator}
		</button>
	);
}

export default OperatorButton;