import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLineChart from '../components/sparkline-chart';
import GoogleChart from '../components/google-chart';

class WeatherList extends Component {
	renderCityData(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map((weather) => weather.main.temp);
		const pressure = cityData.list.map((weather) => weather.main.pressure);
		const humidity = cityData.list.map((weather) => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;
		return (
			<tr key={name}>
				<td><GoogleChart lat={lat} lon={lon}/></td>
				<td><SparkLineChart color="blue" data={temps} unit="K"/></td>
				<td><SparkLineChart color="red" data={pressure} unit="hPa"/></td>
				<td><SparkLineChart color="green" data={humidity} unit="%"/></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature(K)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map((cityData)=>this.renderCityData(cityData)) }
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
