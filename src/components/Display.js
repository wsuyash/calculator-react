const Display = (props) => {
	const { currentOperand, previousOperand, operator } = props;
	return (
		<div className="Display w-[100%] min-h-[8rem] flex flex-col justify-around p-1 items-end gap-4 text-white bg-gray-900 break-words break-all">
			<div className="previousOperand-operator text-xl">
				{previousOperand} {operator}
			</div>
			<div className="currentOperand text-3xl">
				{isNaN(currentOperand) ? "Undefined" : currentOperand}
			</div>
		</div>
	);
}

export default Display;
