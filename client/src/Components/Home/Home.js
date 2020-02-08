import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home1 from '../Home/Home1'
import Footer from '../Footer/Footer';
import {Header} from 'semantic-ui-react';
export default class Home extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { lat: null, long:null, humidity:null, temp: null, error: "" }
      }
  
    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude });
          this.setState({long: position.coords.longitude});
          this.fetchAPI();
        },
        err => {
          this.setState({ error: err.message });
        }
      );
      
    }
    KtoC(temp)
    {
        return (temp - 273.15);
    }
    fetchAPI()
    {
        const pointer= this;
        let API_CALL = fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=7e792f31424709f0db3b655402a327bc`);
        API_CALL.then(function(response) {
            return response.json();
          })
            .then(function(data) {
                pointer.setState({humidity: data["main"]["humidity"]})
                let TEMP = Math.round(pointer.KtoC(parseFloat(data["main"]["temp"])));
                pointer.setState({temp: TEMP});
                console.log(data["main"]);
                console.log(data["main"]["humidity"]);
                console.log(this.state.humidity)
            });
    }
    
    render()
    {
        return(
            <div className={"contain_all"}>
                Lat: {this.state.lat}
                <br/>
                Long: {this.state.long}
                <br/>
                Humidity: {this.state.humidity}%
                <br/>
                Temperature: {this.state.temp} Degree Celcius
            </div>
        );
    }
}