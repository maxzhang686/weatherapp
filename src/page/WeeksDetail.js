import React from "react";
import styled from "styled-components";
//import { getDayOfWeek } from "../utilities";
import moment from "moment";

class WeeksDetail extends React.Component {
  constructor(props) {
    super();
    console.log("props:" + props.date);
  }
  render() {
    // const day = getDayOfWeek(this.props.date);

    return (
      <Containerweather>
        <div>
          <h3>{moment(this.props.date * 1000).format("DD MMM")}</h3>
          <h3>{moment(this.props.date * 1000).format("ddd")}</h3>
        </div>
        <div>
          <img src={`./img/${this.props.icon}.png`} alt="" />
        </div>
        <div>
          <p>
            {this.props.tempmin.toFixed(1)}- {this.props.tempmax.toFixed(1)}°C{" "}
          </p>
        </div>
        <div>
          <p>{this.props.icon}</p>
        </div>
      </Containerweather>
    );
  }
}

export default WeeksDetail;

const Containerweather = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
