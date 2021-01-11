import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import spaceX from '../assets/spacex-logo.png';
import launch from '../assets/img/launch-home.png';

export default function LeftSideDisplay() {
	return (
		<div>
			<div>
				<img
					className="img-space-x float-lg-left"
					src={spaceX}
					alt="reload icon"
					aria-hidden="true"
				/>
				<div className="header-text float-lg-left">LAUNCHES</div>
			</div>
			<div className="x-center-container">
				<img
					id="rocket"
					className="header-margin"
					src={launch}
					alt="reload icon"
					aria-hidden="true"
				/>
			</div>
		</div>
	);
}
