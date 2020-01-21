import React, {Component} from 'react';
class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

saveFName = (e)  => {
this.setState({fname: e.target.value})
}


    getFormData = (e) => {
        e.preventDefault();
        console.log('HELLO FROM CLASS')
    }

    sendToServer = () => {
        if(!this.state.fname){
            this.setState({result: 'NO FIRST NAME'})
        }
    } 
render(){

    return(
    
        <div>
{this.state.fname}
{this.state.result}
<form noValidate onSubmit={this.getFormData}>

<label>
    ID: 
    <input type="number" placeholder="ID NUMBER" required />  
</label>

<label>
    First Name: 
    <input type="text" placeholder="First Name"  onChange={this.saveFName} />
</label>


<label>
    LAST Name: 
    <input type="text" placeholder="Last Name" />
</label>


<button onClick={this.sendToServer}> SEND </button>

</form>

        </div>
    )
}
}

export default Forms;