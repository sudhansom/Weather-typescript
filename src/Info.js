import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	flex: 1 1;
	align-items: center;
`;

const Wrapper1 = styled.div`
	display: flex;
	flex-flow: row;
	background: #b0e867;
	width: 95%;
	border-radius: 8px;
	justify-content: space-around;
	align-items: center;
	font-size: 1.5rem;
`;

const Wrapper2 = styled(Wrapper1)`
	background: #49739a;
	margin: 20px;
`;

function Info({ data }) {
	if (data) {
		console.log(data);
	}

	return (
		<Wrapper>
			<h1>Helsinki Air Quality Index</h1>
			<Wrapper1>
				<div style={{ flex: '2 1', marginBottom: '15px' }}>
					<h1>{data && data.aqi}</h1>
					<p style={{ fontSize: '1rem' }}>AQI</p>
				</div>
				<div
					style={{
						flex: '1 1',
						borderRight: 'solid black 1px',
						marginTop: '15px',
					}}>
					{data && data.pm10.toFixed(2)}
					<p>PM 10</p>
				</div>
				<div style={{ flex: '1 1', marginTop: '15px' }}>
					{data && data.pm25.toFixed(2)}
					<p>PM 2.5</p>
				</div>
			</Wrapper1>
			<Wrapper2>
				<p>
					NO<span style={{ fontSize: '1rem' }}>2</span>
					<br />
					{data && data.no2.toFixed(2)}
				</p>
				<p>
					CO
					<br />
					{data && data.co.toFixed(2)}
				</p>
				<p>
					O<span style={{ fontSize: '1rem' }}>3</span>
					<br />
					{data && data.o3.toFixed(2)}
				</p>
				<p>
					SO<span style={{ fontSize: '1rem' }}>2</span>
					<br />
					{data && data.so2.toFixed(2)}
				</p>
			</Wrapper2>
		</Wrapper>
	);
}

export default Info;
