import React from 'react';
import styled from 'styled-components';
import { getDayOfWeek } from "../utilities";

class WeeksDetail extends React.Component{
  constructor(props) {
    super();
    console.log("props:" + props.date);
  }
  render(){
    const day = getDayOfWeek(this.props.date);

    return(
         <Containerweather>
        <div>
          <h3>{day}</h3>
        </div>
        <div>
          <img src={this.props.icon} alt="" />
        </div>
        <div>
          <h5>{this.props.temp} °C </h5>
        </div>
        <div>
          <p>{this.props.sum}</p>
        </div>
        </Containerweather>
      
    );
  }
}

export default WeeksDetail;


const Containerweather = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;

`;