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
					<Col>
						<img
							className="imgSpaceX"
							src={spaceX}
							alt="reload icon"
							aria-hidden="true"
						/>
						<span className="text">LAUNCHES</span>
					</Col>
					<Col>
						<Button className="reloadBtn" /*onClick={reloadList} */>
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
