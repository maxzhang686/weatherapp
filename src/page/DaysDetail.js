import React from 'react';
import styled from 'styled-components';

class DaysDetail extends React.Component{
  render(){
    return(
      
         <Containerweather>
          7days
        </Containerweather>
      
    );
  }
}

export default DaysDetail;


const Containerweather = styled.div`
flex: 4;
justify-content:center;
align-items:center;
background-color:white;
margin:  20px 50px 50px 50px;

`;