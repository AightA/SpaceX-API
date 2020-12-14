import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';

const ListCard = ({ item, index }) => {
	return (
		<Container fluid={true}>
			<Card className="cardBox">
				<Row className="  no-gutters">
					<Col md={1}>#{index + 1}</Col>
					<Col md={4} className=" ">
						{item.mission_name}
					</Col>
					<Col md={{ span: 4, offset: 4 }} className="">
						{moment(item.launch_date_utc).format('Do MMM YYYY') + ' '}
					</Col>
					<Col md={{ span: 6, offset: 6 }} className="">
						{item.rocket.rocket_name}
					</Col>
				</Row>
			</Card>
		</Container>
	);
};
export default ListCard;
