import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";
//import Temp from "./components/temp";
const Api_Key = "ab1c42024fc38bb21538762b2854b11a";



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country:'',
      units: 'metric',
      temp: { current: '', max: '', min: '' },			
      humidity: '',
      description: '',
      icon: ''

    };
    
    // My attempt at integration of weather unit selection
    // this.handleToggle = this.handleToggle.bind(this);
    // this.getWeather = this.getWeather.bind(this);
  }    
   
      
   //getWeather make the api call using -  async/await
    getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    /* const units = e.target.elements.units.value; */

    e.preventDefault();
    // async/await 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    
    /* convert to json */
    const response = await api_call.json();
    console.log(response);
    /* Both are required before setting States */
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        error: ""
      })
      } else {
        this.setState({ error: "Please input search values..."})
      }
  }
  
   handleToggle(_event, isChecked) {
      return isChecked ? this.setState({ units: 'metric' }) : this.setState({ units: 'imperial' });
    }
    
    render() {
    return (

      <div>
        <div className = "wrapper" >
          <div className = "main" >
            <div className = "container" >
              <div className = "row" >
               <div className = "col-lg-9 title-container" >
                <Titles / >
                 </div> 
                    <div className = "col-lg-9 form-container" >  
                      <Form loadWeather = {this.getWeather} /> 
                            <Weather temperature = {this.state.temperature} 
                                    city = {this.state.city}
                                    country = {this.state.country} 
                                    humidity = {this.state.humidity}
                                    description = {this.state.description}
                                    icon = {this.state.icon}
                                    error = {this.state.error}  /> 
                   </div> 
               </div> 
            </div> 
          </div> 
        </div> 
      </div>

    )
  }
}
export default App;
