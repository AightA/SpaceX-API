import React from 'react';
import LeftSideDisplay from './components/LeftSideDisplay';
import LaunchListDisplay from './components/LaunchListDisplay';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './styles/App.css';
import spaceX from "./assets/spacex-logo.png";
import refresh from "./assets/icon/refresh.png";

function App() {
	return (
		<div className="App">
			<Container fluid={true}>
				<Row>
					<Col xs="12" lg="6">
						<LeftSideDisplay />
					</Col>
					<Col xs="12" lg="6">
						<LaunchListDisplay />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
