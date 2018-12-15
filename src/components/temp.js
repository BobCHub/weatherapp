import React from 'react';
import ReactDOM from "react-dom";

class Temp extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			units: "metric"
		}
		onClickButton1 = onClickButton1.bind(this)
		onClickButton2 = onClickButton2.bind(this)
	};

	onClickButton1 = () => {
		this.setState({
			units: 'metric'
		});
	}

	onClickButton2 = () => {
		this.setState({
			units: 'imperial'
		});
	}

      render() {
		return (
			<div>
				<button onClick={this.onClickButton1}>C</button>
				<button onClick={this.onClickButton2}>F</button>
			</div>
		);
     }

}

export default Temp;

