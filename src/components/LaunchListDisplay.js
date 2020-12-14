import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FetchedAPI } from '../FetchedAPI';
import ListCard from './ListCard';
import refresh from '../assets/icon/refresh.png';
import select from '../assets/icon/select.png';
import sort from '../assets/icon/sort.png';

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
	const reloadList = () => {
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
	const toggleSortListByDate = () => {
		const newSortedList = list;
		if (!isLatestFirst) {
			newSortedList.sort((a, b) => a.launch_date_utc < b.launch_date_utc);
		} else {
			newSortedList.sort((a, b) => a.launch_date_utc > b.launch_date_utc);
		}
		setIsLatestFirst(!isLatestFirst);
		setFilteredList(newSortedList);
	};

	// const listCard = (item) => {
	// 	return (
	// 		<div>
	// 			<Container fluid={true} className="cardBox">
	// 				<Row className="  no-gutters">
	// 					<Col md={4} className="text-left p-2">
	// 						{item.mission_name}
	// 					</Col>
	// 					<Col md={{ span: 4, offset: 4 }} className="text-right p-1">
	// 						{moment(item.launch_date_utc).format('Do MMM YYYY') + ' '}
	// 					</Col>
	// 					<Col md={{ span: 6, offset: 6 }} className="text-right p-3">
	// 						{item.rocket.rocket_name}
	// 					</Col>
	// 				</Row>
	// 			</Container>
	// 		</div>
	// 	);
	// };

	return (
		<div>
			<Container fluid={true} className="grid">
				<Row>
					<Col md={12}>
						<Button className="reloadBtn" onClick={reloadList}>
							Reload Data
							<img
								className="img"
								src={refresh}
								alt="reload icon"
								aria-hidden="true"
							/>
						</Button>
					</Col>
				</Row>
				<Row className="row">
					<Col md={8} className=" ">
						<Button className="orderByYearBtn">
							Filter by Year
							<img
								className="img"
								src={select}
								alt="filter by year"
								aria-hidden="true"
							/>
						</Button>

						<Button className="sortBtn" onClick={toggleSortListByDate}>
							Sort by date
							<img
								className="img"
								src={sort}
								alt="sort by date"
								aria-hidden="true"
							/>
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						{filterList.map((item, index) => (
							<div key={index}>{<ListCard index={index} item={item} />}</div>
						))}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
