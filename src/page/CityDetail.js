import React from "react";
import styled from "styled-components";

class CityDetail extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    //console.log(props.data1);
  }

  // componentDidMount(){
  //     fetch('https://api.apixu.com/v1/current.json?key=dd644d7e780742f8af1111744192707&q=Paris')
  //     .then(respons => {respons.json()
  //       // .then(data=> {this.setState({current:data.current,location:data.location});console.log(data)
  //       .then(data=> {this.setState(data);console.log(data)
  //       })
  //     })
  //     .catch(err => console.log('err'))
  // }

  //  async componentDidMount(){
  //    await fetch('https://api.apixu.com/v1/current.json?key=dd644d7e780742f8af1111744192707&q=Paris')
  //     .then(respons => respons.json())
  //     .then(data=> this.setState(data))
  //     // .then(data=>this.setState({current:data.current,location:data.location})
  //     .catch(err => console.log('err'))
  //     console.log(this.state.data)
  // }

  render() {
    return (
      <WeatherLeftPart>
        <TempContainer>
          <strong>{this.props.temp} °C</strong>
        </TempContainer>

        <div>
          <h3>{this.props.condition}</h3>
        </div>

        <OtherContainer>
          <div>
            <h5>HUMIDITY</h5>
            <h5>{this.props.humidity}%</h5>
          </div>
          <div>
            <h1>|</h1>
          </div>
          <div>
            <h5>WIND</h5>
            <h5>{this.props.wind}K/m</h5>
          </div>
        </OtherContainer>
      </WeatherLeftPart>
    );
  }
}

export default CityDetail;

// const Box = styled.div`
// min-width:100px;
// width:400px;
// max-width: 100%;

// `;

const WeatherLeftPart = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: black;
`;

const TempContainer = styled.div`
  font-size: 50px;
  display: flex;

  text-align: center;
`;
const OtherContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
`;
