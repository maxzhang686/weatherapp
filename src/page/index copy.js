import React from 'react';
import Button from '@material-ui/core/Button';
import WeeksDetail from './WeeksDetail';
import CityDetail from './CityDetail';
import styled from 'styled-components';

const API = 'https://api.apixu.com/v1/forecast.json?key=dd644d7e780742f8af1111744192707&q=';
//const APIcurrent = 'https://api.apixu.com/v1/current.json?key=dd644d7e780742f8af1111744192707&q=';
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      city: 'Sydney',
      data: null,
      isLoading: false

    }
  }

  fetchData = async () => {
  console.log("fetching");
   await fetch( API+this.state.city+'&days=5')
      .then(respons => {respons.json()
        // .then(data=> {this.setState({current:data.current,location:data.location});console.log(data)
        .then(data=> {this.setState(data);console.log(data)
        })
      })
      .catch(err => console.log('err'))
  };
   
 
 componentDidMount() {
  this.fetchData();
}




  render(){
    const data = this.state.data;
    console.log("rendering" + data);
    return(
      
        <Container>
          
          <Containerweather>
            <CityDetail>
            {data && data.current && (
                    <CityDetail
                      temp={data.current.temp_c}
                      humidity={data.current.humidity}
                      wind={data.current.wind_mph}
                      condition={data.current.condition.text}
                    />
                  )}
            </CityDetail>
          </Containerweather>
        
        <WeeksDetail/>
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
max-width:900px;
max-height:561px;
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