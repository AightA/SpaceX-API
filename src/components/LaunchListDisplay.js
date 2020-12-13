import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FetchedAPI } from '../FetchedAPI';
import moment from 'moment';

export default function LaunchListDisplay() {
	const [list, setList] = useState([]);

	useEffect(() => {
		// fetch JSON API data ans save it inside array
		let loaded = true;
		FetchedAPI().then((listItems) => {
			if (loaded) {
				setList(listItems);
			}
		});
		return () => (loaded = false);
	}, []);

	const listCard = (item) => {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col>{item.mission_name}</Col>
						<Col>
							{moment(item.launch_date_utc).format('Do MMM YYYY') + ' '}
						</Col>
						<Col>{item.rocket.rocket_name}</Col>
					</Row>
				</Container>
			</div>
		);
	};

	return (
		<div>
			<Container fluid>
				<Row className="no-gutters">
					<Col>
						<Button>Reload</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button>
							Order by Year :
							<input className="inputBox" type="text" placeholder="year" />
						</Button>
						<Button>Sort by date</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<ol>
							{list.map((item, index) => (
								<li key={index}>{listCard(item)}</li>
							))}
						</ol>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
