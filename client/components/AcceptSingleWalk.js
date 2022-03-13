import React from "react";
import moment from "moment";


class AcceptSingleWalk extends React.Component {

  constructor(props){
    super(props)
  }

  handleEvent (event){
    event.preventDefault();
    const email = event.target.walkerEmail.value;
  }

  render (){
    const singleWalk = this.props.singleWalk 
    return (
      <tr>
          <td>{moment(singleWalk.startTime).format('MMMM Do YYYY, h:mm:ss a')}</td>
          <td> <input type="text" name="walkerEmail" placeholder="walker email..."></input> </td>
          <td>
          <button onClick={this.handleEvent}>Accept</button>
          </td>            
      </tr>
      
   )
  }

}

export default AcceptSingleWalk;
