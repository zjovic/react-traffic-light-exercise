import React, { useState } from "react";
import Light from './Light.jsx'

//create your first component
const App = () => {
	const [selected, setSelected] = useState(null);

	const lights = ['red', 'yellow', 'green'].map((light, index) =>
		<Light key={index} index={index} light={light} selected={selected === index} onClickEvent={() => setSelected(index)} />
  	);

	return (
		<div className="traffic-lights">
			{lights}
		</div>
	);
};

export default App;
