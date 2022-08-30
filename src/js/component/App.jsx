import React, { useState, useEffect } from "react";
import Light from './Light.jsx'

//create your first component
const App = () => {
	const [selected, setSelected] = useState(null);
	const [colors, setColors] = useState(['red', 'yellow', 'green']);
	const [lightShow, setLightShow] = useState(false);

	useEffect(() => {
		if (lightShow) {
			const interval = setInterval(() => {
				setSelected((selected) => selected = Math.floor(Math.random() * colors.length));
			}, 1000);
	
			return () => clearInterval(interval);
		}

	}, [lightShow, colors]);


	const lights = colors.map((light, index) =>
		<Light key={index} index={index} light={light} selected={selected === index} onClickEvent={() => setSelected(index)} />
  	);

	return (
		<div className="wrapper">
			<div className="traffic-lights">
				{lights}
			</div>
			{ colors.includes('purple') === false &&
				<button onClick={() => setColors([...colors, 'purple']) }>Add purple</button>
			}
			<button onClick={() => setLightShow(!lightShow)}>Lightshow</button>
		</div>
	);
};

export default App;
