import React from "react";

const AcceptSingleWalk = (props) => {
  const singleWalk = props.singleWalk 
  console.log(props, "inside single")
  return (
    <tr>  
        <td>{singleWalk.startTime}</td>
        <td>2</td>
        <td>Marie</td>
        <td>
            <button>Accept</button>
        </td>            
    </tr>
    
 )
};

export default AcceptSingleWalk;
