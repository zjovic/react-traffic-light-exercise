import React from "react";
import PropTypes from 'prop-types';

//create your first component
const Light = (props) => {
	return (
		<div className={`light ${props.selected ? 'selected' : ''} ${props.light}`} onClick={props.onClickEvent} value={props.index}></div>
	);
};

Light.propTypes = {
    light: PropTypes.string,
    selected: PropTypes.bool,
    index: PropTypes.number
}

export default Light;