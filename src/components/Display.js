const Display = ({ result }) => {

	return (
		<div className="Display w-[100%] min-h-[4rem] max-h-96 p-2 text-5xl text-white text-right bg-gray-900 break-words">
			{result}
		</div>
	);
}

export default Display;
