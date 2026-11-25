import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { sculptureList } from './data.jsx';

function App() {
	const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

	function handlePrev() {
		if (index < 1) {
			return;
		}
		setIndex(() => index - 1);
	}

	function handleNext() {
		if (index >= sculptureList.length - 1) {
			return;
		}

		setIndex(() => index + 1);
  }
  
  function handleShowMore() {
    setShowMore(()=> !showMore)
  }

	let sculpture = sculptureList[index];
	return (
		<>
			index: {index}
			<section>
				<button onClick={handlePrev}>Prev</button>
				<button onClick={handleNext}>Next</button>
        <h3>
					({index + 1} of {sculptureList.length} )
				</h3>
				<h2>
					<i>{sculpture.name}</i>
					by {sculpture.artist}
				</h2>

				
        <button onClick={handleShowMore}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        <p>{showMore ? sculpture.description : ""}</p>
				<img src={sculpture.url} alt={sculpture.alt} />
			</section>
			<section id="center">
				<div className="hero">
					<img src={heroImg} className="base" width="170" height="179" alt="" />
					<img src={reactLogo} className="framework" alt="React logo" />
					<img src={viteLogo} className="vite" alt="Vite logo" />
				</div>
				<div>
					<h1>Hello Damil!</h1>
					<p>Welcome to your new React Course!</p>
				</div>
				<button
					type="button"
					className="counter"
					onClick={() => setCount((count) => count + 1)}
				>
					Count is {count}
				</button>
			</section>
		</>
	);
}

export default App;
