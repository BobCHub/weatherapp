import React from "react";
/* import WeatherIcon from 'react-icons-weather';  */
import { Card } from 'antd';


class Weather extends React.Component{

	render(){

		return(
             
			<Card  style={{ width: 300, 
					fontSize: '16px', 		
					textColor: 'blue', 
					fontFamily: 'Open Sans, sans-serif', 
				        includeFontPadding:"true"}}
				>
				&nbsp;
				<div style={{ background: '#ECECEC', padding: '5px' }}>
			       <Row gutter={8}>
                               <Col span={8}>
				{
					this.props.country && this.props.city && <p className="weather__key">Location: 
						<span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
					</p> 
				}
				
				{
					this.props.temperature && <p className="weather__key">Temperature: 
						<span className="weather__value">  {this.props.temperature} {this.props.units}</span>
					</p>
				}
						

				{
					this.props.humidity && <p className="weather__key">Humidity: 
						<span className="weather__value">  {this.props.humidity}</span>
					</p>
				}

				{
					this.props.description && <p className="weather__key">Conditions:  
						<span className="weather__value">  {this.props.description}</span>
					</p>
				}
				{
					this.props.description && <p className="weather__key">  
						<span className="weather__value">  <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} style={{width: 100, height: 100}}/></span>
					</p>
					
				}

				{
					this.props.error && <p className="weather__error">{this.props.error}</p>
				}
				</Col>
				<Col span={8}>
        			<Card title="" bordered={false}>{
					this.props.description && <p className="weather__key">  
						<span className="weather__value">  <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} style={{width: 100, height: 100}}/></span>
					</p>
					
				}</Card>
      				</Col>
      
    				</Row>
		       </div>
		        
			</Card>
			
 
			
		)
	}
}

export default Weather;



