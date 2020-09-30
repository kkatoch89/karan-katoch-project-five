import React from 'react';

const CheckBox = (props) => {
	return (
		<input
			type="checkbox"
			className="checkbox"
			id={props.id}
			onClick={props.statusCheck}
			defaultChecked={props.status}
		/>
	);
};

export default CheckBox;
