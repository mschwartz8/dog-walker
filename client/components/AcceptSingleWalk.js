import React from "react";
import moment from "moment";


const AcceptSingleWalk = (props) => {
  const singleWalk = props.singleWalk 


  
  return (
    <tr>
        <td>{moment(singleWalk.startTime).format('MMMM Do YYYY, h:mm:ss a')}</td>
        <td>2</td>
        <td>Marie</td>
        <td>
        <button>Accept</button>
        </td>            
    </tr>
    
 )
};

export default AcceptSingleWalk;
