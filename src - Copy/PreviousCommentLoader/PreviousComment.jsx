// import React from "react";

// export default function PreviousCommentLoader({toggleDiv,hiddenState,useThisClass}){

//     return(
//         <React.Fragment>
//             <h5 onClick={toggleDiv}>Load Previous comments to this answer</h5>
//             <div style={{background:'red'}} className={useThisClass}></div>
//         </React.Fragment>
//     )
// }

import React from 'react';


const commentToBeToggled = () => {
    return ( 
        <React.Fragment>
           <div className="org" style={{background:'green',height:'10rem',width:'40rem'}}>
             ZUCCIDD  
               </div>  
        </React.Fragment>
     );
}
 
export default commentToBeToggled;

