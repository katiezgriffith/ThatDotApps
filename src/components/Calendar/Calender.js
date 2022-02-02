// import third party library
import React from 'react';
import {Redirect, Route} from 'react-router-dom'
// import Chip from '@material-ui/core/Chip';
import Chip from '@material-ui/core/Chip';

// import user defined js file
import Add from '../../components/Addcomponent/Add';
import TestUserData from '../../Dataset/TestUserData';
import getStartDate from './CoreAlgorithm';
import Home from '../../components/Home/Home'



class Calen extends React.Component{
    constructor(props) {
      super(props);
      this.handleChangeState = this.handleChangeState.bind(this);
      this.state = {"currentPage": "Home",
      "currentDate": new Date(),
      "userData": JSON.parse(JSON.stringify(TestUserData)),
      "totalDuration": 30,
      "periodDuration": 5,
      "startDate": null
     };
const startDate = getStartDate(this.state);
this.state["startDate"] = startDate;


}




handleChangeState(state) {
state["startDate"] = getStartDate(state);
this.setState(state);
}



render() {
let state = this.state;
if (state["currentPage"] === "Home") {
return (
<Home handleChangeState={this.handleChangeState} state={state}/>
)
} else if (state["currentPage"] === "Add") {
return (
<Add handleChangeState={this.handleChangeState}  state={state}/>
)

}
else {
console.log(state);
return (
<Chip
label="Error! See console for detail"
color="secondary"
/>
)
}
}
}

export default Calen;