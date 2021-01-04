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
				<Row className="no-gutters">
					<Col xs="12" md="9">
						<img
							className="img-space-x float-md-left"
							src={spaceX}
							alt="reload icon"
							aria-hidden="true"
						/>
						<div className="text float-md-left">LAUNCHES</div>
					</Col>
					<Col xs="12" md="3">
						<Button className="reloadBtn float-right" /*onClick={reloadList} */>
							Reload Data
							<img className="img" src={refresh} alt="reload icon" />
						</Button>
					</Col>
				</Row>
					<Row>
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
