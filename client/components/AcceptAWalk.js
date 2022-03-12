import React from "react";
import {connect} from 'react-redux'
import {getAvailableWalks} from '../store/walk'
import AcceptSingleWalk from "./AcceptSingleWalk";


class AcceptAWalk extends React.Component {

  componentDidMount (){
    this.props.getAvailableWalks()
  }
  render() {

   
    return (
      <table className='center'>
        <tbody>
          <tr >
            <th>Time</th>
            <th>Dog #</th>
            <th>Contact</th>
            <th>Shift</th>
          </tr>          
          {this.props.walk.length > 0 && (
            this.props.walk.map((singleWalk) => {
              return <AcceptSingleWalk singleWalk={singleWalk}/>
            })                        
          )}
        </tbody>
      </table>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    walk: state.walk,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAvailableWalks: () => dispatch(getAvailableWalks()) 
  }
}



export default connect(mapStateToProps, mapDispatch)(AcceptAWalk);
