import React from 'react';
import LeftSideDisplay from './components/LeftSideDisplay';
import LaunchListDisplay from './components/LaunchListDisplay';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
	return (
		<div className="App">
			<Container fluid={true}>
				<Row className="no-gutters">
					<Col>
						<LeftSideDisplay />
					</Col>
					<Col>
						<LaunchListDisplay />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
