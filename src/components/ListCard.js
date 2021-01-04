import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';

const ListCard = ({ item, index }) => {
	return (
		<Card className="cardBox">
				<div>
					<span className="orderNumber float-left">
						#{index + 1}
					</span>
					<span className="missionName float-left">
						{item.mission_name}
					</span>

					<div className="float-right">
						<div className="launchDate">
							{moment(item.launch_date_utc).format('Do MMM YYYY') + ' '}
						</div>
						<div className="rocketName">
							{item.rocket.rocket_name}
						</div>
					</div>
				</div>
		</Card>
	);
};
export default ListCard;
