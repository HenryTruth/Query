
import React from 'react';


const CommentToBeToggled = ({toggleDiv,children,useThisClass}) => {
    return ( 
        <React.Fragment>
            <h1 onClick={toggleDiv}>Toggle</h1>
           <div className={useThisClass} >
             {children} 
               </div>  
        </React.Fragment>
     );
}
 
export default CommentToBeToggled;

