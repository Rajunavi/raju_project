// function User() {

//     return (
//       <div className="User">
//         <h1>Hello User !</h1>
//       </div>
//     );
//   }
  
//   export default User;

// import React, { Component } from "react";


// export default class User extends Component{

//     render()
//     {
//         return <h1>hello User</h1>
//     }

// }
import React from "react";
function User(props) {
    console.log(props);
    return(
        <div style={{backgroundColor:'skyblue',margin:20}}>
            <h1>Hello {props.name}</h1>
            <h2>email:{props.email}</h2>
            <h3>Address:{props.other.Address}</h3>
        </div>
    );
    
}

 export default User;