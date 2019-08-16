import React from "react";



class Formhang extends React.Component{
    constructor(){
        super();
        this.state = {username:""}
    }
    render(){
        return(
            <form>
                <input type = "text" value = {this.state.username}/>
            </form>
        );
    }
}
export default Formhang;