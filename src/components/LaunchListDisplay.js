import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { fetchedAPI } from '../FetchedAPI';
import DropDownBtn from './DropDownBtn';
import ListCard from './ListCard';
import refresh from '../assets/icon/refresh.png';
import select from '../assets/icon/select.png';
import sort from '../assets/icon/sort.png';

export default function LaunchListDisplay() {
	const [list, setList] = useState([]);
	const [searchByYear, setSearchByYear] = useState([]);
	const [filterYear, setFilterYear] = useState();
	const [filterList, setFilteredList] = useState([]);
	const [isLatestFirst, setIsLatestFirst] = useState(false);

	useEffect(() => {
		// Fetch JSON API data ans save it inside array
		fetchedAPI().then((listItems) => {
			setList(listItems);
			setFilteredList(listItems);
		});
	}, []);

	// Reload list from API
	const reloadList = () => {
		fetchedAPI().then((listItems) => {
			setFilteredList(listItems);
		});
	};

	// Order list by year  - using foreach and filter method
	useEffect(() => {
		let years = [];
		list.forEach((item) => {
			if (!years.includes(item.launch_year)) {
				years.push(item.launch_year);
			}
		});
		years.sort();
		setSearchByYear(years);
	}, [list]);

	function getListByYear(option) {
		filterAndSort(option, isLatestFirst);
		setFilterYear(option);
	}

	// Sort list by date - using sort method
	function toggleSortListByDate() {
		filterAndSort(filterYear, !isLatestFirst);
		setIsLatestFirst(!isLatestFirst);
	}

	function filterAndSort(year, order) {
		let newSortedList = list;

		if(year) {
			newSortedList = newSortedList.filter((item) => item.launch_year === year)
		}

		newSortedList.sort((a, b) => {
			if (a.launch_date_utc < b.launch_date_utc) {
				return order ? -1 : 1;
			} else if(a.launch_date_utc > b.launch_date_utc) {
				return order ? 1 : -1
			} else {
				return 0;
			}
		})

		setFilteredList(newSortedList);
	}


	return (
		<div>
			<Container fluid={true} className="grid">
				<Row>
					<Col md={12}>
						<Button className="reloadBtn" onClick={reloadList}>
							Reload Data
							<img className="img" src={refresh} alt="reload icon" />
						</Button>
					</Col>
				</Row>
				<Row className="row">
					<Col md={8} className=" ">
						<DropDownBtn
							dropDownList={searchByYear}
							selectedYearUpdated={getListByYear}
						/>
						<img className="img" src={select} alt="filter by year" />
						<Button className="sortBtn" onClick={toggleSortListByDate}>
							Sort {isLatestFirst ? 'Descending' : 'Ascending'}
							<img className="img" src={sort} alt="sort by date" />
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
