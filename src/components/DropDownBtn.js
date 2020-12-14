// import React, { useState } from 'react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DropDownBtn(props) {
	const filteredDropDownBtn = props.dropDownList.map((option, index) => {
		return (
			<Dropdown.Item
				key={index}
				onClick={() => props.selectedYearUpdated(option)}
			>
				{option}
			</Dropdown.Item>
		);
	});

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle
					variant="Primary"
					id="dropdown-basic"
					className="orderByYearBtn"
				>
					Filter by year
				</Dropdown.Toggle>
				<Dropdown.Menu>{filteredDropDownBtn}</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}
