import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FetchedAPI } from '../FetchedAPI';
import moment from 'moment';

export default function LaunchListDisplay() {
	const [list, setList] = useState([]);
	const [searchByYear, setSearchByYear] = useState('');
	const [filterList, setFilteredList] = useState([]);
	const [isLatestFirst, setIsLatestFirst] = useState(false);

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

	// Reload list from API
	let reloadList = () => {
		let loaded = true;
		FetchedAPI().then((listItems) => {
			if (loaded) {
				setFilteredList(listItems);
			}
		});
		return () => (loaded = false);
	};

	// order list by year  - using filter method
	useEffect(() => {
		setFilteredList(
			list.filter((item) => {
				return item.launch_year.includes(searchByYear);
			})
		);
	}, [searchByYear, list]);

	// sort list by date - using sort method
	let toggleSortListByDate = () => {
		const newSortedList = list;
		if (!isLatestFirst) {
			newSortedList.sort((a, b) => a.launch_date_utc < b.launch_date_utc);
		} else {
			newSortedList.sort((a, b) => a.launch_date_utc > b.launch_date_utc);
		}
		setIsLatestFirst(!isLatestFirst);
		setFilteredList(newSortedList);
	};

	const listCard = (item) => {
		return (
			<div>
				<Container fluid={true} className="cardBox">
					<Row className="  no-gutters">
						<Col md={4} className="text-left p-2">
							{item.mission_name}
						</Col>
						<Col md={{ span: 4, offset: 4 }} className="text-right p-1">
							{moment(item.launch_date_utc).format('Do MMM YYYY') + ' '}
						</Col>
						<Col md={{ span: 6, offset: 6 }} className="text-right p-3">
							{item.rocket.rocket_name}
						</Col>
					</Row>
				</Container>
			</div>
		);
	};

	return (
		<div>
			<Container fluid={true}>
				<Row className="no-gutters">
					<Col md={8} className="text-center p-3">
						<Button
							className="reloadBtn"
							onClick={(e) => reloadList(e.target.value)}
						>
							Reload
						</Button>
					</Col>
				</Row>
				<Row className="row">
					<Col md={4} className="text-right p-1">
						<Button
							className="orderByYearBtn  btn "
							// onClick={(e) => setSearchByYear(e.target.value)}
							onKeyDown={(event) =>
								event.key === 'Enter'
									? setSearchByYear(event.target.value)
									: null
							}
						>
							Filter by Year :
							<input className="inputBox" type="text" placeholder="year" />
						</Button>
						<Button
							className="sortBtn  btn"
							onClick={(e) => toggleSortListByDate(e.target.value)}
						>
							Sort by date
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<ol>
							{filterList.map((item, index) => (
								<li key={index}>{listCard(item)}</li>
							))}
						</ol>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
