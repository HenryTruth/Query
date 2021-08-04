import React from "react";
import "./SIGN_UP_PAGE.scss";
import Header from "../../Header/Header";
import Form from "../../Form/Form";
import About from "../../About/About";
import QuestionBox from "../../QuestionBox/QuestionBox";
import AnswerBox from "../../AnswerBox/AnswerBox";
import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Date from "../../Date/Date";
import Like from "../../Like/Like";
import DevelopersTeam from "../../DevelopersTeam/DevelopersTeam";
import user5 from "../../assets/user5.jpg";
import user8 from "../../assets/user8.jpg";
import user7 from "../../assets/user7.jpg";

function SIGN_UP_PAGE() {
  const specialQuestionStyle = {
    border: "1px solid  rgba(128, 128, 128, 0.267)",
  };
  return (
    <div className="SIGN_UP_PAGE">
      <Header>
        <Form />
      </Header>
      <About>
        <h4>Ask a Question ?</h4>
        <div className="AboutQuestionWrapper">
          <QuestionBox
            specialQuestionStyle={specialQuestionStyle}
             userImage={user5}
            whoAskedThisQuestion="Tacha Emi"
            description="Software Developer"
            userQuestion="what is the group all about"
          >
            <DetailsButtons>
              <Like />

              {/* <Date /> */}
            </DetailsButtons>
          </QuestionBox>
          <h2>Get An Answer</h2>
          <QuestionBox
            userImage={user5}
            whoAskedThisQuestion="Gillard Dope"
            description="Crypto Investor"
            specialQuestionStyle={specialQuestionStyle}
            userQuestion="what is the group all about"
          >
            <AnswerBox
              whoAnsweredThisQuestion="David Mark"
              userImage={user7}
              description="Agric Fowl"
              userAnswer="I don't give a fuck if you are new here or not, just ask whatever you want to ask and fuck off!!"
            ></AnswerBox>
          </QuestionBox>

          <DevelopersTeam />
        </div>
      </About>
    </div>
  );
}

export default SIGN_UP_PAGE;
