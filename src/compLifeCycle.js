import React, {Component} from 'react';
class CompLifeCycle extends Component{
    static getDerivedStateFromProps(props, state) {
        if(props.selected !== state.selected){
        return {
            id: props.id
        }
    }
  return null;

}
    constructor(props){
        super(props);
        this.state = {
     
        }
        
    }



componentDidMount(){
    console.log('didMount');
}

componentDidUpdate(){
    console.log('update')
}

// shouldComponentUpdate(){
//     console.log('should');
// }

updateData = () => {
    this.setState((state) => ({id: state.id + 1}) )
}

shouldComponentUpdate(){
    console.log('shuld');
    if(this.state.id < 5){
        return true;
    }
else{
    console.log('you cannot update state');
    return false;

}
 
}

render(){

    return(
    
        <div>
            <h1> lifeCycle </h1>
            <button onClick={this.updateData}> update </button>
        </div>
    )
}
}

export default CompLifeCycle;