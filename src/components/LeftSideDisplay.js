import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import spaceX from '../assets/spacex-logo.png';
import launch from '../assets/img/launch-home.png';

export default function LeftSideDisplay() {
	return (
			<img
				className="imgLaunch"
				src={launch}
				alt="reload icon"
				aria-hidden="true"
			/>
	);
}
