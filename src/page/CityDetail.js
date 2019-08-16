import React from 'react';
import styled from 'styled-components';


class CityDetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
      city: 'Beijing',
      current:{},
      location:{},
    }
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
   async componentDidMount(){
     await fetch('https://api.apixu.com/v1/current.json?key=dd644d7e780742f8af1111744192707&q=Paris')
      .then(respons => respons.json())
      .then(data=> this.setState(data))
      // .then(data=>this.setState({current:data.current,location:data.location})
      .catch(err => console.log('err'))
      console.log(this.state.data)
  }




  render(){
    return(
        <Containerweather>
          <Left>{this.state.current.feelslike_c}</Left>
          <Right> {this.state.location.name}</Right>
         
        </Containerweather>
        
      
    );
  }
}

export default CityDetail;

// const Box = styled.div`
// min-width:100px;
// width:400px;
// max-width: 100%;

// `;

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
const xxx = styled.div`

`;