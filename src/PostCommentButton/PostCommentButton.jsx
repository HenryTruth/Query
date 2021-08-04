import React from "react";

export default function PostCommentButton({submit,textComment,useThisClass,useThisClassButtonClass}){
    return(
        <React.Fragment>
            <input
           
            className={useThisClass}
            onChange={textComment}
            type="text"
            placeholder="Comment on this answer"
            ></input>

            {/* <button type="submit" onSubmit={
            submit
            }></button> */}
            <button className={useThisClassButtonClass} type="submit" onClick={
            submit
            }>
            <img style={{height:'100%',width:'20%'}} src="https://img.icons8.com/color/50/000000/filled-sent.png" />
            </button>
        </React.Fragment>
    )
}