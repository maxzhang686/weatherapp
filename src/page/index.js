import React from 'react';
import Button from '@material-ui/core/Button';
import DaysDetail from './DaysDetail';
import CityDetail from './CityDetail';
import styled from 'styled-components';


class Dashboard extends React.Component{
  render(){
    return(
      
        <Containerweather>
        <CityDetail/>
        <DaysDetail/>
        <Button variant="contained" color="primary">
        Hello World
        </Button>
        </Containerweather>
      
    );
  }
}

export default Dashboard;

const Containerweather = styled.div`
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