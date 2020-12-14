import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import spacex from '../assets/spacex-logo.png';
import launch from '../assets/img/launch-home.png';

export default function LeftSideDisplay() {
	return (
		<div>
			<Container fluid={true}>
				<Row className="no-gutters">
					<Col>
						<img
							className="imgSpaceX"
							src={spacex}
							alt="reload icon"
							aria-hidden="true"
						/>
						<span className="text">LAUNCHES</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<img
							className="imgLaunch"
							src={launch}
							alt="reload icon"
							aria-hidden="true"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
