import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

const WeatherDisplay = styled.div`
	min-height: 45vh;
	min-width: 25vw;
	background: white;
	opacity: 0.8;
	margin: 20px;
	border-radius: 8px;
	opacity: 0.8;
	text-align: center;
	display: flex;
	flex-flow: column;
`;

class WeatherCard extends Component {
	state = {
		appTemp: null,
		humidity: null,
		temp: null,
		windSpeed: null,
		partOfDay: null,
		weather: null,
	};
	componentDidMount() {
		axios
			.get(
				'https://api.weatherbit.io/v2.0/current?city=Helsinki&key=12b3830093e741069ba73debc71898a8'
			)
			.then((res) => {
				this.setState({
					appTemp: res.data.data[0].app_temp,
					humidity: res.data.data[0].rh,
					temp: res.data.data[0].temp,
					windSpeed: res.data.data[0].wind_spd,
					partOfDay: res.data.data[0].pod,
					weather: res.data.data[0].weather,
				});
			});
	}

	render() {
		return (
			<div>
				<WeatherDisplay>
					<WeatherInfo
						appTemp={this.state.appTemp}
						humidity={this.state.humidity}
						temp={this.state.temp}
						windSpeed={this.state.windSpeed}
						partOfDay={this.state.partOfDay}
						weather={this.state.weather}
					/>
				</WeatherDisplay>
			</div>
		);
	}
}

export default WeatherCard;
