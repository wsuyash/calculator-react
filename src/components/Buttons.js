import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorButton";
import SpecialButton from "./SpecialButton";

const Buttons = (props) => {
	const { handleNumInp, handleOperatorInp, evaluate } = props;

	return (
		<div className="Buttons w-[100%]">
			<div className="row flex border-b-2 border-gray-800">
				<SpecialButton symbol="C" />
				<SpecialButton symbol="+/-" />
				<SpecialButton symbol="%" />
				<OperatorButton operator="/" handleOperatorInp={handleOperatorInp} />
			</div>

			<div className="row flex border-b-2 border-gray-800">
				<DigitButton digit="7" handleNumInp={handleNumInp} />
				<DigitButton digit="8" handleNumInp={handleNumInp} />
				<DigitButton digit="9" handleNumInp={handleNumInp} />
				<OperatorButton operator="*" handleOperatorInp={handleOperatorInp} />
			</div>

			<div className="row flex border-b-2 border-gray-800">
				<DigitButton digit="4" handleNumInp={handleNumInp} />
				<DigitButton digit="5" handleNumInp={handleNumInp} />
				<DigitButton digit="6" handleNumInp={handleNumInp} />
				<OperatorButton operator="-" handleOperatorInp={handleOperatorInp} />
			</div>

			<div className="row flex border-b-2 border-gray-800">
				<DigitButton digit="1" handleNumInp={handleNumInp} />
				<DigitButton digit="2" handleNumInp={handleNumInp} />
				<DigitButton digit="3" handleNumInp={handleNumInp} />
				<OperatorButton operator="+" handleOperatorInp={handleOperatorInp} />
			</div>

			<div className="row flex border-gray-800">
				<DigitButton digit="0" handleNumInp={handleNumInp} />
				<button className="w-[25%] h-[60px] text-center text-2xl bg-slate-300 border-r-2 border-gray-800">.</button>
				<OperatorButton operator="=" evaluate={evaluate} />
			</div>
		</div>
	);
}

export default Buttons;
