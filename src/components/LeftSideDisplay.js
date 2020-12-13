import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function LeftSideDisplay() {
	return (
		<div>
			<Container fluid>
				<Row className="no-gutters">
					<Col>
						<div>
							<h1>Space X</h1>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
