import Display from './Display';
import Buttons from './Buttons';

const App = () => {
  return (
		<div className="App w-screen h-screen md:w-[50%] lg:w-[30%] md:h-min flex flex-col justify-center items-center m-auto p-2 md:p-0 absolute top-0 bottom-0 left-0 right-0 md:border-2 md:border-gray-800 rounded">
			<h1 className="w-[100%] text-2xl text-white text-center font-bold mb-8 bg-gray-800">CALCULATOR</h1>
			<Display />
			<Buttons />
		</div>
  );
}

export default App;
