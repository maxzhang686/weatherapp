import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import axios from "axios";
import WeeksDetail from './WeeksDetail';
import CityDetail from './CityDetail';


const API = 'https://api.apixu.com/v1/forecast.json?key=dd644d7e780742f8af1111744192707&q=';
class Dashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      city: 'Sydney',
      isLoading: false
    };
  }

  fetchData =async() => {
  console.log("fetching");
    fetch( API+this.state.city+"&days=5")
      .then(respons => {respons.json()
        .then(data=> {this.setState({data});console.log(data)
        })
      })
      .catch(err => console.log('err'))
  };
 
  // fetchData =async() => {
  //   await fetch(API+this.state.city)
  //     .then(respons => respons.json())
  //     .then(data=> this.setState(data))
  //     // .then(data=>this.setState({current:data.current,location:data.location})
  //     .catch(err => console.log('err'))
  //     console.log(this.state.data)
  //   };

 
 componentDidMount() {
    this.fetchData();
}


handleChange = event => {
  //important！setState is async,must use call back
  this.setState({ city: event.target.value }, () => {
    this.fetchData();
  });
};

  render(){
    const data = this.state.data;
    // // const forecast = this.state.forecast;
    // // const current = this.state.current;
    // // console.log("rendering" + forecast);
    // console.log("rendering" + data);

    return(
      
        <Container>
          
          <Containerweather>
            <Left>
              {data &&data.current && (
                    <CityDetail
                      temp={data.current.temp_c}
                      humidity={data.current.humidity}
                      wind={data.current.wind_mph}
                      condition={data.current.condition.text}
                    />
                  )}
            </Left>

            <Right>
                  <div>
                    {" "}
                    <strong><h1> {this.state.city}</h1></strong>
                  </div>
                  <div>
                    <select
                      className="form-control"
                      id="city"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    >
                      <option value="Sydney">Sydney</option>
                      <option value="Tokyo">Tokyo</option>
                      <option value="Beijing">Beijing</option>
                    </select>
                  </div>
            
            </Right>
          </Containerweather>
          
        <Buttompart>
        
        {data&&data.forecast.forecastday.map((day1,id) => {
          return <WeeksDetail
                  key={id}
                  date={day1.date}
                  icon={day1.day.condition.icon} 
                  temp={day1.day.avgtemp_c}
                  sum={day1.day.condition.text}
                ></WeeksDetail>;
        })}
                    {/* way2
                    {data&&data.forecast.forecastday.map((day, id) => (
                      <WeeksDetail
                        key={id}
                        date={day.date}
                        icon={day.day.condition.icon}
                        temp={day.day.avgtemp_c}
                        sum={day.day.condition.text}
                      />
                    ))} */}




        
        </Buttompart>
        

       


        <Button variant="contained" color="primary">
        Hello World
        </Button>
        </Container>
      
    );
  }
}

export default Dashboard;

const Container = styled.div`
width:100%;
height:100%;
display: flex;
text-align: center;
flex-direction: column;
align-items:stretch;
max-width:1200px;
max-height:800px;
min-width:410px;
margin:0 auto;
`;

const Containerweather = styled.div`
display:flex;
flex: 6;
flex-direction: row ;
flex-wrap: wrap;
justify-content:center;
align-items:center;
background-color:#ffffffbf;
margin: 100px 50px 0 50px;
`;

const Left = styled.div`
flex:1;
`;

const Right = styled.div`
flex:1;
`;


const Buttompart = styled.div`
flex: 5;
display: flex;
flex-direction: row;
background-color:#ffffffbf;
margin:  1px 50px 50px 50px;
justify-content: center;

`;