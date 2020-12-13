import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FetchedAPI } from '../FetchedAPI';

export default function LaunchListDisplay() {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<div>
							<h1>Space X Launch list</h1>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
