import React from "react";
import "./QuestionSkeletonLoader.scss";
// import Date from "../../Date/Date";
// import AnswerButton from "../../AnswerButton/AnswerButton";

import DetailsButtons from "../../DetailsButtons/DetailsButtons";
// import Like from "../../Like/Like";
// import CommentButton from "../../CommentButton/CommentButton";

export default function QuestionBoxSkeletonLoader({ children }) {
  return (
    <div className="QuestionSkeletonLoader">
      <div className="QuestionSkeletonLoaderBorder">
        <div className="QuestionSkeletonLoaderUserInitials">
          <div className="QuestionSkeletonLoaderuserImage"></div>
          <div className="QuestionSkeletonLoaderinitials">
            {/* <h3></h3>
            <p></p> */}
          </div>
        </div>
        <div className="QuestionSkeletonLoaderUserQuestion">
          <p className="QuestionSkeletonLoaderquestion"></p>
        </div>
      </div>

      <DetailsButtons>
        <div className="detailSkeleton"></div>
        <div className="detailSkeleton"></div>{" "}
        <div className="detailSkeleton odd"></div>{" "}
        <div className="detailSkeleton"></div>
      </DetailsButtons>

      {children}
    </div>
  );
}
