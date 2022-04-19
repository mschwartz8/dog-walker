import React from "react";
import {connect} from 'react-redux'
import moment from "moment";
import {setWalkerOnWalk} from "../store/walk"


class AcceptSingleWalk extends React.Component {

  constructor(props){
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent (event){
    event.preventDefault();
    const email = event.target.walkerEmail.value;
    const dogId = this.props.singleWalk.dogId;
    const startTime = this.props.singleWalk.startTime;
    const walkInfoObj = {email, dogId, startTime}
    this.props.setWalkerOnWalk(walkInfoObj)
  }

  render (){
    const singleWalk = this.props.singleWalk 
    return (
      <tr>
            <td>{moment(singleWalk.startTime).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td> 
              <form onSubmit={this.handleEvent}>
                <input type="text" name="walkerEmail" placeholder="walker email..."></input> 
                <button>Accept</button>
              </form>
            </td>         
      </tr>
      
   )
  }

}

const mapStateToProps = (state) => {
  return {
    walk: state.walk,
  }
}

const mapDispatch = (dispatch) => {
  return {
    setWalkerOnWalk: (walk) => dispatch(setWalkerOnWalk(walk)) 
  }
}

export default connect(mapStateToProps, mapDispatch)(AcceptSingleWalk);
