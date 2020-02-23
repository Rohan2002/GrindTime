import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Header } from "semantic-ui-react";
import axios from "axios";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      test: "hello",
      long: null,
      humidity: null,
      temp: null,
      error: "",
      ML_result: "Loading..."
    };
  }

  componentWillMount() {}
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
        this.fetchAPI();
      },
      err => {
        this.setState({ error: err.message });
      }
    );
  }

  KtoC(temp) {
    return temp - 273.15;
  }
  fetchAPI() {
    const pointer = this;
    let API_CALL = fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=7e792f31424709f0db3b655402a327bc`
    );
    API_CALL.then(function(response) {
      return response.json();
    }).then(function(data) {
      pointer.setState({ humidity: data["main"]["humidity"] });
      let TEMP = Math.round(pointer.KtoC(parseFloat(data["main"]["temp"])));
      pointer.setState({ temp: TEMP });

      axios
        .post("http://localhost:8080/api/getdata", {
          Lat: pointer.state.lat,
          Long: pointer.state.long,
          Humidity: data["main"]["humidity"],
          Temp: TEMP
        })
        .then(function(response) {
          return response.data;
        })
        .then(function(data) {
          console.log(data)
          data===1 ? pointer.setState({ML_result: "Good Time to Study"}) : pointer.setState({ML_result: "Bad Time to Study"})
        });
    });
  }

  render() {
    return (
      <div className={"contain_all"}>
        Lat: {this.state.lat}
        <br />
        Long: {this.state.long}
        <br />
        Humidity: {this.state.humidity}%
        <br />
        Temperature: {this.state.temp} Degree Celcius
        <br />
        ML Result: {this.state.ML_result}
      </div>
    );
  }
}
